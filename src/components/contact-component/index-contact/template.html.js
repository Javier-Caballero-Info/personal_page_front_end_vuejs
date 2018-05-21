module.exports = `
  <div class="contact mt-4">
    <h1 class="title text-left"> 
      <small><font-awesome-icon :icon="['fas', 'rocket']" /> </small> 
      Contacts List
    </h1>
    <hr/>
    <b-card class="mb-4">
        <b-button v-on:click="loadList()" variant="outline-secondary" v-b-tooltip.hover title="Reload">
          <font-awesome-icon :icon="['fas', 'sync']" /> Reload list
        </b-button>
        <b-button :to="{ name: 'CreateContact'}" class="float-right" variant="outline-success" v-b-tooltip.hover title="Create">
          <font-awesome-icon :icon="['fas', 'plus']" /> New contact
        </b-button>
    </b-card>

    <b-card>

      <div class="table-responsive" v-if="contact_items.length > 0">
        <b-table striped hover bordered responsive :items="contact_items" :fields="contact_fields" 
          align-v="center" v-on:update:lang="loadList()">
          <template slot="name" slot-scope="row">
            <div style="min-width: 140px;">
            <b-img-lazy :src="row.item.img" thumbnail rounded alt="Fluid image" style="height: 36px; width: 36px;"/>
            <span class="ml-2">{{ row.item.name }}</span>
          </div>
          </template>
          <template slot="actions" slot-scope="row">
            <div style="min-width:118px">
              <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
              <b-button :to="{ name: 'ShowContact', params: { id: row.item.id }}" size="sm" variant="outline-primary" v-b-tooltip.hover title="Show" append>
                <font-awesome-icon :icon="['fas', 'eye']" />
              </b-button>
              <b-button :to="{ name: 'EditContact', params: { id: row.item.id }}" size="sm" variant="outline-primary" v-b-tooltip.hover title="Edit" append>
                <font-awesome-icon :icon="['fas', 'pencil-alt']" />
              </b-button>
              <b-button size="sm" variant="outline-danger" 
                v-b-tooltip.hover title="Delete" append
                v-on:click="openModalDeleteContact(row.item)">
                <font-awesome-icon :icon="['fas', 'trash']" />
              </b-button>
            </div>
          </template>
        </b-table>
      </div>
      <div class="alert alert-warning text-center" role="alert" v-if="contact_items.length < 1">
        Contacts list is empty
      </div>
    </b-card>


    <modal name="delete-contact" height="auto" :maxWidth="400" adaptive>
      <div class="modal-content">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title">Confirm operation</h5>
          <button type="button" class="close" @click="closeModalDeleteContact()">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p class="mb-0">Are you sure that you want delete the contact "{{selected_contact.name}}"?</p>
        </div>
        <div class="modal-footer">
          <div class="row">
            <div class="col">
              <b-button variant="secondary" v-on:click="closeModalDeleteContact()" block>Close</b-button>
            </div>
            <div class="col">
              <b-button variant="danger" v-on:click="deleteContact()" block>Delete</b-button>
            </div>
          </div>
        </div>
      </div>
    </modal>

  </div>
`
