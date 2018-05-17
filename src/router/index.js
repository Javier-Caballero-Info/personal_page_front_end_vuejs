import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import IndexSocialNetwork from '@/components/social-network-component/index-social-network/IndexSocialNetwork'
import ShowSocialNetwork from '@/components/social-network-component/show-social-network/ShowSocialNetwork'
import CreateSocialNetwork from '@/components/social-network-component/create-social-network/CreateSocialNetwork'
import EditSocialNetwork from '@/components/social-network-component/edit-social-network/EditSocialNetwork'

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
    }
  ]
})
