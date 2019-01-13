<template>
  <div id="app">

    <b-navbar toggleable="md" type="dark" variant="info" v-if="isAuthenticated()">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#/">
        <font-awesome-icon :icon="['fas', 'dna']" class="" /> {{ title }}
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item-dropdown text="Biography">
            <b-dropdown-item :to="{ name: 'IndexWork'}">Work</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'IndexEducation'}">Education</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'IndexResearch'}">Research</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'IndexScholastic'}">Scholastic</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item :to="{ name: 'IndexSocialNetwork'}"> Social Networks </b-nav-item>
          <b-nav-item :to="{ name: 'IndexContact'}"> Contacts </b-nav-item>
          <b-nav-item :to="{ name: 'IndexPortfolio'}"> Portfolios </b-nav-item>
          <b-nav-item :to="{ name: 'Files'}"> Files </b-nav-item>
          <b-nav-item :to="{ name: 'IndexMenu'}"> Menu </b-nav-item>
          <b-nav-item :to="{ name: 'IndexUser'}"> Users </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown right no-caret>
            <template slot="text">
              {{$root.lang_emoji}}
            </template>
            <b-dropdown-item href="#" v-for="lang of $root.available_langs" v-bind:key="lang.value"
              v-on:click="changeLang(lang)" :disabled="$root.lang == lang.value">
              {{lang.emoji}}
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <font-awesome-icon :icon="['far', 'user-circle']" size="lg" />
              {{getUser()}}
            </template>
            <b-dropdown-item :to="{ name: 'MeUser'}">My Account</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'PasswordUser'}">Change password</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item v-if="isAuthenticated" to="/login" v-on:click.native="logout()" replace>Sign out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

    <b-container>

      <notifications group="auth" position="top center" :speed="1000"/>
      <notifications group="app" position="top right" :speed="1000"/>

      <transition name="fade" mode="out-in" tag="div">
        <router-view @authenticated="setAuthenticated" @user="setUser"/>
      </transition>

    </b-container>

    <modals-container/>

    <v-dialog/>

  </div>
</template>

<script>

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import {Emoji} from 'emoji-mart-vue'

export default {
  name: 'App',
  components: {
    FontAwesomeIcon,
    Emoji
  },
  data () {
    return {
      title: 'Personal Page Admin'
    }
  },
  mounted () {
    if (!this.$root.authenticated) {
      this.$router.replace({ name: 'Login' })
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    logout () {
      this.$root.authenticated = false
      localStorage.setItem('user', '')
      localStorage.setItem('access_token', '')
      localStorage.setItem('refresh_token', '')
      this.$router.replace({ name: 'Login' })
    },
    changeLang (lang) {
      this.$root.lang = lang.value
      this.$root.lang_emoji = lang.emoji
      this.$root.$emit('langChanged')
    },
    isAuthenticated () {
      // return this.$root.authenticated
      const accessToken = localStorage.getItem('access_token')
      return accessToken && accessToken.length > 0
    },
    setAuthenticated (status) {
      this.$root.authenticated = status
    },
    getUser () {
      // return this.$root.user
      return localStorage.getItem('user')
    },
    setUser (user) {
      this.$root.user = user
    }
  }
}
</script>

<style>
body, #app{
  background-color: #d6d4d2 !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
.table > tbody > tr > td {
     vertical-align: middle;
}
.modal-content{
  border: none;
}
.modal-footer{
  display: block;
}
.v--modal{
  background: none;
}
.dropdown-menu{
  min-width: 0;
}
.dropdown-item.disabled, .dropdown-item:disabled{
  background-color: #36a1b961;
}
.vue-dialog{
  background: white;
}
.notifications{
  top: 62px !important;
}
textarea{
  resize: none;
  height: 230px;
}
.dropdown-item.active, .dropdown-item:active {
    color: #fff;
    text-decoration: none;
    background-color: #17a2b8;
}

.vue-input-tag-wrapper .input-tag .remove{ color: white !important;}

.vue-input-tag-wrapper .input-tag {
    background-color: #17a2b8 !important;
    border: 1px solid #d6d4d2 !important;
    color: white !important;
}

.vue-input-tag-wrapper{
    border: 1px solid #ced4da !important;
    border-radius: 0.25rem !important;
}

@media all and (max-width: 375px){
    .navbar-brand .svg-inline--fa{
        display: none;
    }
}
</style>
