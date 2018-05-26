import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import ApiService from '../../../utils/api-service'

export default {
  template: require('./template.html'),
  name: 'EditSocialNetwork',
  data () {
    return {
      socialNetwork: null,
      lang: this.$root.lang,
      base_path: '/social-networks'
    }
  },
  mounted () {
    if (!this.$root.authenticated) {
      this.$router.replace({ name: 'Login' })
    }
  },
  methods: {
    loadSocialNetwork () {
      const loader = this.$loading.show()
      ApiService.getResource('/' + this.lang + this.base_path + '/' + this.$route.params.id)
        .then(response => {
          this.socialNetwork = response.data.data
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
      ApiService.putResource('/' + this.lang + this.base_path + '/' + this.$route.params.id, this.socialNetwork)
        .then(response => {
          this.$router.push({name: 'IndexSocialNetwork'})
          loader.hide()
        })
        .catch(() => {
          this.$notify({
            group: 'app',
            title: 'Error',
            type: 'error',
            text: 'Error on save Social Network please try again in a few minutes.'
          })
          loader.hide()
        })
    }
  },
  created () {
    this.loadSocialNetwork()
    const self = this
    this.$root.$on('langChanged', function () {
      self.$router.push({name: 'IndexSocialNetwork'})
    })
  },
  components: {
    FontAwesomeIcon
  }
}
