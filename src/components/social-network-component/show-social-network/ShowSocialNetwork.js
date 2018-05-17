import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

const socialNetwork = {
  'img': 'https://s3.amazonaws.com/caballerojavier13-pages-files/personal_page/Redes_Sociales/facebook.png',
  'link': 'https://facebook.com/caballerojavier13',
  'name': 'Facebook',
  'lang': 'ES',
  'order': 1,
  'id': '-LAWFinWXEGVs2FQH8x1'
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
