module.exports = `
  <div class="social-netgift mt-4 mb-4">
    
    <h2 class="title text-left"> <small><font-awesome-icon :icon="['fas', 'rocket']" /> </small> View Gift </h2>
    
    <hr/>

    <div v-if="gift">

      <b-card class="mb-2">
        <h1 class="text-center mb-0"> {{gift.description}} </h1>
      </b-card>
      <b-card class="mb-2">

        <div class="">
            
          <b-card class="text-left mb-2">
            <strong>Priority:</strong> {{gift.priority}}
          </b-card>

          <b-card class="text-left mb-2">
            <strong>Description:</strong> {{gift.description}}
          </b-card>

          <b-card class="text-left mb-2">
            <strong>Price:</strong> $ {{gift.price}}
          </b-card>
          
          <b-card class="text-left mb-2">
              <strong>Tags:</strong> 
              <ul class="m-0">
                  <li v-for="(tag, index) of gift.tags" :key="index" >
                      {{tag}}
                  </li>
              </ul>
          </b-card>

          <b-card class="text-left mb-2">
            <strong>Language:</strong> {{gift.lang}}
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
