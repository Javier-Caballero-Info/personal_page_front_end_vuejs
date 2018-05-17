
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

const items = [
  {
    'img': 'https://s3.amazonaws.com/caballerojavier13-pages-files/personal_page/Redes_Sociales/facebook.png',
    'link': 'https://facebook.com/caballerojavier13',
    'name': 'Facebook',
    'lang': 'ES',
    'order': 1,
    'id': '-LAWFinWXEGVs2FQH8x1'
  },
  {
    'img': 'https://s3.amazonaws.com/caballerojavier13-pages-files/personal_page/Redes_Sociales/soundcloud.png',
    'link': 'https://soundcloud.com/caballerojavier13',
    'name': 'Soundcloud',
    'lang': 'ES',
    'order': 2,
    'id': '-LAdOz8EGGwqekia9Evw'
  },
  {
    'img': 'https://s3.amazonaws.com/caballerojavier13-pages-files/personal_page/Redes_Sociales/soundcloud.png',
    'link': 'https://soundcloud.com/caballerojavier13',
    'name': 'Soundcloud',
    'lang': 'ES',
    'order': 7,
    'id': '-LAugBA-nujfKvu1-aQQ'
  },
  {
    'img': 'https://s3.amazonaws.com/caballerojavier13-pages-files/personal_page/Redes_Sociales/soundcloud.png',
    'link': 'https://soundcloud.com/caballerojavier13',
    'name': 'Soundcloud',
    'lang': 'ES',
    'order': 7,
    'id': '-LAuzKnOB2gZB5Vj6TU6'
  },
  {
    'img': 'https://s3.amazonaws.com/caballerojavier13-pages-files/personal_page/Redes_Sociales/soundcloud.png',
    'link': 'https://soundcloud.com/caballerojavier13',
    'name': 'Soundcloud',
    'lang': 'ES',
    'order': 7,
    'id': '-LAuzUlIuvrGLPjMZO51'
  }
]

export default {
  template: require('./template.html'),
  name: 'IndexSocialNetwork',
  data () {
    return {
      social_network_fields: [
        {
          key: 'name',
          label: 'Name'
        },
        {
          key: 'link',
          label: 'Link'
        },
        {
          key: 'order',
          label: 'Order',
          class: 'text-center'
        },
        {
          key: 'actions',
          class: 'text-center'
        }
      ],
      social_network_items: items,
      selectedName: 'Facebook'
    }
  },
  methods: {
    openModalDeleteSocialNetwork: function () {
      this.$modal.show('delete-social-network')
    },
    closeModalDeleteSocialNetwork: function () {
      this.$modal.hide('delete-social-network')
    },
    deleteSocialNetwork: function () {
      this.$loading.show()
    }
  },
  components: {
    FontAwesomeIcon
  }
}
