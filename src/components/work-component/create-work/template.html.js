module.exports = `
  <div class="social-network mt-4 mb-4">

  <b-form @submit="onSubmit">
    
    <h2 class="title text-left"> <small><font-awesome-icon :icon="['fas', 'rocket']" /> </small> Create Work </h2>
    
    <hr/>

    <b-card class="mb-2">
      <h1 class="text-center mb-0" v-show="!errors.has('time')"> {{work.time}} </h1>
    </b-card>
    <b-card class="mb-2">

      <div class="">

        <b-form-group id="Work_Time_Group"
                label="Time:"
                label-for="Time_Company">
          <b-form-input id="Time_Company"
                        name="time"
                        type="text"
                        v-validate.initial="{ required: true, regex: /.* - .*/ }"
                        v-model="work.time"
                        required
                        :class="{'input': true, 'is-invalid': errors.has('time'), 'is-valid': !errors.has('time')}"
                        placeholder="Time">
          </b-form-input>
          <p class="invalid-feedback">
            <span v-show="errors.has('time')" class="help">{{ errors.first('time') }}</span>
          </p>

        </b-form-group>

        <b-form-group id="Work_Company_Group"
                label="Company:"
                label-for="Work_Company">
          <b-form-input id="Work_Company"
                        name="company"
                        type="text"
                        v-validate.initial="'required'"
                        v-model="work.company"
                        required
                        :class="{'input': true, 'is-invalid': errors.has('company'), 'is-valid': !errors.has('company')}"
                        placeholder="Company">
          </b-form-input>
          <p class="invalid-feedback">
            <span v-show="errors.has('company')" class="help">{{ errors.first('company') }}</span>
          </p>

        </b-form-group>

        <b-form-group id="Work_Position_Group"
                label="Position:"
                label-for="Work_Position">
          <b-form-input id="Work_Position"
                        name="position"
                        type="text"
                        v-validate.initial="'required'"
                        v-model="work.position"
                        required
                        :class="{'input': true, 'is-invalid': errors.has('position'), 'is-valid': !errors.has('position')}"
                        placeholder="Position">
          </b-form-input>
          <p class="invalid-feedback">
            <span v-show="errors.has('position')" class="help">{{ errors.first('position') }}</span>
          </p>

        </b-form-group>

        <b-form-group id="Work_Description_Group"
                label="Description:"
                label-for="Work_Description">
          <b-form-textarea id="Work_Description"
                        name="description"
                        v-validate.initial="'required'"
                        v-model="work.description"
                        required
                        :class="{'input': true, 'is-invalid': errors.has('description'), 'is-valid': !errors.has('description')}"
                        placeholder="Description">
          </b-form-input>
          <p class="invalid-feedback">
            <span v-show="errors.has('description')" class="help">{{ errors.first('description') }}</span>
          </p>

        </b-form-group>

        <b-form-group id="work_Order_Group"
                label="Order:"
                label-for="work_Order">
          <b-form-input id="work_Order"
                        name="order"
                        type="number"
                        min="0"
                        step="1"
                        v-model="work.order"
                        v-validate.initial="'required|numeric|min_value:0'"
                        required
                        :class="{'input': true, 'is-invalid': errors.has('order'), 'is-valid': !errors.has('order')}"
                        placeholder="Order">
          </b-form-input>
          <p class="invalid-feedback">
            <span v-show="errors.has('order')" class="help">{{ errors.first('order') }}</span>
          </p>
        </b-form-group>

        <b-form-group id="work_Lang_Group"
                label="Language:"
                label-for="work_Order_Lang">
          <b-form-input id="work_Order_Lang"
                        name="lang"
                        type="text"
                        v-model="work.lang"
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

    <b-button type="submit" variant="primary" :disabled="errors.items.length > 0">
      <font-awesome-icon :icon="['fas', 'save']" /> Save
    </b-button>

  </b-form>

  </div>
`
