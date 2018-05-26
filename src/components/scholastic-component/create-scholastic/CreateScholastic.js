import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import ApiService from '../../../utils/api-service'

export default {
  template: require('./template.html'),
  name: 'CreateScholastic',
  data () {
    return {
      scholastic: {
        'time': '',
        'institute': '',
        'subject': '',
        'description': '',
        'lang': '',
        'order': 0
      },
      lang: this.$root.lang,
      base_path: '/scholastic'
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
      ApiService.postResource('/' + this.lang + this.base_path, this.scholastic)
        .then(response => {
          this.$router.push({name: 'IndexScholastic'})
          loader.hide()
        })
        .catch(() => {
          this.$notify({
            group: 'app',
            title: 'Error',
            type: 'error',
            text: 'Error on save Scholastic please try again in a few minutes.'
          })
          loader.hide()
        })
    }
  },
  created () {
    const self = this
    self.scholastic.lang = this.lang.toUpperCase()
    this.$root.$on('langChanged', function () {
      self.lang = this.lang
      self.scholastic.lang = this.lang.toUpperCase()
    })
  },
  components: {
    FontAwesomeIcon
  }
}
