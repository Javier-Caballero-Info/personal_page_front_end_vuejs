import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import ApiService from '../../../utils/api-service'

export default {
  template: require('./template.html'),
  name: 'EditMenu',
  data () {
    return {
      menu: null,
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
    loadMenu () {
      const loader = this.$loading.show()
      ApiService.getResource('/' + this.lang + this.base_path + '/' + this.$route.params.id)
        .then(response => {
          this.menu = response.data.data
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
      ApiService.putResource('/' + this.lang + this.base_path + '/' + this.$route.params.id, this.menu)
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
    this.loadMenu()
    const self = this
    this.$root.$on('langChanged', function () {
      self.$router.push({name: 'IndexMenu'})
    })
  },
  components: {
    FontAwesomeIcon
  }
}
