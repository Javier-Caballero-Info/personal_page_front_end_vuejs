module.exports = `
  <div class="research mt-4 mb-4">

    <b-form @submit="onSubmit">
        
    <h2 class="title text-left"> <small><font-awesome-icon :icon="['fas', 'rocket']" /> </small> Create Research </h2>
    
    <hr/>

    <div v-if="research">   
    
    <b-card class="mb-2">
      <h1 class="text-center mb-0" v-show="!errors.has('time')"> {{research.time}} </h1>
    </b-card>
 
    <b-card class="mb-2">

      <div class="">

        <b-form-group id="Research_Time_Group"
                label="Time:"
                label-for="Research_Time">
          <b-form-input id="Research_Time"
                        name="time"
                        type="text"
                        v-validate.initial="{ required: true, regex: /.* - .*/ }"
                        v-model="research.time"
                        required
                        :class="{'input': true, 'is-invalid': errors.has('time'), 'is-valid': !errors.has('time')}"
                        placeholder="Time">
          </b-form-input>
          <p class="invalid-feedback">
            <span v-show="errors.has('time')" class="help">{{ errors.first('time') }}</span>
          </p>

        </b-form-group>

        <b-form-group id="Research_Group_Group"
                label="Group:"
                label-for="Research_Group">
          <b-form-input id="Research_Group"
                        name="group"
                        type="text"
                        v-validate.initial="'required'"
                        v-model="research.group"
                        required
                        :class="{'input': true, 'is-invalid': errors.has('group'), 'is-valid': !errors.has('group')}"
                        placeholder="Group">
          </b-form-input>
          <p class="invalid-feedback">
            <span v-show="errors.has('group')" class="help">{{ errors.first('group') }}</span>
          </p>
        
        </b-form-group>
        
        <b-form-group id="Research_Project_Group"
            label="Project:"
            label-for="Research_Project">
          <b-form-input id="Research_Project"
                    name="project"
                    type="text"
                    v-model="research.project"
                    :class="{'input': true, 'is-invalid': errors.has('project'), 'is-valid': !errors.has('project')}"
                    placeholder="Project">
            </b-form-input>
            <p class="invalid-feedback">
            <span v-show="errors.has('project')" class="help">{{ errors.first('project') }}</span>
            </p>
            
          </b-form-group>
            
          <b-form-group id="Research_Description_Group"
            label="Description:"
            label-for="Research_Description">
            <b-form-textarea id="Research_Description"
                    name="description"
                    v-validate.initial="'required'"
                    v-model="research.description"
                    required
                    :class="{'input': true, 'is-invalid': errors.has('description'), 'is-valid': !errors.has('description')}"
                    placeholder="Description">
            </b-form-textarea>
            <p class="invalid-feedback">
            <span v-show="errors.has('description')" class="help">{{ errors.first('description') }}</span>
            </p>
        
          </b-form-group>

        <b-form-group id="Research_Order_Group"
                label="Order:"
                label-for="Research_Order">
          <b-form-input id="Research_Order"
                        name="order"
                        type="number"
                        min="0"
                        step="1"
                        v-model="research.order"
                        v-validate.initial="'required|numeric|min_value:0'"
                        required
                        :class="{'input': true, 'is-invalid': errors.has('order'), 'is-valid': !errors.has('order')}"
                        placeholder="Order">
          </b-form-input>
          <p class="invalid-feedback">
            <span v-show="errors.has('order')" class="help">{{ errors.first('order') }}</span>
          </p>
        </b-form-group>

        <b-form-group id="Research_Lang_Group"
                label="Language:"
                label-for="Research_Lang">
          <b-form-input id="research_Lang"
                        name="lang"
                        type="text"
                        v-model="research.lang"
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
