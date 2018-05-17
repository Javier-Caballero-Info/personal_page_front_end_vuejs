<template>
  <div class="hello mt-4 text-center">
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.big-icon{
  font-size: 100px;
}
.modal-content{
  border: none;
}
</style>
