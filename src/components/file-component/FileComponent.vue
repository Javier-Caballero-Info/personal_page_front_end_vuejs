<template>
  <div class='mt-4'>
    <h1 class='title text-left'>
      <small><font-awesome-icon :icon="['fas', 'rocket']" /> </small>
      Files
    </h1>
    <hr/>
    <b-card class='mb-4'>
      <b-button v-on:click="listAllFiles()" variant="outline-secondary" v-b-tooltip.hover title="Reload">
        <font-awesome-icon :icon="['fas', 'sync']" /> Reload list
      </b-button>
      <b-button v-on:click="openFileChooserModal()" class="float-right" variant="outline-success">
        <font-awesome-icon :icon="['fas', 'plus']" /> Upload file
      </b-button>
    </b-card>
    <b-card class='mb-4'>
      <div class="row">
        <div class="col">
          <b-form-group label="Folder:">
            <select v-model="selectFolder" class="form-control custom-select" v-on:change="listAllFiles">
              <option v-for="item in folders" v-bind:value="item" :key="item">
                {{ item }}
              </option>
            </select>
          </b-form-group>
        </div>
      </div>
    </b-card>
    <b-card>
      <b-alert variant="warning text-center" class="mt-3" show v-show="files.length === 0">
        The selected folder is empty
      </b-alert>
      <ul class="list-unstyled" v-show="files.length > 0">
        <li class="media" v-for="f of files" v-bind:key="f.path" @click="choicePicture(f.url)">
          <img class="img-fluid img-thumbnail mr-3" :src='f.url' alt="Generic placeholder image" height="64px" width="64px">
          <div class="media-body">
            <h5 class="mt-0 mb-1 text-truncate">{{f.name}}</h5>
            <p class="text-muted text-truncate">{{f.path}}</p>
          </div>
          <b-button variant="outline-danger" class="float-right" v-on:click="deleteFile(f.path)">
            <font-awesome-icon :icon="['fas', 'trash']" />
          </b-button>
        </li>
      </ul>
    </b-card>
    <!-- Modal Component -->
    <b-modal id="FileChooserModal" ref="fileUploaderModal"
             hide-footer size="lg" title="Upload a picture"
             no-close-on-backdrop no-close-on-esc hide-header-close>
      <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
        <h1>Upload images</h1>
        <b-form-group label="Folder:">
          <b-form-select :options="folders"
                         v-model="selectFolder">
          </b-form-select>
        </b-form-group>
        <div class="dropbox" v-if="!isSaving">
          <input type="file" :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
                 accept="image/*" class="input-file">
          <p v-if="isInitial">
            Drag your file here to begin<br> or click to browse
          </p>
        </div>
        <b-progress :value="progressUpload" :max="100" show-progress show-value animated v-if="isSaving"></b-progress>
        <hr>
        <b-button variant="outline-secondary btn-block" v-on:click="closeFileChooserModal">
          Cancel
        </b-button>
      </form>
    </b-modal>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import StorageService from '../../utils/storage-service'

const STATUS_INITIAL = 0
const STATUS_SAVING = 1
const STATUS_SUCCESS = 2
const STATUS_FAILED = 3

export default {
  name: 'FileComponent',
  data: function () {
    return {
      folders: [
        'Contacts',
        'Social_Networks',
        'Home'
      ],
      fieldName: 'upload',
      selectFolder: 'Contacts',
      file: null,
      fileUploaderModal: null,
      files: [],
      uploadedFiles: [],
      uploadError: null,
      currentStatus: STATUS_INITIAL,
      uploadFieldName: 'upload',
      progressUpload: 0
    }
  },
  computed: {
    isInitial () {
      return this.currentStatus === STATUS_INITIAL
    },
    isSaving () {
      return this.currentStatus === STATUS_SAVING
    },
    isSuccess () {
      return this.currentStatus === STATUS_SUCCESS
    },
    isFailed () {
      return this.currentStatus === STATUS_FAILED
    },
    fileName: function () {
      if (this.file && this.file.fileName) {
        return this.file.fileName.replace(/\\/g, '/').replace(/.*\//, '')
      } else {
        return ''
      }
    }
  },
  props: {
  },
  methods: {
    listAllFiles: function () {
      const loader = this.$loading.show()
      StorageService.listFiles('/' + this.selectFolder)
        .then(response => {
          this.files = response.data.files
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
    openFileChooserModal: function () {
      this.$refs.fileUploaderModal.show()
    },
    closeFileChooserModal: function () {
      this.$refs.fileUploaderModal.hide()
      this.reset()
    },
    reset () {
      // reset form to initial state
      this.currentStatus = STATUS_INITIAL
      this.uploadedFiles = []
      this.uploadError = null
      this.progressUpload = 0
      this.listAllFiles()
    },
    deleteFile (filePath) {
      const loader = this.$loading.show()
      StorageService.deleteFile('/' + filePath)
        .then(() => {
          loader.hide()
          this.reset()
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
    save (formData) {
      const loader = this.$loading.show()
      // upload data to the server
      this.currentStatus = STATUS_SAVING
      StorageService.uploadFile('/' + this.selectFolder, formData, this)
        .then(() => {
          loader.hide()
          this.closeFileChooserModal()
        })
        .catch(() => {
          this.$notify({
            group: 'app',
            title: 'Error',
            type: 'error',
            text: 'Can\'t load the information, please try again in a few minutes'
          })
          loader.hide()
          this.reset()
        })
    },
    filesChange (fieldName, fileList) {
      // handle file changes
      const formData = new FormData()
      if (!fileList.length) return
      // append the files to FormData
      Array
        .from(Array(fileList.length).keys())
        .map(x => {
          formData.append(fieldName, fileList[x], fileList[x].name)
        })
        // save it
      this.save(formData)
    }
  },
  created () {
    const self = this
    this.$on('fileProgressUpload', function (data) {
      self.progressUpload = data
    })
  },
  mounted: function () {
    this.reset()
  },
  components: {
    FontAwesomeIcon,
    StorageService
  }
}
</script>

<style scoped>
  .dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: #cecece;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: #dcdcdc;
  }

  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
  .media {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: start;
    border: solid 1px #c7c7c7;
    align-items: flex-start;
    margin-bottom: 20px;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
  }
  .media:hover {
    background: whitesmoke;
    border-color: #a7a7a7;
  }
  .media-body {
    flex: 1;
    width: 100%;
    overflow: auto;
  }
</style>
