import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import ApiService from '../../../utils/api-service'

export default {
  template: require('./template.html'),
  name: 'CreateResearch',
  data () {
    return {
      research: {
        'career': '',
        'detail': '',
        'institute': '',
        'lang': '',
        'order': 0,
        'time': ''
      },
      lang: this.$root.lang,
      base_path: '/researches'
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
      ApiService.postResource('/' + this.lang + this.base_path, this.research)
        .then(response => {
          this.$router.push({name: 'IndexResearch'})
          loader.hide()
        })
        .catch(() => {
          this.$notify({
            group: 'app',
            title: 'Error',
            type: 'error',
            text: 'Error on save Research please try again in a few minutes.'
          })
          loader.hide()
        })
    }
  },
  created () {
    const self = this
    self.research.lang = this.lang.toUpperCase()
    this.$root.$on('langChanged', function () {
      self.lang = this.lang
      self.research.lang = this.lang.toUpperCase()
    })
  },
  components: {
    FontAwesomeIcon
  }
}
