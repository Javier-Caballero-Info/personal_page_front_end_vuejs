module.exports = `
  <div class="home mt-4 mb-4">
    
    <h2 class="title text-left"> <small><font-awesome-icon :icon="['fas', 'rocket']" /> </small> View Home </h2>
    
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
            
            <b-card class="text-left mb-2">
              <strong>Title:</strong> {{home.title}}
            </b-card>

            <b-card class="text-left mb-2">
              <strong>Subtitle:</strong> {{home.subtitle}}
            </b-card>

            <b-card class="text-left mb-2">
              <strong>Picture:</strong> {{home.picture}}
            </b-card>

            <b-card class="text-left mb-2">
              <strong>Language:</strong> {{home.lang}}
            </b-card>

          </div>

        </div>    

      </b-card> 

    </div>

    <hr/>

    <b-button  :to="{ name: 'EditHome'}" variant="outline-primary">
        <font-awesome-icon :icon="['fas', 'pencil-alt']" /> Edit
    </b-button>

  </div>
`
