import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import ApiService from '../../../utils/api-service'

export default {
  template: require('./template.html'),
  name: 'EditContact',
  data () {
    return {
      contact: null,
      lang: this.$root.lang,
      base_path: '/contacts'
    }
  },
  methods: {
    loadContact () {
      const loader = this.$loading.show()
      ApiService.get('/' + this.lang + this.base_path + '/' + this.$route.params.id)
        .then(response => {
          this.contact = response.data.data
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
    onSubmit (evt) {
      evt.preventDefault()
      const loader = this.$loading.show()
      ApiService.put('/' + this.lang + this.base_path + '/' + this.$route.params.id, this.contact)
        .then(response => {
          this.$router.push({name: 'IndexContact'})
          loader.hide()
        })
        .catch(() => {
          this.$notify({
            group: 'app',
            title: 'Error',
            type: 'error',
            text: 'Error on save Contact please try again in a few minutes.'
          })
          loader.hide()
        })
    }
  },
  created () {
    this.loadContact()
    const self = this
    this.$root.$on('langChanged', function () {
      self.$router.push({name: 'IndexContact'})
    })
  },
  components: {
    FontAwesomeIcon
  }
}
