module.exports = `
  <div class="menu mt-4">
    <h1 class="title text-left"> 
      <small><font-awesome-icon :icon="['fas', 'rocket']" /> </small> 
      Menus List
    </h1>
    <hr/>
    <b-card class="mb-4">
        <b-button v-on:click="loadList()" variant="outline-secondary" v-b-tooltip.hover title="Reload">
          <font-awesome-icon :icon="['fas', 'sync']" /> Reload list
        </b-button>
        <b-button :to="{ name: 'CreateMenu'}" class="float-right" variant="outline-success" v-b-tooltip.hover title="Create">
          <font-awesome-icon :icon="['fas', 'plus']" /> New menu
        </b-button>
    </b-card>

    <b-card>

      <div class="table-responsive" v-if="menu_items.length > 0">
        <b-table striped hover bordered responsive :items="menu_items" :fields="menu_fields" 
          align-v="center" v-on:update:lang="loadList()">
          <template slot="actions" slot-scope="row">
            <div style="min-width:118px">
              <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
              <b-button :to="{ name: 'ShowMenu', params: { id: row.item.id }}" size="sm" variant="outline-primary" v-b-tooltip.hover title="Show" append>
                <font-awesome-icon :icon="['fas', 'eye']" />
              </b-button>
              <b-button :to="{ name: 'EditMenu', params: { id: row.item.id }}" size="sm" variant="outline-primary" v-b-tooltip.hover title="Edit" append>
                <font-awesome-icon :icon="['fas', 'pencil-alt']" />
              </b-button>
              <b-button size="sm" variant="outline-danger" 
                v-b-tooltip.hover title="Delete" append
                v-on:click="openModalDeleteMenu(row.item)">
                <font-awesome-icon :icon="['fas', 'trash']" />
              </b-button>
            </div>
          </template>
        </b-table>
      </div>
      <div class="alert alert-warning text-center" role="alert" v-if="menu_items.length < 1">
        Menus list is empty
      </div>
    </b-card>


    <modal name="delete-menu" height="auto" :maxWidth="400" adaptive>
      <div class="modal-content">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title">Confirm operation</h5>
          <button type="button" class="close" @click="closeModalDeleteMenu()">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p class="mb-0">Are you sure that you want delete the menu for "{{selected_menu.text}}"?</p>
        </div>
        <div class="modal-footer">
          <div class="row">
            <div class="col">
              <b-button variant="secondary" v-on:click="closeModalDeleteMenu()" block>Close</b-button>
            </div>
            <div class="col">
              <b-button variant="danger" v-on:click="deleteMenu()" block>Delete</b-button>
            </div>
          </div>
        </div>
      </div>
    </modal>

  </div>
`
