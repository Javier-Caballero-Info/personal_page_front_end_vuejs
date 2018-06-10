module.exports = `
  <div class="portfolio mt-4 mb-4">

  <b-form @submit="onSubmit" v-if="portfolio">
    
    <h2 class="title text-left"> <small><font-awesome-icon :icon="['fas', 'rocket']" /> </small> Edit Portfolio </h2>
    
    <hr/>

    <b-card class="mb-2">
      <h1 class="text-center mb-0" v-show="!errors.has('time')"> {{portfolio.name}} </h1>
    </b-card>
    
    <h2>Details</h2>
    
    <b-card class="mb-2">

      <div class="">

        <b-form-group id="Portfolio_Name_Group"
                label="Name:"
                label-for="Portfolio_Name">
          <b-form-input id="Portfolio_Name"
                        name="name"
                        type="text"
                        v-validate.initial="'required'"
                        v-model="portfolio.name"
                        required
                        :class="{'input': true, 'is-invalid': errors.has('name'), 'is-valid': !errors.has('name')}"
                        placeholder="Name">
          </b-form-input>
          <p class="invalid-feedback">
            <span v-show="errors.has('name')" class="help">{{ errors.first('name') }}</span>
          </p>

        </b-form-group>

        <b-form-group id="Portfolio_Description_Group"
                label="Description:"
                label-for="Portfolio_Description">
          <b-form-textarea id="Portfolio_Description"
                        name="description"
                        v-model="portfolio.description"
                        :class="{'input': true, 'is-invalid': errors.has('description'), 'is-valid': !errors.has('description')}"
                        placeholder="Description">
          </b-form-textarea>
          <p class="invalid-feedback">
            <span v-show="errors.has('description')" class="help">{{ errors.first('description') }}</span>
          </p>

        </b-form-group>

        <b-form-group id="portfolio_Order_Group"
                label="Order:"
                label-for="portfolio_Order">
          <b-form-input id="portfolio_Order"
                        name="order"
                        type="number"
                        min="0"
                        step="1"
                        v-model="portfolio.order"
                        v-validate.initial="'required|numeric|min_value:0'"
                        required
                        :class="{'input': true, 'is-invalid': errors.has('order'), 'is-valid': !errors.has('order')}"
                        placeholder="Order">
          </b-form-input>
          <p class="invalid-feedback">
            <span v-show="errors.has('order')" class="help">{{ errors.first('order') }}</span>
          </p>
        </b-form-group>

        <b-form-group id="portfolio_Lang_Group"
                label="Language:"
                label-for="portfolio_Lang">
          <b-form-input id="portfolio_Lang"
                        name="lang"
                        type="text"
                        v-model="portfolio.lang"
                        disabled
                        placeholder="Language">
          </b-form-input>
        </b-form-group>

      </div>  

    </b-card> 
    
    <h2>Resources</h2>
            
    <b-card class="mb-2" v-for="(resource, index) of portfolio.resources" :key="index">

        <b-button size="sm" variant="outline-danger" style="position: absolute; top: 0; right: 0;"
            v-b-tooltip.hover title="Remove Resource" append
            v-on:click="removeResource(index)">
          <font-awesome-icon :icon="['fas', 'trash']" />
        </b-button>

        <div class="pt-2">
        
            <b-form-group label="Name:">
                <b-form-input :name="'resource_' + index + '_name'"
                    type="text"
                    v-validate.initial="'required'"
                    v-model="resource.name"
                    required
                    :class="{'input': true, 'is-invalid': errors.has('resource_' + index + '_name'), 'is-valid': !errors.has('resource_' + index + '_name')}"
                    placeholder="Name"
                    data-vv-as="name">
                </b-form-input>
                <p class="invalid-feedback">
                    <span v-show="errors.has('resource_' + index + '_name')" class="help">{{ errors.first('resource_' + index + '_name') }}</span>
                </p>
            
            </b-form-group>
            
            <b-form-group label="Description:">
              <b-form-textarea :name="'resource_' + index + '_description'"
                    v-validate.initial="'required'"
                    v-model="resource.description"
                    required
                    :class="{'input': true, 'is-invalid': errors.has('resource_' + index + '_description'), 'is-valid': !errors.has('resource_' + index + '_description')}"
                    placeholder="Description"
                    data-vv-as="description">
              </b-form-textarea>
              <p class="invalid-feedback">
                <span v-show="errors.has('resource_' + index + '_description')" class="help">{{ errors.first('resource_' + index + '_description') }}</span>
              </p>

            </b-form-group>
            
            <b-form-group label="Technologies:">
              <input-tag :tags.sync="resource.technologies"></input-tag>
            </b-form-group>
            
            <b-form-group label="Links:">
            
            
              <div class="alert alert-secondary text-center" role="alert" v-if="resource.links.length == 0">
                There is no links
              </div>
                
              <div class="card mb-3" v-for="(link, index_link) of resource.links" :key="index">
                <div class="card-body pt-3">
                  <b-button size="sm" variant="outline-danger" style="position: absolute; top: 0; right: 0;"
                      v-b-tooltip.hover title="Remove link" append
                      v-on:click="removeLink(resource, index_link)">
                    <font-awesome-icon :icon="['fas', 'trash']" />
                  </b-button>
                  
                  <b-form-group label="Name:">
                      <b-form-input :name="'resource_link' + index_link + '_name'"
                          type="text"
                          v-validate.initial="'required'"
                          v-model="link.name"
                          required
                          :class="{'input': true, 'is-invalid': errors.has('resource_link' + index_link + '_name'), 'is-valid': !errors.has('resource_link' + index_link + '_name')}"
                          placeholder="Link name"
                          data-vv-as="name">
                      </b-form-input>
                      <p class="invalid-feedback m-0">
                        <span v-show="errors.has('resource_link' + index_link + '_name')" class="help">{{ errors.first('resource_link' + index_link + '_name') }}</span>
                      </p>
                  </b-form-group>
                  
                  <b-form-group label="Link:">
                      <b-form-input
                          :name="'resource_link' + index_link + '_link'"
                          type="url"
                          v-validate.initial="'required|url'"
                          v-model="link.link"
                          required
                          :class="{'input': true, 'is-invalid': errors.has('resource_link' + index_link + '_link'), 'is-valid': !errors.has('resource_link' + index_link + '_link')}"
                          placeholder="Link"
                          data-vv-as="name">
                      </b-form-input>
                      <p class="invalid-feedback m-0">
                        <span v-show="errors.has('resource_link' + index_link + '_link')" class="help">{{ errors.first('resource_link' + index_link + '_link') }}</span>
                      </p>
                  </b-form-group>
                  
                  <b-form-group label="Icon:">
                  
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <font-awesome-icon :icon="link.icon.split(' ')" />
                          </span>
                        </div>
                        <b-form-input :name="'resource_link' + index + '_icon'"
                            type="text"
                            v-validate.initial="'required'"
                            v-model="link.icon"
                            required
                            :class="{'input': true, 'is-invalid': errors.has('resource_link' + index_link + '_icon'), 'is-valid': !errors.has('resource_link' + index_link + '_icon')}"
                            placeholder="Link icon"
                            data-vv-as="icon">
                        </b-form-input>
                        <p class="invalid-feedback m-0">
                          <span v-show="errors.has('resource_link' + index_link + '_icon')" class="help">{{ errors.first('resource_link' + index_link + '_icon') }}</span>
                        </p>
                      </div>
                      
                  </b-form-group>
                </div>
              </div>
            </b-form-group>
            
            <b-button variant="outline-primary" class="btn-block" v-on:click="addLink(resource)">
              <font-awesome-icon :icon="['fas', 'plus']" /> Add Link
            </b-button>
        
        </div>
    
    </b-card>
    
    <b-button variant="outline-primary" class="btn-block" v-on:click="addResource()">
      <font-awesome-icon :icon="['fas', 'plus']" /> Add Resource
    </b-button>

    <hr/>

    <b-button v-on:click="$router.go(-1)"variant="outline-secondary">
        <font-awesome-icon :icon="['fas', 'chevron-left']" /> Back
    </b-button>

    <b-button type="submit" variant="primary" :disabled="errors.items.length > 0">
      <font-awesome-icon :icon="['fas', 'save']" /> Save
    </b-button>

  </b-form>

  </div>
`
