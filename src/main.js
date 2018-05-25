// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import regular from '@fortawesome/fontawesome-free-regular'
import solid from '@fortawesome/fontawesome-free-solid'
import App from './App'
import VeeValidate from 'vee-validate'
import router from './router'
import vmodal from 'vue-js-modal'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.min.css'
import Notifications from 'vue-notification'
import { Emoji } from 'emoji-mart-vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

Vue.use(Emoji)

Vue.use(VeeValidate, {fieldsBagName: 'formFields'})

Vue.use(vmodal, { dynamic: true, dialog: true })

Vue.use(Loading)

Vue.use(Notifications)

fontawesome.library.add(brands, regular, solid)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  data: {
    available_langs: [
      {
        'value': 'es',
        'emoji': '🇪🇸'
      },
      {
        'value': 'en',
        'emoji': '🇺🇸'
      }
    ],
    lang: 'es',
    lang_emoji: '🇪🇸'
  },
  template: '<App/>'
})
