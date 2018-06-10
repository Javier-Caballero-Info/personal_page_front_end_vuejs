import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import ApiService from '../../../utils/api-service'

export default {
  template: require('./template.html'),
  name: 'EditPortfolio',
  data () {
    return {
      portfolio: null,
      emptyResource: {
        'description': '',
        'links': [],
        'name': '',
        'technologies': []
      },
      emptyLink: {
        'icon': 'fa link',
        'link': '',
        'name': ''
      },
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
    },
    onSubmit (evt) {
      evt.preventDefault()
      const loader = this.$loading.show()
      ApiService.putResource('/' + this.lang + this.base_path + '/' + this.$route.params.id, this.portfolio)
        .then(response => {
          this.$router.push({name: 'IndexPortfolio'})
          loader.hide()
        })
        .catch(() => {
          this.$notify({
            group: 'app',
            title: 'Error',
            type: 'error',
            text: 'Error on save Portfolio please try again in a few minutes.'
          })
          loader.hide()
        })
    },
    addResource () {
      this.portfolio.resources.push(this.emptyResource)
    },
    removeResource (indexResource) {
      this.portfolio.resources.splice(indexResource, 1)
      if (this.portfolio.resources.length === 0) {
        this.portfolio.resources.push(this.emptyResource)
      }
    },
    addLink (resource) {
      resource.links.push(this.emptyLink)
    },
    removeLink (resource, indexLink) {
      resource.links.splice(indexLink, 1)
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
