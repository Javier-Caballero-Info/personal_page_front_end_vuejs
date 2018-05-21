import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import ApiService from '../../../utils/api-service'

export default {
  template: require('./template.html'),
  name: 'ShowWork',
  data () {
    return {
      work: null,
      lang: this.$root.lang,
      base_path: '/works'
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
