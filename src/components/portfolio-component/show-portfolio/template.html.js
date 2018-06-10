module.exports = `
  <div class="social-netportfolio mt-4 mb-4">
    
    <h2 class="title text-left"> <small><font-awesome-icon :icon="['fas', 'rocket']" /> </small> View Portfolio </h2>
    
    <hr/>

    <div v-if="portfolio">

      <b-card class="mb-2">
        <h1 class="text-center mb-0"> {{portfolio.name}} </h1>
      </b-card>
      <b-card class="mb-2">

        <div class="">
            
          <b-card class="text-left mb-2">
            <strong>Name:</strong> {{portfolio.name}}
          </b-card>

          <b-card class="text-left mb-2">
            <strong>Description:</strong> <br/>
            {{portfolio.description}}
          </b-card>

          <b-card class="text-left mb-2">
            <strong>Order:</strong> {{portfolio.order}}
          </b-card>

          <b-card class="text-left mb-2">
            <strong>Language:</strong> {{portfolio.lang}}
          </b-card>

        </div>    

      </b-card> 
      
      <b-card class="mb-2">
        <h2 class="text-center mb-0"> Resources </h2>
      </b-card>
      <b-card class="mb-2" v-for="(resource, index) of portfolio.resources" :key="index" :title="resource.name">
        
        <b-card class="text-left mb-2">
            <strong>Description:</strong> <br/>
            {{resource.description}}
        </b-card>
        
        <b-card class="text-left mb-2">
            <strong>Technologies:</strong> 
            <ul class="m-0">
                <li v-for="(t, index) of resource.technologies" :key="index" >
                    {{t}}
                </li>
            </ul>
        </b-card>
        
        <b-card class="text-left mb-2">
            <strong>Links:</strong> 
            <ul class="m-0">
                <li v-for="(link, index) of resource.links" :key="index" >
                    <a :href="link.link" target="_blank">
                        <font-awesome-icon :icon="link.icon.split(' ')" /> {{link.name}}
                    </a>
                </li>
            </ul>
        </b-card>
        
        
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
