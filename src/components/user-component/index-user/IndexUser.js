
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import AuthService from '../../../utils/auth-service'
import md5 from 'js-md5'

export default {
  template: require('./template.html'),
  name: 'IndexUser',
  data () {
    return {
      user_fields: [
        {
          key: 'full_name',
          label: 'Name'
        },
        {
          key: 'username',
          label: 'Username'
        },
        {
          key: 'email',
          label: 'E-mail'
        },
        {
          key: 'actions',
          class: 'text-center'
        }
      ],
      user_items: [],
      selected_user: {name: ''},
      lang: this.$root.lang,
      base_path: '/users'
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
      AuthService.listUsers()
        .then(response => {
          this.user_items = response.data
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
      return 'https://www.gravatar.com/avatar/' + md5(email) + '?s=36'
    },
    openModalDeleteUser: function (user) {
      this.selected_user = user
      this.$modal.show('delete-user')
    },
    closeModalDeleteUser: function () {
      this.$modal.hide('delete-user')
    },
    deleteUser: function () {
      const loader = this.$loading.show()
      AuthService.deleteUser(this.selected_user.id)
        .then(() => {
          loader.hide()
          this.$modal.hide('delete-user')
          this.$notify({
            group: 'app',
            title: 'Information',
            type: 'success',
            text: 'The user was deleted successfully'
          })
          this.loadList()
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
  created () {
    this.loadList()
  },
  components: {
    FontAwesomeIcon
  }
}
