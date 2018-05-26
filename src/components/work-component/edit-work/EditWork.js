import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import ApiService from '../../../utils/api-service'

export default {
  template: require('./template.html'),
  name: 'EditWork',
  data () {
    return {
      work: null,
      lang: this.$root.lang,
      base_path: '/works'
    }
  },
  mounted () {
    if (!this.$root.authenticated) {
      this.$router.replace({ name: 'Login' })
    }
  },
  methods: {
    loadWork () {
      const loader = this.$loading.show()
      ApiService.get('/' + this.lang + this.base_path + '/' + this.$route.params.id)
        .then(response => {
          this.work = response.data.data
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
      ApiService.put('/' + this.lang + this.base_path + '/' + this.$route.params.id, this.work)
        .then(response => {
          this.$router.push({name: 'IndexWork'})
          loader.hide()
        })
        .catch(() => {
          this.$notify({
            group: 'app',
            title: 'Error',
            type: 'error',
            text: 'Error on save Work please try again in a few minutes.'
          })
          loader.hide()
        })
    }
  },
  created () {
    this.loadWork()
    const self = this
    this.$root.$on('langChanged', function () {
      self.$router.push({name: 'IndexWork'})
    })
  },
  components: {
    FontAwesomeIcon
  }
}
