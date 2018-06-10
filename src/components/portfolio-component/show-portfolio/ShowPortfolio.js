import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import ApiService from '../../../utils/api-service'

export default {
  template: require('./template.html'),
  name: 'ShowPortfolio',
  data () {
    return {
      portfolio: null,
      lang: this.$root.lang,
      base_path: '/portfolios'
    }
  },
  mounted () {
    if (!this.$root.authenticated) {
      this.$router.replace({ name: 'Login' })
    }
  },
  methods: {
    loadPortfolio () {
      const loader = this.$loading.show()
      ApiService.getResource('/' + this.lang + this.base_path + '/' + this.$route.params.id)
        .then(response => {
          this.portfolio = response.data.data
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
    }
  },
  created () {
    this.loadPortfolio()
    const self = this
    this.$root.$on('langChanged', function () {
      self.$router.push({name: 'IndexPortfolio'})
    })
  },
  components: {
    FontAwesomeIcon
  }
}
