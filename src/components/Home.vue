<template>
  <div id="hello" class="mt-4 text-center">
      <b-jumbotron class="m-1">
        <font-awesome-icon :icon="['fas', 'dna']" class="big-icon" />
        <hr/>
        <h1 class="display-2">{{ title }}</h1>
        <h2 class="display-4 lead"><em> ~ {{ sub_title}} ~ </em></h2>
        <hr/>
        <div class="card">
          <div class="card-body">
            <p class="lead m-0">
              <em>{{ description }}</em>
            </p>
          </div>
        </div>
      </b-jumbotron>
  </div>
</template>

<script>

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'Home',
  components: {
    FontAwesomeIcon
  },
  data () {
    return {
      title: 'Personal Page Admin',
      sub_title: 'Edit your life',
      description: 'Show to the world all about you and your life.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#hello .big-icon{
  font-size: 100px;
  color: #17a2b8;
}
#hello .modal-content{
  border: none;
}
#hello .jumbotron{
  background: none;
}
#hello .jumbotron button{
  min-width: 300px;
}
#hello .jumbotron h1 {
  color: rgb(44,42,43);
}
#hello .jumbotron h2 {
  color: rgb(134,134,135);
}
#hello .card{
  color: rgb(44,42,43);
  background: rgb(191, 191, 193);
}

@media all and (max-width: 375px){
    #hello .jumbotron .display-2 {
        font-size: 3rem;
    }
    #hello .jumbotron .display-4 {
        font-size: 1.5rem;
    }
    #hello .jumbotron p {
        font-size: 1rem;
    }
}

</style>
