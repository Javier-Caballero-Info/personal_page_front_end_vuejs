<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div id="login" class="text-center mt-4">
      <b-form @submit="login">
        <div class="mb-4">
          <img class="mb-4" src="static/logo.png" alt="Admin Logo">
          <h2 class="mb-3 font-weight-normal">Please sign in</h2>
          <label for="username" class="sr-only">Username</label>
          <input type="text" id="username" name="username" v-model="input.username" placeholder="Username"
            class="form-control" required autofocus/>
          <label for="password" class="sr-only">Password</label>
          <input type="password" name="password" id="password" v-model="input.password"
            placeholder="Password" class="form-control" required/>
        </div>
        <button type="submit" :disabled="input.username == '' || input.password == ''"
          class="btn btn-lg btn-primary btn-block">
            Sign in
        </button>
      </b-form>
    </div>
</template>

<script>

import AuthService from '../../utils/auth-service'

export default {
  name: 'Login',
  data () {
    return {
      input: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login (evt) {
      evt.preventDefault()
      const loader = this.$loading.show()
      const self = this
      if (this.input.username !== '' && this.input.password !== '') {
        AuthService.login({
          username: this.input.username,
          password: this.input.password
        },
        function (response) {
          self.$emit('authenticated', true)
          self.$emit('user', response.user)
          self.$root.user = response.user
          localStorage.setItem('user', response.user)
          self.$root.access_token = response.access_token
          localStorage.setItem('access_token', response.access_token)
          self.$root.refresh_token = response.refresh_token
          localStorage.setItem('refresh_token', response.refresh_token)
          loader.hide()
          self.$router.replace({ name: 'Home' })
        },
        function () {
          self.$notify({
            group: 'app',
            title: 'Error',
            type: 'error',
            text: 'The username and / or password is incorrect'
          })
        })
      } else {
        this.$notify({
          group: 'app',
          title: 'Error',
          type: 'error',
          text: 'A username and password must be present'
        })
      }
      loader.hide()
    }
  },
  mounted () {
    if (localStorage.getItem('access_token') && localStorage.getItem('access_token').length > 0) {
      this.$router.replace({ name: 'Home' })
    }
  }
}
</script>

<style scoped>

html,
body,
#app,
.container {
  height: 100%;
}

#app,
.container {
  width: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

#login {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

#login h2{}

#login img{
  position: relative;
  max-width: 100%;
  height: 200px;
  margin: 0 auto;
}

#login .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

#login .form-control:focus {
  z-index: 2;
}

#login input[type="text"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

#login input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
