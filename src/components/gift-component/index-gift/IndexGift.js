
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import ApiService from '../../../utils/api-service'

export default {
  template: require('./template.html'),
  name: 'IndexGift',
  data () {
    return {
      gift_fields: [
        {
          key: 'priority',
          label: 'Priority'
        },
        {
          key: 'description',
          label: 'Description'
        },
        {
          key: 'price',
          label: 'Price'
        },
        {
          key: 'actions',
          class: 'text-center'
        }
      ],
      gift_items: [],
      selected_gift: {name: ''},
      lang: this.$root.lang,
      base_path: '/gifts'
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
          this.gift_items = response.data.data
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
    openModalDeleteGift: function (gift) {
      this.selected_gift = gift
      this.$modal.show('delete-gift')
    },
    closeModalDeleteGift: function () {
      this.$modal.hide('delete-gift')
    },
    deleteGift: function () {
      const loader = this.$loading.show()
      ApiService.deleteResource('/' + this.lang + this.base_path + '/' + this.selected_gift.id)
        .then(response => {
          loader.hide()
          this.$modal.hide('delete-gift')
          this.$notify({
            group: 'app',
            title: 'Information',
            type: 'success',
            text: 'The gift was deleted successfully'
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
