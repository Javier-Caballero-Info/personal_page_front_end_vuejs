import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import ApiService from '../../../utils/api-service'

import FileChooser from '../../../shared-components/FileChooser'

export default {
  template: require('./template.html'),
  name: 'CreateContact',
  data () {
    return {
      contact: {
        'img': '',
        'icon': '',
        'info': '',
        'name': '',
        'lang': '',
        'order': 0
      },
      lang: this.$root.lang,
      base_path: '/contacts'
    }
  },
  mounted () {
    if (!this.$root.authenticated) {
      this.$router.replace({ name: 'Login' })
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const loader = this.$loading.show()
      ApiService.postResource('/' + this.lang + this.base_path, this.contact)
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
    const self = this
    self.contact.lang = this.lang.toUpperCase()
    this.$root.$on('langChanged', function () {
      self.lang = this.lang
      self.contact.lang = this.lang.toUpperCase()
    })
  },
  components: {
    FontAwesomeIcon,
    FileChooser
  }
}
