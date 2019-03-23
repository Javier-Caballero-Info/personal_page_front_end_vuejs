import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import ApiService from '../../../utils/api-service'

export default {
  template: require('./template.html'),
  name: 'CreateGift',
  data () {
    return {
      gift: {
        'description': '',
        'tags': [],
        'price': 0.0,
        'lang': '',
        'priority': 1
      },
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
    onSubmit (evt) {
      evt.preventDefault()
      const loader = this.$loading.show()
      ApiService.postResource('/' + this.lang + this.base_path, this.gift)
        .then(response => {
          this.$router.push({name: 'IndexGift'})
          loader.hide()
        })
        .catch(() => {
          this.$notify({
            group: 'app',
            title: 'Error',
            type: 'error',
            text: 'Error on save Gift please try again in a few minutes.'
          })
          loader.hide()
        })
    }
  },
  created () {
    const self = this
    self.gift.lang = this.lang.toUpperCase()
    this.$root.$on('langChanged', function () {
      self.lang = this.lang
      self.gift.lang = this.lang.toUpperCase()
    })
  },
  components: {
    FontAwesomeIcon
  }
}
