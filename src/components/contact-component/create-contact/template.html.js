module.exports = `
  <div class="social-network mt-4 mb-4">

  <b-form @submit="onSubmit">
    
    <h2 class="title text-left"> <small><font-awesome-icon :icon="['fas', 'rocket']" /> </small> Create Contact </h2>
    
    <hr/>

    <b-card class="mb-2">
      <h1 class="text-center mb-0" v-show="!errors.has('name')"> {{contact.name}} </h1>
    </b-card>
    <b-card class="mb-2">

      <div class="row">

        <div class="col-sm-5 col-md-6 text-center mt-4">
          <b-img-lazy :src="contact.img" thumbnail rounded alt="Fluid image" class="mx-auto" style=""  v-show="!errors.has('img')"/>
        </div>

        <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0 mt-4">

            <b-form-group id="contact_Name_Group"
                    label="Name:"
                    label-for="contact_Name">
              <b-form-input id="contact_Name"
                            name="name"
                            type="text"
                            v-validate.initial="'required'"
                            v-model="contact.name"
                            required
                            :class="{'input': true, 'is-invalid': errors.has('name'), 'is-valid': !errors.has('name')}"
                            placeholder="Name">
              </b-form-input>
              <p class="invalid-feedback">
                <span v-show="errors.has('name')" class="help">{{ errors.first('name') }}</span>
              </p>

            </b-form-group>

            <b-form-group id="contact_Link_Group"
                    label="Icon:"
                    label-for="contact_Icon">
              <b-form-input id="contact_Icon"
                            name="icon"
                            type="text"
                            v-validate.initial="'required'"
                            v-model="contact.icon"
                            required
                            :class="{'input': true, 'is-invalid': errors.has('icon'), 'is-valid': !errors.has('icon')}"
                            placeholder="Icon">
              </b-form-input>
              <p class="invalid-feedback">
                <span v-show="errors.has('icon')" class="help">{{ errors.first('icon') }}</span>
              </p>
            </b-form-group>

            <b-form-group id="contact_Info_Group"
                    label="Information:"
                    label-for="contact_Info">
              <b-form-input id="contact_Info"
                            name="info"
                            type="text"
                            v-validate.initial="'required'"
                            v-model="contact.info"
                            required
                            :class="{'input': true, 'is-invalid': errors.has('info'), 'is-valid': !errors.has('info')}"
                            placeholder="Information">
              </b-form-input>
              <p class="invalid-feedback">
                <span v-show="errors.has('info')" class="help">{{ errors.first('info') }}</span>
              </p>
            </b-form-group>

            <b-form-group id="contact_Img_Group"
                    label="Image:"
                    label-for="contact_Img">
              <b-form-input id="contact_Img"
                            name="img"
                            type="url"
                            v-model="contact.img"
                            v-validate.initial="'required|url'"
                            required
                            :class="{'input': true, 'is-invalid': errors.has('img'), 'is-valid': !errors.has('img')}"
                            placeholder="Image">
              </b-form-input>
              <p class="invalid-feedback">
                <span v-show="errors.has('img')" class="help">{{ errors.first('img') }}</span>
              </p>
            </b-form-group>

            <b-form-group id="contact_Order_Group"
                    label="Order:"
                    label-for="contact_Order">
              <b-form-input id="contact_Order"
                            name="order"
                            type="number"
                            min="0"
                            step="1"
                            v-model="contact.order"
                            v-validate.initial="'required|numeric|min_value:0'"
                            required
                            :class="{'input': true, 'is-invalid': errors.has('order'), 'is-valid': !errors.has('order')}"
                            placeholder="Order">
              </b-form-input>
              <p class="invalid-feedback">
                <span v-show="errors.has('order')" class="help">{{ errors.first('order') }}</span>
              </p>
            </b-form-group>

            <b-form-group id="contact_Lang_Group"
                    label="Language:"
                    label-for="contact_Order_Lang">
              <b-form-input id="contact_Order_Lang"
                            name="lang"
                            type="text"
                            v-model="contact.lang"
                            disabled
                            placeholder="Language">
              </b-form-input>
            </b-form-group>

        </div>

      </div>  

    </b-card> 

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
