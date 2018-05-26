
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import ApiService from '../../../utils/api-service'

export default {
  template: require('./template.html'),
  name: 'IndexEducation',
  data () {
    return {
      education_fields: [
        {
          key: 'time',
          label: 'Time'
        },
        {
          key: 'institute',
          label: 'Institute'
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
      education_items: [],
      selected_education: {name: ''},
      lang: this.$root.lang,
      base_path: '/educations'
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
      ApiService.get('/' + this.lang + this.base_path)
        .then(response => {
          this.education_items = response.data.data
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
    openModalDeleteEducation: function (education) {
      this.selected_education = education
      this.$modal.show('delete-education')
    },
    closeModalDeleteEducation: function () {
      this.$modal.hide('delete-education')
    },
    deleteEducation: function () {
      const loader = this.$loading.show()
      ApiService.delete('/' + this.lang + this.base_path + '/' + this.selected_education.id)
        .then(response => {
          loader.hide()
          this.$modal.hide('delete-education')
          this.$notify({
            group: 'app',
            title: 'Information',
            type: 'success',
            text: 'The education was deleted successfully'
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
