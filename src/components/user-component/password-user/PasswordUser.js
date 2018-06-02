import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import AuthService from '../../../utils/auth-service'

export default {
  template: require('./template.html'),
  name: 'MeUser',
  data () {
    return {
      user: {
        password: '',
        password_confirmation: ''
      }
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
      const self = this
      const loader = this.$loading.show()
      AuthService.changePassword(this.user)
        .then(() => {
          loader.hide()
          self.$notify({
            group: 'app',
            title: 'Information',
            type: 'success',
            text: 'Password changed successfully'
          })
          this.$router.push({name: 'IndexUser'})
        })
        .catch(() => {
          this.$notify({
            group: 'app',
            title: 'Error',
            type: 'error',
            text: 'Error on change password please try again in a few minutes.'
          })
          loader.hide()
        })
    }
  },
  components: {
    FontAwesomeIcon
  }
}
