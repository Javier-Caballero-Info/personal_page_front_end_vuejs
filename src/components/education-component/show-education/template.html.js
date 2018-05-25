module.exports = `
  <div class="education mt-4 mb-4">
    
    <h2 class="title text-left"> <small><font-awesome-icon :icon="['fas', 'rocket']" /> </small> View Education </h2>
    
    <hr/>

    <div v-if="education">

      <b-card class="mb-2">
        <h1 class="text-center mb-0"> {{education.time}} </h1>
      </b-card>
      <b-card class="mb-2">

        <div class="">
            
            <b-card class="text-left mb-2">
              <strong>Time:</strong> {{education.time}}
            </b-card>

            <b-card class="text-left mb-2">
              <strong>Career:</strong> {{education.career}}
            </b-card>

            <b-card class="text-left mb-2">
              <strong>Institute:</strong> {{education.institute}}
            </b-card>

            <b-card class="text-left mb-2">
              <strong>Detail:</strong> {{education.detail}}
            </b-card>

            <b-card class="text-left mb-2">
              <strong>Order:</strong> {{education.order}}
            </b-card>

            <b-card class="text-left mb-2">
              <strong>Language:</strong> {{education.lang}}
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
