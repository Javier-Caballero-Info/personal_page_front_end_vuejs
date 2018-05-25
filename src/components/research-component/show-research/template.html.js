module.exports = `
  <div class="research mt-4 mb-4">
    
    <h2 class="title text-left"> <small><font-awesome-icon :icon="['fas', 'rocket']" /> </small> View Research </h2>
    
    <hr/>

    <div v-if="research">

      <b-card class="mb-2">
        <h1 class="text-center mb-0"> {{research.time}} </h1>
      </b-card>
      <b-card class="mb-2">

        <div class="">
            
            <b-card class="text-left mb-2">
              <strong>Time:</strong> {{research.time}}
            </b-card>

            <b-card class="text-left mb-2">
              <strong>Group:</strong> {{research.group}}
            </b-card>

            <b-card class="text-left mb-2">
              <strong>Project:</strong> {{research.project}}
            </b-card>

            <b-card class="text-left mb-2">
              <strong>Description:</strong> {{research.description}}
            </b-card>

            <b-card class="text-left mb-2">
              <strong>Order:</strong> {{research.order}}
            </b-card>

            <b-card class="text-left mb-2">
              <strong>Language:</strong> {{research.lang}}
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
