import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import AuthService from '../../../utils/auth-service'
import md5 from 'js-md5'

export default {
  template: require('./template.html'),
  name: 'EditUser',
  data () {
    return {
      user: null
    }
  },
  mounted () {
    if (!this.$root.authenticated) {
      this.$router.replace({ name: 'Login' })
    }
  },
  methods: {
    loadUser () {
      const loader = this.$loading.show()
      AuthService.getUserById(this.$route.params.id)
        .then(response => {
          this.user = response.data
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
    getGavatarUrl: function (email) {
      return 'https://www.gravatar.com/avatar/' + md5(email) + '?s=200'
    },
    onSubmit (evt) {
      evt.preventDefault()
      const loader = this.$loading.show()
      AuthService.putUser(this.$route.params.id, this.user)
        .then(response => {
          this.$router.push({name: 'IndexUser'})
          loader.hide()
        })
        .catch(() => {
          this.$notify({
            group: 'app',
            title: 'Error',
            type: 'error',
            text: 'Error on save User please try again in a few minutes.'
          })
          loader.hide()
        })
    }
  },
  created () {
    this.loadUser()
  },
  components: {
    FontAwesomeIcon
  }
}
