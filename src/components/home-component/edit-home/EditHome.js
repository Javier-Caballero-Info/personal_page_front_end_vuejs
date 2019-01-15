import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import ApiService from '../../../utils/api-service'

import FileChooser from '../../../shared-components/FileChooser'

export default {
  template: require('./template.html'),
  name: 'EditHome',
  data () {
    return {
      home: null,
      lang: this.$root.lang,
      base_path: '/home'
    }
  },
  mounted () {
    if (!this.$root.authenticated) {
      this.$router.replace({ name: 'Login' })
    }
  },
  methods: {
    loadHome () {
      const loader = this.$loading.show()
      ApiService.getResource('/' + this.lang + this.base_path)
        .then(response => {
          this.home = response.data.data
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
      ApiService.putResource('/' + this.lang + this.base_path + '/' + this.$route.params.id, this.home)
        .then(response => {
          this.$router.push({name: 'IndexHome'})
          loader.hide()
        })
        .catch(() => {
          this.$notify({
            group: 'app',
            title: 'Error',
            type: 'error',
            text: 'Error on save Home please try again in a few minutes.'
          })
          loader.hide()
        })
    }
  },
  created () {
    this.loadHome()
    const self = this
    this.$root.$on('langChanged', function () {
      self.$router.push({name: 'IndexHome'})
    })
  },
  components: {
    FontAwesomeIcon,
    FileChooser
  }
}
