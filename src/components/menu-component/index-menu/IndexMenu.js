
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import ApiService from '../../../utils/api-service'

export default {
  template: require('./template.html'),
  name: 'IndexMenu',
  data () {
    return {
      menu_fields: [
        {
          key: 'text',
          label: 'Text'
        },
        {
          key: 'target',
          label: 'Target'
        },
        {
          key: 'order',
          label: 'Order',
          class: 'text-center'
        },
        {
          key: 'actions',
          class: 'text-center'
        }
      ],
      menu_items: [],
      selected_menu: {name: ''},
      lang: this.$root.lang,
      base_path: '/menu-items'
    }
  },
  mounted () {
    if (!this.$root.authenticated) {
      this.$router.replace({ name: 'Login' })
    }
  },
  methods: {
    loadList () {
      const loader = this.$loading.show()
      ApiService.getResource('/' + this.lang + this.base_path)
        .then(response => {
          this.menu_items = response.data.data
          loader.hide()
        })
        .catch(() => {
          this.$notify({
            group: 'app',
            title: 'Error',
            type: 'error',
            text: 'Can\'t load the information, please try again in a few minutes'
          })
          loader.hide()
        })
    },
    openModalDeleteMenu: function (menu) {
      this.selected_menu = menu
      this.$modal.show('delete-menu')
    },
    closeModalDeleteMenu: function () {
      this.$modal.hide('delete-menu')
    },
    deleteMenu: function () {
      const loader = this.$loading.show()
      ApiService.deleteResource('/' + this.lang + this.base_path + '/' + this.selected_menu.id)
        .then(response => {
          loader.hide()
          this.$modal.hide('delete-menu')
          this.$notify({
            group: 'app',
            title: 'Information',
            type: 'success',
            text: 'The menu was deleted successfully'
          })
          this.loadList()
        })
        .catch(() => {
          this.$notify({
            group: 'app',
            title: 'Error',
            type: 'error',
            text: 'Can\'t load the information, please try again in a few minutes'
          })
          loader.hide()
        })
    }
  },
  created () {
    const self = this
    this.$root.$on('langChanged', function () {
      self.lang = this.lang
    })
    this.loadList()
  },
  watch: {
    lang: function () {
      this.loadList()
    }
  },
  components: {
    FontAwesomeIcon
  }
}
