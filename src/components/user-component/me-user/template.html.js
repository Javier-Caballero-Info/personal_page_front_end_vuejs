module.exports = `
  <div class="user mt-4 mb-4">

    <b-form @submit="onSubmit" autocomplete="off">
    
        <h2 class="title text-left"> <small><font-awesome-icon :icon="['fas', 'rocket']" /> </small> My Account</h2>
        
        <hr/>
         
        <div v-if="user">   
    
          <b-card class="mb-2">
            <h1 class="text-center mb-0"> {{user.first_name}} {{user.last_name}} </h1>
          </b-card>
          <b-card class="mb-2">
    
            <div class="row">
    
              <div class="col-sm-5 col-md-6 text-center mt-4">
                <b-img-lazy :src="getGavatarUrl(user.email)" thumbnail rounded alt="Fluid image" class="mx-auto" style=""/>
              </div>
    
              <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0 mt-4">
    
                  <b-form-group id="User_First_Name_Group"
                          label="First Name:"
                          label-for="User_First_Name">
                    <b-form-input id="User_Fist_Name"
                                  name="first_name"
                                  type="text"
                                  autocomplete="off"
                                  v-validate.initial="'required'"
                                  data-vv-as="first name"
                                  v-model="user.first_name"
                                  required
                                  :class="{'input': true, 'is-invalid': errors.has('first_name'), 'is-valid': !errors.has('first_name')}"
                                  placeholder="First Name">
                    </b-form-input>
                    <p class="invalid-feedback">
                      <span v-show="errors.has('first_name')" class="help">{{ errors.first('first_name') }}</span>
                    </p>
    
                  </b-form-group>
    
                  <b-form-group id="User_Last_Name_Group"
                          label="Last Name:"
                          label-for="User_Last_Name">
                    <b-form-input id="User_Last_Name"
                                  name="last_name"
                                  type="text"
                                  autocomplete="off"
                                  v-validate.initial="'required'"
                                  data-vv-as="last name"
                                  v-model="user.last_name"
                                  required
                                  :class="{'input': true, 'is-invalid': errors.has('last_name'), 'is-valid': !errors.has('last_name')}"
                                  placeholder="Last Name">
                    </b-form-input>
                    <p class="invalid-feedback">
                      <span v-show="errors.has('last_name')" class="help">{{ errors.first('last_name') }}</span>
                    </p>
    
                  </b-form-group>
    
                  <b-form-group id="User_Username_Group"
                          label="Username:"
                          label-for="User_Username">
                    <b-form-input id="User_Username"
                                  name="username"
                                  type="text"
                                  autocomplete="off"
                                  v-validate.initial="'required'"
                                  v-model="user.username"
                                  required
                                  :class="{'input': true, 'is-invalid': errors.has('username'), 'is-valid': !errors.has('username')}"
                                  placeholder="Username">
                    </b-form-input>
                    <p class="invalid-feedback">
                      <span v-show="errors.has('username')" class="help">{{ errors.first('username') }}</span>
                    </p>
    
                  </b-form-group>
    
                  <b-form-group id="User_Email_Group"
                          label="Email:"
                          label-for="User_Email">
                    <b-form-input id="User_Email"
                                  name="email"
                                  type="text"
                                  autocomplete="off"
                                  v-validate.initial="'required|email'"
                                  v-model="user.email"
                                  required
                                  :class="{'input': true, 'is-invalid': errors.has('email'), 'is-valid': !errors.has('email')}"
                                  placeholder="Email">
                    </b-form-input>
                    <p class="invalid-feedback">
                      <span v-show="errors.has('email')" class="help">{{ errors.first('email') }}</span>
                    </p>
    
                  </b-form-group>
    
              </div>
    
            </div>    
    
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
