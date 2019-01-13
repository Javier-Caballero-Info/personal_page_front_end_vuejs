import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import ApiService from '../../../utils/api-service'

export default {
  template: require('./template.html'),
  name: 'CreateMenu',
  data () {
    return {
      menu: {
        'time': '',
        'company': '',
        'position': '',
        'description': '',
        'lang': '',
        'order': 0
      },
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
    onSubmit (evt) {
      evt.preventDefault()
      const loader = this.$loading.show()
      ApiService.postResource('/' + this.lang + this.base_path, this.menu)
        .then(response => {
          this.$router.push({name: 'IndexMenu'})
          loader.hide()
        })
        .catch(() => {
          this.$notify({
            group: 'app',
            title: 'Error',
            type: 'error',
            text: 'Error on save Menu please try again in a few minutes.'
          })
          loader.hide()
        })
    }
  },
  created () {
    const self = this
    self.menu.lang = this.lang.toUpperCase()
    this.$root.$on('langChanged', function () {
      self.lang = this.lang
      self.menu.lang = this.lang.toUpperCase()
    })
  },
  components: {
    FontAwesomeIcon
  }
}
