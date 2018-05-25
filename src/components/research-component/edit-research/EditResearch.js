import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import ApiService from '../../../utils/api-service'

export default {
  template: require('./template.html'),
  name: 'EditResearch',
  data () {
    return {
      research: null,
      lang: this.$root.lang,
      base_path: '/researches'
    }
  },
  methods: {
    loadResearch () {
      const loader = this.$loading.show()
      ApiService.get('/' + this.lang + this.base_path + '/' + this.$route.params.id)
        .then(response => {
          this.research = response.data.data
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
      ApiService.put('/' + this.lang + this.base_path + '/' + this.$route.params.id, this.research)
        .then(response => {
          this.$router.push({name: 'IndexResearch'})
          loader.hide()
        })
        .catch(() => {
          this.$notify({
            group: 'app',
            title: 'Error',
            type: 'error',
            text: 'Error on save Research please try again in a few minutes.'
          })
          loader.hide()
        })
    }
  },
  created () {
    this.loadResearch()
    const self = this
    this.$root.$on('langChanged', function () {
      self.$router.push({name: 'IndexResearch'})
    })
  },
  components: {
    FontAwesomeIcon
  }
}
