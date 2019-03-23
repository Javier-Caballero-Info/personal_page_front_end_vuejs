module.exports = `
  <div class="social-netgift mt-4 mb-4">

    <b-form @submit="onSubmit">
    
    <h2 class="title text-left"> <small><font-awesome-icon :icon="['fas', 'rocket']" /> </small> Edit Gift </h2>
    
    <hr/>

    <b-card class="mb-2">
      <h1 class="text-center mb-0" v-show="!errors.has('time')"> {{gift.description}} </h1>
    </b-card>
    <b-card class="mb-2">

      <div class="">

        <b-form-group id="Gift_Description_Group"
                label="Description:"
                label-for="Gift_Description">
          <b-form-input id="Gift_Description"
                        name="description"
                        type="text"
                        v-validate.initial="'required'"
                        v-model="gift.description"
                        required
                        :class="{'input': true, 'is-invalid': errors.has('description'), 'is-valid': !errors.has('description')}"
                        placeholder="Description">
          </b-form-input>
          <p class="invalid-feedback">
            <span v-show="errors.has('description')" class="help">{{ errors.first('description') }}</span>
          </p>

        </b-form-group>

        <b-form-group id="Gift_Priority_Group"
                label="Priority:"
                label-for="Gift_Priority">
          <b-form-input id="Gift_Priority"
                        name="priority"
                        type="number"
                        step="1"
                        min="0"
                        v-validate.initial="'required'"
                        v-model="gift.priority"
                        required
                        :class="{'input': true, 'is-invalid': errors.has('priority'), 'is-valid': !errors.has('priority')}"
                        placeholder="Priority">
          </b-form-input>
          <p class="invalid-feedback">
            <span v-show="errors.has('priority')" class="help">{{ errors.first('priority') }}</span>
          </p>

        </b-form-group>

        <b-form-group id="Gift_Price_Group"
                label="Price:"
                label-for="Gift_Price">
                  
           <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  $
                </span>
              </div>
              <b-form-input id="Gift_Price"
                            name="price"
                            type="number"
                            step="0.01"
                            min="0"
                            v-validate.initial="'required'"
                            v-model="gift.price"
                            required
                            :class="{'input': true, 'is-invalid': errors.has('price'), 'is-valid': !errors.has('price')}"
                            placeholder="Price">
              </b-form-input>
          </div>
          <p class="invalid-feedback">
            <span v-show="errors.has('price')" class="help">{{ errors.first('price') }}</span>
          </p>

        </b-form-group>

        <b-form-group label="Tags:">
              <input-tag :tags.sync="gift.tags"></input-tag>
            </b-form-group>

        <b-form-group id="gift_Lang_Group"
                label="Language:"
                label-for="gift_Lang">
          <b-form-input id="gift_Lang"
                        name="lang"
                        type="text"
                        v-model="gift.lang"
                        disabled
                        placeholder="Language">
          </b-form-input>
        </b-form-group>

      </div>  

    </b-card> 

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
