import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import ApiService from '../../../utils/api-service'

export default {
  template: require('./template.html'),
  name: 'EditGift',
  data () {
    return {
      gift: null,
      lang: this.$root.lang,
      base_path: '/gifts'
    }
  },
  mounted () {
    if (!this.$root.authenticated) {
      this.$router.replace({ name: 'Login' })
    }
  },
  methods: {
    loadGift () {
      const loader = this.$loading.show()
      ApiService.getResource('/' + this.lang + this.base_path + '/' + this.$route.params.id)
        .then(response => {
          this.gift = response.data.data
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
      ApiService.putResource('/' + this.lang + this.base_path + '/' + this.$route.params.id, this.gift)
        .then(response => {
          this.$router.push({name: 'IndexGift'})
          loader.hide()
        })
        .catch(() => {
          this.$notify({
            group: 'app',
            title: 'Error',
            type: 'error',
            text: 'Error on save Gift please try again in a few minutes.'
          })
          loader.hide()
        })
    }
  },
  created () {
    this.loadGift()
    const self = this
    this.$root.$on('langChanged', function () {
      self.$router.push({name: 'IndexGift'})
    })
  },
  components: {
    FontAwesomeIcon
  }
}
