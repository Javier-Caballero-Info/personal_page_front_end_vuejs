module.exports = `
  <div class="user mt-4 mb-4">

    <b-form @submit="onSubmit" autocomplete="off">
    
        <h2 class="title text-left"> <small><font-awesome-icon :icon="['fas', 'rocket']" /> </small> Change Password</h2>
        
        <hr/>
         
        <div class="">   
        
          <b-card class="mb-2">
    
              <b-form-group id="User_Password_Group"
                          label="Password:"
                          label-for="User_Password">
                    <b-form-input id="User_Password"
                                  name="password"
                                  type="password"
                                  autocomplete="none"
                                  v-validate.initial="'required'"
                                  v-model="user.password"
                                  required
                                  :class="{'input': true, 'is-invalid': errors.has('password'), 'is-valid': !errors.has('password')}"
                                  placeholder="Password">
                    </b-form-input>
                    <p class="invalid-feedback">
                      <span v-show="errors.has('password')" class="help">{{ errors.first('password') }}</span>
                    </p>
    
                  </b-form-group>
    
                  <b-form-group id="User_Password_Confirmation_Group"
                          label="Password Confirmation:"
                          label-for="User_Password_Confirmation">
                    <b-form-input id="User_Password_Confirmation"
                                  name="password_confirmation"
                                  type="password"
                                  autocomplete="none"
                                  v-validate.initial="'required|confirmed:password'"
                                  v-model="user.password_confirmation"
                                  data-vv-as="password"
                                  required
                                  :class="{'input': true, 'is-invalid': errors.has('password_confirmation'), 'is-valid': !errors.has('password_confirmation')}"
                                  placeholder="Password Confirmation">
                    </b-form-input>
                    <p class="invalid-feedback">
                      <span v-show="errors.has('password_confirmation')" class="help">{{ errors.first('password_confirmation') }}</span>
                    </p>
    
                  </b-form-group>
    
          </b-card> 
        
        </div>
    
        <hr/>
    
        <b-button :to="{name: 'Home'}"variant="outline-secondary">
            <font-awesome-icon :icon="['fas', 'chevron-left']" /> Back
        </b-button>
    
        <b-button type="submit" variant="primary">
          <font-awesome-icon :icon="['fas', 'save']" /> Save
        </b-button>
        
      </b-form>

  </div>
`
