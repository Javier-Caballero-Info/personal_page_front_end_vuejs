import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

const socialNetwork = {
  'img': '',
  'link': '',
  'name': '',
  'lang': 'ES',
  'order': 0
}

export default {
  template: require('./template.html'),
  name: 'ShowSocialNetwork',
  data () {
    return {
      socialNetwork: socialNetwork // this.$route.params.id
    }
  },
  components: {
    FontAwesomeIcon
  }
}
