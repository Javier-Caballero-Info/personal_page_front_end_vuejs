module.exports = `
  <div class="social-network mt-4 mb-4">
    
    <h2 class="title text-left"> <small><font-awesome-icon :icon="['fas', 'rocket']" /> </small> View Work </h2>
    
    <hr/>

    <div v-if="work">

      <b-card class="mb-2">
        <h1 class="text-center mb-0"> {{work.time}} </h1>
      </b-card>
      <b-card class="mb-2">

        <div class="">
            
          <b-card class="text-left mb-2">
            <strong>Time:</strong> {{work.time}}
          </b-card>

          <b-card class="text-left mb-2">
            <strong>Company:</strong> {{work.company}}
          </b-card>

          <b-card class="text-left mb-2">
            <strong>Position:</strong> {{work.position}}
          </b-card>

          <b-card class="text-left mb-2">
            <strong>Description:</strong> {{work.description}}
          </b-card>

          <b-card class="text-left mb-2">
            <strong>Order:</strong> {{work.order}}
          </b-card>

          <b-card class="text-left mb-2">
            <strong>Language:</strong> {{work.lang}}
          </b-card>

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
