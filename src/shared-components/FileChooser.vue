<template>
    <div id="file-chooser">
        <b-form-group id="File_Chooser_Url_Group"
                      label="Image:"
                      label-for="File_Chooser_Url">

            <div class="input-group">
                <b-form-input id="File_Chooser_Url"
                              name="img"
                              type="url"
                              v-validate.initial="'required|url'"
                              v-validate.disabled="'required|url'"
                              v-model="url"
                              required
                              disabled
                              data-vv-as="image"
                              :class="{'input': true, 'is-invalid': errors.has('img'), 'is-valid': !errors.has('img')}"
                              style="background: white; cursor: not-allowed;"
                              placeholder="Image">
                </b-form-input>
                <div class="input-group-append">
                    <b-button @click="openFileChooserModal()">
                        <font-awesome-icon :icon="['far', 'file-image']" />
                    </b-button>
                </div>
                <p class="invalid-feedback">
                    <span v-show="errors.has('img')" class="help">{{ errors.first('img') }}</span>
                </p>
            </div>
        </b-form-group>
        <!-- Modal Component -->
        <b-modal id="FileChooserModal" ref="fileChooserModal" hide-footer size="lg" title="Choose a picture">
            <b-alert variant="warning" class="mt-3" show v-show="files.length === 0">
                The selected folder is empty
            </b-alert>

            <ul class="list-unstyled" v-show="files.length > 0">
                <li class="media" v-for="f of files" v-bind:key="f.path" @click="choicePicture(f.url)">
                    <img class="img-fluid img-thumbnail mr-3" :src='f.url' alt="Generic placeholder image" height="64px" width="64px">
                    <div class="media-body">
                        <h5 class="mt-0 mb-1">{{f.name}}</h5>
                        <p class="text-muted">{{f.path}}</p>
                    </div>
                </li>
            </ul>
        </b-modal>
    </div>
</template>

<script>

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import StorageService from '../utils/storage-service'

export default {
  name: 'file-chooser',
  props: {
    fileUrl: {
      type: String,
      required: true
    },
    basePath: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      fileChooserModal: null,
      files: [],
      url: this.fileUrl,
      uploadedFile: null,
      uploadError: null,
      currentStatus: null
    }
  },
  methods: {
    openFileChooserModal: function () {
      const loader = this.$loading.show()
      StorageService.listFiles('/' + this.basePath)
        .then(response => {
          this.files = response.data.files
          this.$refs.fileChooserModal.show()
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
    closeFileChooserModal: function () {
      this.$refs.fileChooserModal.hide()
    },
    choicePicture (u) {
      this.url = u
      this.$emit('update:fileUrl', u)
      this.closeFileChooserModal()
    }
  },
  created () {
    this.url = this.fileUrl
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>
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
</style>
