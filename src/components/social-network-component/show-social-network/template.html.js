module.exports = `
  <div class="social-network mt-4 mb-4">
    
    <h2 class="title text-left"> <small><font-awesome-icon :icon="['fas', 'rocket']" /> </small> View Social Network </h2>
    
    <hr/>

    <div v-if="socialNetwork">

      <b-card class="mb-2">
        <h1 class="text-center mb-0"> {{socialNetwork.name}} </h1>
      </b-card>
      <b-card class="mb-2">

        <div class="row">

          <div class="col-sm-5 col-md-6 text-center mt-4">
            <b-img-lazy :src="socialNetwork.img" thumbnail rounded alt="Fluid image" class="mx-auto" style=""/>
          </div>

          <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0 mt-4">
            
            <b-card class="text-left mb-2">
              <strong>Name:</strong> {{socialNetwork.name}}
            </b-card>

            <b-card class="text-left mb-2">
              <strong>Link:</strong> <b-link :href="socialNetwork.link" target="_blank">{{socialNetwork.link}}</b-link>
            </b-card>

            <b-card class="text-left mb-2">
              <strong>Image:</strong> {{socialNetwork.img}}
            </b-card>

            <b-card class="text-left mb-2">
              <strong>Order:</strong> {{socialNetwork.order}}
            </b-card>

            <b-card class="text-left mb-2">
              <strong>Language:</strong> {{socialNetwork.lang}}
            </b-card>

          </div>

        </div>    

      </b-card> 

    </div>

    <hr/>

    <b-button v-on:click="$router.go(-1)"variant="outline-secondary">
        <font-awesome-icon :icon="['fas', 'chevron-left']" /> Back
    </b-button>

    <b-button :to="$route.params.id + '/edit'" variant="outline-primary">
        <font-awesome-icon :icon="['fas', 'pencil-alt']" /> Edit
    </b-button>

  </div>
`
