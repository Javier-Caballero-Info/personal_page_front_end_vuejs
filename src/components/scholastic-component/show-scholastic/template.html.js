module.exports = `
  <div class="scholastic mt-4 mb-4">
    
    <h2 class="title text-left"> <small><font-awesome-icon :icon="['fas', 'rocket']" /> </small> View Scholastic </h2>
    
    <hr/>

    <div v-if="scholastic">

      <b-card class="mb-2">
        <h1 class="text-center mb-0"> {{scholastic.time}} </h1>
      </b-card>
      <b-card class="mb-2">

        <div class="">
            
          <b-card class="text-left mb-2">
            <strong>Time:</strong> {{scholastic.time}}
          </b-card>

          <b-card class="text-left mb-2">
            <strong>Institute:</strong> {{scholastic.institute}}
          </b-card>

          <b-card class="text-left mb-2">
            <strong>Subject:</strong> {{scholastic.subject}}
          </b-card>

          <b-card class="text-left mb-2">
            <strong>Description:</strong> {{scholastic.description}}
          </b-card>

          <b-card class="text-left mb-2">
            <strong>Order:</strong> {{scholastic.order}}
          </b-card>

          <b-card class="text-left mb-2">
            <strong>Language:</strong> {{scholastic.lang}}
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
