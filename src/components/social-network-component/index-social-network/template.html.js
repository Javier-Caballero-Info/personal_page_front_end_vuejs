module.exports = `
  <div class="social-network mt-4">
    <h1 class="title text-left"> <small><font-awesome-icon :icon="['fas', 'rocket']" /> </small> List Social Networks </h1>
    <hr/>
    <b-card class="mb-4">
        <b-button :to="{ name: 'CreateSocialNetwork'}" class="mr-1 float-right" variant="outline-success" v-b-tooltip.hover title="Create">
          <font-awesome-icon :icon="['fas', 'plus']" /> New Social Network
        </b-button>
    </b-card>

    <b-card>
      <b-table striped hover bordered responsive :items="social_network_items" :fields="social_network_fields" show-empty stacked="md"  align-v="center">
        <template slot="name" slot-scope="row">
          <b-img-lazy :src="row.item.img" thumbnail rounded alt="Fluid image" style="height: 36px; width: 36px;"/>
          <span class="ml-2">{{ row.item.name }}</span>
        </template>
        <template slot="actions" slot-scope="row">
          <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
          <b-button :to="{ name: 'ShowSocialNetwork', params: { id: row.item.id }}" size="sm" class="mr-1" variant="outline-primary" v-b-tooltip.hover title="Show" append>
            <font-awesome-icon :icon="['fas', 'eye']" />
          </b-button>
          <b-button :to="{ name: 'EditSocialNetwork', params: { id: row.item.id }}" size="sm" class="mr-1" variant="outline-primary" v-b-tooltip.hover title="Edit" append>
            <font-awesome-icon :icon="['fas', 'pencil-alt']" />
          </b-button>
          <b-button size="sm" class="mr-1" variant="outline-danger" 
            v-b-tooltip.hover title="Delete" append
            v-on:click="openModalDeleteSocialNetwork()">
            <font-awesome-icon :icon="['fas', 'trash']" />
          </b-button>
        </template>
      </b-table>
    </b-card>


    <modal name="delete-social-network" height="auto" :maxWidth="400" adaptive>
      <div class="modal-content">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title">Confirm operation</h5>
          <button type="button" class="close" @click="closeModalDeleteSocialNetwork()">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p class="mb-0">Are you sure that you want delete the social media "{{selectedName}}"?</p>
        </div>
        <div class="modal-footer">
          <div class="row">
            <div class="col">
              <b-button variant="secondary" v-on:click="closeModalDeleteSocialNetwork()" block>Close</b-button>
            </div>
            <div class="col">
              <b-button variant="danger" v-on:click="deleteSocialNetwork()" block>Delete</b-button>
            </div>
          </div>
        </div>
      </div>
    </modal>

  </div>
`
