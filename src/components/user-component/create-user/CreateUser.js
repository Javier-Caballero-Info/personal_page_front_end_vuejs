import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import AuthService from '../../../utils/auth-service'
import md5 from 'js-md5'

export default {
  template: require('./template.html'),
  name: 'CreateUser',
  data () {
    return {
      user: {
        'first_name': '',
        'last_name': '',
        'username': '',
        'email': '',
        'password': '',
        'password_confirmation': ''
      }
    }
  },
  mounted () {
    if (!this.$root.authenticated) {
      this.$router.replace({ name: 'Login' })
    }
  },
  methods: {
    getGavatarUrl: function (email) {
      return 'https://www.gravatar.com/avatar/' + md5(email) + '?s=200'
    },
    onSubmit (evt) {
      evt.preventDefault()
      const loader = this.$loading.show()
      AuthService.postUser(this.user)
        .then(() => {
          this.$router.push({name: 'IndexUser'})
          loader.hide()
        })
        .catch(error => {
          this.$notify({
            group: 'app',
            title: 'Error',
            type: 'error',
            text: error.message
          })
          loader.hide()
        })
    }
  },
  components: {
    FontAwesomeIcon
  }
}
