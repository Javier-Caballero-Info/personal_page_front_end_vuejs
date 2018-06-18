module.exports = `
  <div class="social-network mt-4 mb-4">

    <b-form @submit="onSubmit">
    
    <h2 class="title text-left"> <small><font-awesome-icon :icon="['fas', 'rocket']" /> </small> Edit Social Network </h2>
    
    <hr/>
     
    <div v-if="socialNetwork">   

      <b-card class="mb-2">
        <h1 class="text-center mb-0"> {{socialNetwork.name}} </h1>
      </b-card>
      <b-card class="mb-2">

        <div class="row">

          <div class="col-sm-5 col-md-6 text-center mt-4">
            <b-img-lazy :src="socialNetwork.img" thumbnail rounded alt="Fluid image" class="mx-auto" style=""/>
          </div>

          <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0 mt-4">

              <b-form-group id="socialNetwork_Name_Group"
                      label="Name:"
                      label-for="socialNetwork_Name">
                <b-form-input id="socialNetwork_Name"
                              name="name"
                              type="text"
                              v-validate.initial="'required'"
                              v-model="socialNetwork.name"
                              required
                              :class="{'input': true, 'is-invalid': errors.has('name'), 'is-valid': !errors.has('name')}"
                              placeholder="Name">
                </b-form-input>
                <p class="invalid-feedback">
                  <span v-show="errors.has('name')" class="help">{{ errors.first('name') }}</span>
                </p>

              </b-form-group>

              <b-form-group id="socialNetwork_Link_Group"
                      label="Link:"
                      label-for="socialNetwork_Link">
                <b-form-input id="socialNetwork_Link"
                              name="link"
                              type="url"
                              v-validate.initial="'required|url'"
                              v-model="socialNetwork.link"
                              required
                              :class="{'input': true, 'is-invalid': errors.has('link'), 'is-valid': !errors.has('link')}"
                              placeholder="Link">
                </b-form-input>
                <p class="invalid-feedback">
                  <span v-show="errors.has('link')" class="help">{{ errors.first('link') }}</span>
                </p>
              </b-form-group>

              <file-chooser :fileUrl.sync="socialNetwork.img" basePath="social-networks"></file-chooser>

              <b-form-group id="socialNetwork_Order_Group"
                      label="Order:"
                      label-for="socialNetwork_Order">
                <b-form-input id="socialNetwork_Order"
                              name="order"
                              type="number"
                              min="0"
                              step="1"
                              v-model="socialNetwork.order"
                              v-validate.initial="'required|numeric|min_value:0'"
                              required
                              :class="{'input': true, 'is-invalid': errors.has('order'), 'is-valid': !errors.has('order')}"
                              placeholder="Order">
                </b-form-input>
                <p class="invalid-feedback">
                  <span v-show="errors.has('order')" class="help">{{ errors.first('order') }}</span>
                </p>
              </b-form-group>

              <b-form-group id="socialNetwork_Lang_Group"
                      label="Language:"
                      label-for="socialNetwork_Lang">
                <b-form-input id="socialNetwork_Lang"
                              name="lang"
                              type="text"
                              v-model="socialNetwork.lang"
                              disabled
                              placeholder="Language">
                </b-form-input>
              </b-form-group>

          </div>

        </div>    

      </b-card> 
    
    </div>

    <hr/>

    <b-button v-on:click="$router.go(-1)"variant="outline-secondary">
        <font-awesome-icon :icon="['fas', 'chevron-left']" /> Back
    </b-button>

    <b-button type="submit" variant="primary">
      <font-awesome-icon :icon="['fas', 'save']" /> Save
    </b-button>
    
  </b-form>

  </div>
`
