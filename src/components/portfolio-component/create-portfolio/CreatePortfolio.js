import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import ApiService from '../../../utils/api-service'

export default {
  template: require('./template.html'),
  name: 'CreatePortfolio',
  data () {
    return {
      portfolio: {
        'description': '',
        'name': '',
        'order': 1,
        'resources': [
          {
            'description': '',
            'links': [],
            'name': '',
            'technologies': []
          }
        ]
      },
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
    onSubmit (evt) {
      evt.preventDefault()
      const loader = this.$loading.show()
      ApiService.postResource('/' + this.lang + this.base_path, this.portfolio)
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
    const self = this
    self.portfolio.lang = this.lang.toUpperCase()
    this.$root.$on('langChanged', function () {
      self.lang = this.lang
      self.portfolio.lang = this.lang.toUpperCase()
    })
  },
  components: {
    FontAwesomeIcon
  }
}
