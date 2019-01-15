module.exports = `
  <div class="home mt-4 mb-4">

    <b-form @submit="onSubmit">
    
    <h2 class="title text-left"> <small><font-awesome-icon :icon="['fas', 'rocket']" /> </small> Edit Home </h2>
    
    <hr/>
     
    <div v-if="home">   

      <b-card class="mb-2">
        <h1 class="text-center mb-0"> {{home.title}} </h1>
      </b-card>
      <b-card class="mb-2">

        <div class="row">

          <div class="col-sm-5 col-md-6 text-center mt-4">
            <b-img-lazy :src="home.picture" thumbnail rounded alt="Fluid image" class="mx-auto" style=""/>
          </div>

          <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0 mt-4">

              <b-form-group id="Home_Title_Group"
                      label="Title:"
                      label-for="Home_Title">
                <b-form-input id="Home_Title"
                              name="title"
                              type="text"
                              v-validate.initial="'required'"
                              v-model="home.title"
                              required
                              :class="{'input': true, 'is-invalid': errors.has('title'), 'is-valid': !errors.has('title')}"
                              placeholder="Title">
                </b-form-input>
                <p class="invalid-feedback">
                  <span v-show="errors.has('title')" class="help">{{ errors.first('title') }}</span>
                </p>

              </b-form-group>

              <b-form-group id="Home_Subtitle_Group"
                      label="Subtitle:"
                      label-for="Home_Subtitle">
                <b-form-input id="Home_Subtitle"
                              name="subtitle"
                              type="text"
                              v-validate.initial="'required'"
                              v-model="home.subtitle"
                              required
                              :class="{'input': true, 'is-invalid': errors.has('subtitle'), 'is-valid': !errors.has('subtitle')}"
                              placeholder="Subtitle">
                </b-form-input>
                <p class="invalid-feedback">
                  <span v-show="errors.has('subtitle')" class="help">{{ errors.first('subtitle') }}</span>
                </p>
              </b-form-group>
                      
              <file-chooser :fileUrl.sync="home.picture" basePath="Home"></file-chooser>

              <b-form-group id="Home_Lang_Group"
                      label="Language:"
                      label-for="Home_Lang">
                <b-form-input id="Home_Lang"
                              name="lang"
                              type="text"
                              v-model="home.lang"
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
