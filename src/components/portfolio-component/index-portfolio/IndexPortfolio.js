
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import ApiService from '../../../utils/api-service'

export default {
  template: require('./template.html'),
  name: 'IndexPortfolio',
  data () {
    return {
      portfolio_fields: [
        {
          key: 'name',
          label: 'Name'
        },
        {
          key: 'order',
          label: 'Order',
          class: 'text-center'
        },
        {
          key: 'actions',
          class: 'text-center'
        }
      ],
      portfolio_items: [],
      selected_portfolio: {name: ''},
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
    loadList () {
      const loader = this.$loading.show()
      ApiService.getResource('/' + this.lang + this.base_path)
        .then(response => {
          this.portfolio_items = response.data.data
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
    openModalDeletePortfolio: function (portfolio) {
      this.selected_portfolio = portfolio
      this.$modal.show('delete-portfolio')
    },
    closeModalDeletePortfolio: function () {
      this.$modal.hide('delete-portfolio')
    },
    deletePortfolio: function () {
      const loader = this.$loading.show()
      ApiService.deleteResource('/' + this.lang + this.base_path + '/' + this.selected_portfolio.id)
        .then(response => {
          loader.hide()
          this.$modal.hide('delete-portfolio')
          this.$notify({
            group: 'app',
            title: 'Information',
            type: 'success',
            text: 'The portfolio was deleted successfully'
          })
          this.loadList()
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
    const self = this
    this.$root.$on('langChanged', function () {
      self.lang = this.lang
    })
    this.loadList()
  },
  watch: {
    lang: function () {
      this.loadList()
    }
  },
  components: {
    FontAwesomeIcon
  }
}
