import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import ApiService from '../../../utils/api-service'

export default {
  template: require('./template.html'),
  name: 'ShowSocialNetwork',
  data () {
    return {
      socialNetwork: null
    }
  },
  methods: {
    loadSocialNetwork () {
      const loader = this.$loading.show()
      ApiService.get('/' + this.lang + this.base_path + '/' + this.$route.params.id)
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
    }
  },
  created () {
    this.loadSocialNetwork()
  },
  components: {
    FontAwesomeIcon
  }
}
