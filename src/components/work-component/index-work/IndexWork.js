
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import ApiService from '../../../utils/api-service'

export default {
  template: require('./template.html'),
  name: 'IndexWork',
  data () {
    return {
      work_fields: [
        {
          key: 'time',
          label: 'Time'
        },
        {
          key: 'company',
          label: 'Company'
        },
        {
          key: 'position',
          label: 'Position'
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
      work_items: [],
      selected_work: {name: ''},
      lang: this.$root.lang,
      base_path: '/works'
    }
  },
  methods: {
    loadList () {
      const loader = this.$loading.show()
      ApiService.get('/' + this.lang + this.base_path)
        .then(response => {
          this.work_items = response.data.data
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
    openModalDeleteWork: function (work) {
      this.selected_work = work
      this.$modal.show('delete-work')
    },
    closeModalDeleteWork: function () {
      this.$modal.hide('delete-work')
    },
    deleteWork: function () {
      const loader = this.$loading.show()
      ApiService.delete('/' + this.lang + this.base_path + '/' + this.selected_work.id)
        .then(response => {
          loader.hide()
          this.$modal.hide('delete-work')
          this.$notify({
            group: 'app',
            title: 'Information',
            type: 'success',
            text: 'The work was deleted successfully'
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
