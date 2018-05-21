
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import ApiService from '../../../utils/api-service'

export default {
  template: require('./template.html'),
  name: 'IndexContact',
  data () {
    return {
      contact_fields: [
        {
          key: 'name',
          label: 'Name'
        },
        {
          key: 'icon',
          label: 'Icon'
        },
        {
          key: 'info',
          label: 'Information'
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
      contact_items: [],
      selected_contact: {name: ''},
      lang: this.$root.lang,
      base_path: '/contacts'
    }
  },
  methods: {
    loadList () {
      const loader = this.$loading.show()
      ApiService.get('/' + this.lang + this.base_path)
        .then(response => {
          this.contact_items = response.data.data
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
    openModalDeleteContact: function (Contact) {
      this.selected_contact = Contact
      this.$modal.show('delete-contact')
    },
    closeModalDeleteContact: function () {
      this.$modal.hide('delete-contact')
    },
    deleteContact: function () {
      const loader = this.$loading.show()
      ApiService.delete('/' + this.lang + this.base_path + '/' + this.selected_contact.id)
        .then(response => {
          loader.hide()
          this.$modal.hide('delete-contact')
          this.$notify({
            group: 'app',
            title: 'Information',
            type: 'success',
            text: 'The contact was deleted successfully'
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