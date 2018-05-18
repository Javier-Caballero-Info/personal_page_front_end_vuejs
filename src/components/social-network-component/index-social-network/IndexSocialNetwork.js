
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import ApiService from '../../../utils/api-service'

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
      social_network_items: null,
      selectedName: '',
      lang: this.$root.lang,
      base_path: '/social-networks'
    }
  },
  methods: {
    loadList () {
      const loader = this.$loading.show()
      ApiService.get('/' + this.lang + this.base_path)
        .then(response => {
          this.social_network_items = response.data.data
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
    openModalDeleteSocialNetwork: function (name) {
      this.selectedName = name
      this.$modal.show('delete-social-network')
    },
    closeModalDeleteSocialNetwork: function () {
      this.$modal.hide('delete-social-network')
    },
    deleteSocialNetwork: function () {
      // this.loader = this.$loading.show()
      this.$modal.hide('delete-social-network')
      this.$notify({
        group: 'app',
        title: 'Information',
        type: 'success',
        text: 'The social network was deleted successfully'
      })
      this.loadList()
    }
  },
  created () {
    const self = this
    this.$root.$on('langChanged', function () {
      self.lang = this.lang
    })
    this.loadList()
  },
  watch: {
    lang: function () {
      this.loadList()
    }
  },
  components: {
    FontAwesomeIcon
  }
}
