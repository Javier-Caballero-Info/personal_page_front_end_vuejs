module.exports = `
  <div class="scholastic mt-4 mb-4">

    <b-form @submit="onSubmit">
    
    <h2 class="title text-left"> <small><font-awesome-icon :icon="['fas', 'rocket']" /> </small> Edit Scholastic </h2>
    
    <hr/>
     
    <div v-if="scholastic">   

      <b-card class="mb-2">
        <h1 class="text-center mb-0"> {{scholastic.time}} </h1>
      </b-card>

      <b-card class="mb-2">

         <div class="">

        <b-form-group id="Scholastic_Time_Group"
                label="Time:"
                label-for="Time_Company">
          <b-form-input id="Time_Company"
                        name="time"
                        type="text"
                        v-validate.initial="{ required: true, regex: /.* - .*/ }"
                        v-model="scholastic.time"
                        required
                        :class="{'input': true, 'is-invalid': errors.has('time'), 'is-valid': !errors.has('time')}"
                        placeholder="Time">
          </b-form-input>
          <p class="invalid-feedback">
            <span v-show="errors.has('time')" class="help">{{ errors.first('time') }}</span>
          </p>

        </b-form-group>

        <b-form-group id="Scholastic_Institute_Group"
                label="Institute:"
                label-for="Scholastic_Institute">
          <b-form-input id="Scholastic_Institute"
                        name="institute"
                        type="text"
                        v-validate.initial="'required'"
                        v-model="scholastic.institute"
                        required
                        :class="{'input': true, 'is-invalid': errors.has('institute'), 'is-valid': !errors.has('institute')}"
                        placeholder="Institute">
          </b-form-input>
          <p class="invalid-feedback">
            <span v-show="errors.has('institute')" class="help">{{ errors.first('institute') }}</span>
          </p>

        </b-form-group>

        <b-form-group id="Scholastic_Subject_Group"
                label="Subject:"
                label-for="Scholastic_Subject">
          <b-form-input id="Scholastic_Subject"
                        name="subject"
                        type="text"
                        v-validate.initial="'required'"
                        v-model="scholastic.subject"
                        required
                        :class="{'input': true, 'is-invalid': errors.has('subject'), 'is-valid': !errors.has('subject')}"
                        placeholder="Subject">
          </b-form-input>
          <p class="invalid-feedback">
            <span v-show="errors.has('subject')" class="help">{{ errors.first('subject') }}</span>
          </p>

        </b-form-group>

        <b-form-group id="Scholastic_Description_Group"
                label="Description:"
                label-for="Scholastic_Description">
          <b-form-textarea id="Scholastic_Description"
                        name="description"
                        v-validate.initial="'required'"
                        v-model="scholastic.description"
                        required
                        :class="{'input': true, 'is-invalid': errors.has('description'), 'is-valid': !errors.has('description')}"
                        placeholder="Description">
          </b-form-input>
          <p class="invalid-feedback">
            <span v-show="errors.has('description')" class="help">{{ errors.first('description') }}</span>
          </p>

        </b-form-group>

        <b-form-group id="scholastic_Order_Group"
                label="Order:"
                label-for="scholastic_Order">
          <b-form-input id="scholastic_Order"
                        name="order"
                        type="number"
                        min="0"
                        step="1"
                        v-model="scholastic.order"
                        v-validate.initial="'required|numeric|min_value:0'"
                        required
                        :class="{'input': true, 'is-invalid': errors.has('order'), 'is-valid': !errors.has('order')}"
                        placeholder="Order">
          </b-form-input>
          <p class="invalid-feedback">
            <span v-show="errors.has('order')" class="help">{{ errors.first('order') }}</span>
          </p>
        </b-form-group>

        <b-form-group id="scholastic_Lang_Group"
                label="Language:"
                label-for="scholastic_Lang">
          <b-form-input id="scholastic_Lang"
                        name="lang"
                        type="text"
                        v-model="scholastic.lang"
                        disabled
                        placeholder="Language">
          </b-form-input>
        </b-form-group>

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
