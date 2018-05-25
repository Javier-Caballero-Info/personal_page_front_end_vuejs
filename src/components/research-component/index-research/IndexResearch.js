
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import ApiService from '../../../utils/api-service'

export default {
  template: require('./template.html'),
  name: 'IndexResearch',
  data () {
    return {
      research_fields: [
        {
          key: 'time',
          label: 'Time'
        },
        {
          key: 'group',
          label: 'Group'
        },
        {
          key: 'project',
          label: 'Project'
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
      research_items: [],
      selected_research: {group: '', project: ''},
      lang: this.$root.lang,
      base_path: '/researches'
    }
  },
  methods: {
    loadList () {
      const loader = this.$loading.show()
      ApiService.get('/' + this.lang + this.base_path)
        .then(response => {
          this.research_items = response.data.data
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
    openModalDeleteResearch: function (research) {
      this.selected_research = research
      this.$modal.show('delete-research')
    },
    closeModalDeleteResearch: function () {
      this.$modal.hide('delete-research')
    },
    deleteResearch: function () {
      const loader = this.$loading.show()
      ApiService.delete('/' + this.lang + this.base_path + '/' + this.selected_research.id)
        .then(response => {
          loader.hide()
          this.$modal.hide('delete-research')
          this.$notify({
            group: 'app',
            title: 'Information',
            type: 'success',
            text: 'The research was deleted successfully'
          })
          this.loadList()
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
