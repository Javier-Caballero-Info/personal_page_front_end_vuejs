module.exports = `
  <div class="social-network mt-4 mb-4">

    <b-form @submit="onSubmit">
    
    <h2 class="title text-left"> <small><font-awesome-icon :icon="['fas', 'rocket']" /> </small> Edit Education </h2>
    
    <hr/>

    <div v-if="education">   
    
      <b-card class="mb-2">
        <h1 class="text-center mb-0" v-show="!errors.has('time')"> {{education.time}} </h1>
      </b-card>
     
      <b-card class="mb-2">
    
        <div class="">
        
          <b-form-group id="Education_Time_Group"
              label="Time:"
              label-for="Education_Time">
          
            <b-form-input id="Education_Time"
                name="time"
                type="text"
                v-validate.initial="{ required: true, regex: /.* - .*/ }"
                v-model="education.time"
                required
                :class="{'input': true, 'is-invalid': errors.has('time'), 'is-valid': !errors.has('time')}"
                placeholder="Time">
            </b-form-input>
            <p class="invalid-feedback">
                <span v-show="errors.has('time')" class="help">{{ errors.first('time') }}</span>
            </p>
        
          </b-form-group>
        
          <b-form-group id="Education_Institute_Group"
                label="Institute:"
                label-for="Education_Institute">
          <b-form-input id="Education_Institute"
                        name="institute"
                        type="text"
                        v-validate.initial="'required'"
                        v-model="education.institute"
                        required
                        :class="{'input': true, 'is-invalid': errors.has('institute'), 'is-valid': !errors.has('institute')}"
                        placeholder="Institute">
          </b-form-input>
          <p class="invalid-feedback">
            <span v-show="errors.has('institute')" class="help">{{ errors.first('institute') }}</span>
          </p>
        
          </b-form-group>
            
            <b-form-group id="Education_Career_Group"
                label="Career:"
                label-for="Education_Career">
            <b-form-input id="Education_Career"
                        name="career"
                        type="text"
                        v-model="education.career"
                        :class="{'input': true, 'is-invalid': errors.has('career'), 'is-valid': !errors.has('career')}"
                        placeholder="Career">
            </b-form-input>
            <p class="invalid-feedback">
            <span v-show="errors.has('career')" class="help">{{ errors.first('career') }}</span>
            </p>
            
          </b-form-group>
        
          <b-form-group id="Education_Detail_Group"
                label="Detail:"
                label-for="Education_Detail">
            <b-form-textarea id="Education_Detail"
                        name="detail"
                        v-validate.initial="'required'"
                        v-model="education.detail"
                        required
                        :class="{'input': true, 'is-invalid': errors.has('detail'), 'is-valid': !errors.has('detail')}"
                        placeholder="Detail">
            </b-form-textarea>
            <p class="invalid-feedback">
            <span v-show="errors.has('detail')" class="help">{{ errors.first('detail') }}</span>
            </p>
            
          </b-form-group>
        
          <b-form-group id="Education_Order_Group"
                label="Order:"
                label-for="Education_Order">
            <b-form-input id="Education_Order"
                        name="order"
                        type="number"
                        min="0"
                        step="1"
                        v-model="education.order"
                        v-validate.initial="'required|numeric|min_value:0'"
                        required
                        :class="{'input': true, 'is-invalid': errors.has('order'), 'is-valid': !errors.has('order')}"
                        placeholder="Order">
            </b-form-input>
            <p class="invalid-feedback">
            <span v-show="errors.has('order')" class="help">{{ errors.first('order') }}</span>
            </p>
          </b-form-group>
            
          <b-form-group id="Education_Lang_Group"
                label="Language:"
                label-for="Education_Lang">
            <b-form-input id="education_Lang"
                        name="lang"
                        type="text"
                        v-model="education.lang"
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
