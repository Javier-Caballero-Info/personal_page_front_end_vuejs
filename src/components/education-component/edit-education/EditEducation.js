import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import ApiService from '../../../utils/api-service'

export default {
  template: require('./template.html'),
  name: 'EditEducation',
  data () {
    return {
      education: null,
      lang: this.$root.lang,
      base_path: '/educations'
    }
  },
  methods: {
    loadEducation () {
      const loader = this.$loading.show()
      ApiService.get('/' + this.lang + this.base_path + '/' + this.$route.params.id)
        .then(response => {
          this.education = response.data.data
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
      ApiService.put('/' + this.lang + this.base_path + '/' + this.$route.params.id, this.education)
        .then(response => {
          this.$router.push({name: 'IndexEducation'})
          loader.hide()
        })
        .catch(() => {
          this.$notify({
            group: 'app',
            title: 'Error',
            type: 'error',
            text: 'Error on save Education please try again in a few minutes.'
          })
          loader.hide()
        })
    }
  },
  created () {
    this.loadEducation()
    const self = this
    this.$root.$on('langChanged', function () {
      self.$router.push({name: 'IndexEducation'})
    })
  },
  components: {
    FontAwesomeIcon
  }
}
