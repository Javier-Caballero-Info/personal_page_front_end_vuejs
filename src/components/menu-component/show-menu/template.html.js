module.exports = `
  <div class="social-netmenu mt-4 mb-4">
    
    <h2 class="title text-left"> <small><font-awesome-icon :icon="['fas', 'rocket']" /> </small> View Menu </h2>
    
    <hr/>

    <div v-if="menu">

      <b-card class="mb-2">
        <h1 class="text-center mb-0"> {{menu.text}} </h1>
      </b-card>
      <b-card class="mb-2">

        <div class="">
            
          <b-card class="text-left mb-2">
            <strong>Text:</strong> {{menu.text}}
          </b-card>

          <b-card class="text-left mb-2">
            <strong>Target:</strong> {{menu.target}}
          </b-card>

          <b-card class="text-left mb-2">
            <strong>Order:</strong> {{menu.order}}
          </b-card>

          <b-card class="text-left mb-2">
            <strong>Language:</strong> {{menu.lang}}
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
