import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import IndexSocialNetwork from '@/components/social-network-component/index-social-network/IndexSocialNetwork'
import ShowSocialNetwork from '@/components/social-network-component/show-social-network/ShowSocialNetwork'
import CreateSocialNetwork from '@/components/social-network-component/create-social-network/CreateSocialNetwork'
import EditSocialNetwork from '@/components/social-network-component/edit-social-network/EditSocialNetwork'

import IndexContact from '@/components/contact-component/index-contact/IndexContact'
import ShowContact from '@/components/contact-component/show-contact/ShowContact'
import CreateContact from '@/components/contact-component/create-contact/CreateContact'
import EditContact from '@/components/contact-component/edit-contact/EditContact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    /*
    ======================
      > Social Network <
    ======================
    */

    {
      path: '/social-networks',
      name: 'IndexSocialNetwork',
      component: IndexSocialNetwork
    },
    {
      path: '/social-networks/new',
      name: 'CreateSocialNetwork',
      component: CreateSocialNetwork
    },
    {
      path: '/social-networks/:id',
      name: 'ShowSocialNetwork',
      component: ShowSocialNetwork
    },
    {
      path: '/social-networks/:id/edit',
      name: 'EditSocialNetwork',
      component: EditSocialNetwork
    },

    /*
    ======================
      > Contact <
    ======================
    */

    {
      path: '/contacts',
      name: 'IndexContact',
      component: IndexContact
    },
    {
      path: '/contacts/new',
      name: 'CreateContact',
      component: CreateContact
    },
    {
      path: '/contacts/:id',
      name: 'ShowContact',
      component: ShowContact
    },
    {
      path: '/contacts/:id/edit',
      name: 'EditContact',
      component: EditContact
    }

  ]
})
