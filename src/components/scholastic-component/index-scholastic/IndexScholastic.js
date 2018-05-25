
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import ApiService from '../../../utils/api-service'

export default {
  template: require('./template.html'),
  name: 'IndexScholastic',
  data () {
    return {
      scholastic_fields: [
        {
          key: 'time',
          label: 'Time'
        },
        {
          key: 'institute',
          label: 'Institute'
        },
        {
          key: 'subject',
          label: 'Subject'
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
      scholastic_items: [],
      selected_scholastic: {name: ''},
      lang: this.$root.lang,
      base_path: '/scholastic'
    }
  },
  methods: {
    loadList () {
      const loader = this.$loading.show()
      ApiService.get('/' + this.lang + this.base_path)
        .then(response => {
          this.scholastic_items = response.data.data
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
    openModalDeleteScholastic: function (scholastic) {
      this.selected_scholastic = scholastic
      this.$modal.show('delete-scholastic')
    },
    closeModalDeleteScholastic: function () {
      this.$modal.hide('delete-scholastic')
    },
    deleteScholastic: function () {
      const loader = this.$loading.show()
      ApiService.delete('/' + this.lang + this.base_path + '/' + this.selected_scholastic.id)
        .then(response => {
          loader.hide()
          this.$modal.hide('delete-scholastic')
          this.$notify({
            group: 'app',
            title: 'Information',
            type: 'success',
            text: 'The scholastic was deleted successfully'
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
