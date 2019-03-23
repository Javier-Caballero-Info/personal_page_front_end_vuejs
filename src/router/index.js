import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Login from '@/components/session-component/Login'

import IndexUser from '@/components/user-component/index-user/IndexUser'
import CreateUser from '@/components/user-component/create-user/CreateUser'
import EditUser from '@/components/user-component/edit-user/EditUser'
import MeUser from '@/components/user-component/me-user/MeUser'
import PasswordUser from '@/components/user-component/password-user/PasswordUser'

import IndexSocialNetwork from '@/components/social-network-component/index-social-network/IndexSocialNetwork'
import ShowSocialNetwork from '@/components/social-network-component/show-social-network/ShowSocialNetwork'
import CreateSocialNetwork from '@/components/social-network-component/create-social-network/CreateSocialNetwork'
import EditSocialNetwork from '@/components/social-network-component/edit-social-network/EditSocialNetwork'

import IndexContact from '@/components/contact-component/index-contact/IndexContact'
import ShowContact from '@/components/contact-component/show-contact/ShowContact'
import CreateContact from '@/components/contact-component/create-contact/CreateContact'
import EditContact from '@/components/contact-component/edit-contact/EditContact'

import IndexWork from '@/components/work-component/index-work/IndexWork'
import ShowWork from '@/components/work-component/show-work/ShowWork'
import CreateWork from '@/components/work-component/create-work/CreateWork'
import EditWork from '@/components/work-component/edit-work/EditWork'

import IndexEducation from '@/components/education-component/index-education/IndexEducation'
import ShowEducation from '@/components/education-component/show-education/ShowEducation'
import CreateEducation from '@/components/education-component/create-education/CreateEducation'
import EditEducation from '@/components/education-component/edit-education/EditEducation'

import IndexPortfolio from '@/components/portfolio-component/index-portfolio/IndexPortfolio'
import ShowPortfolio from '@/components/portfolio-component/show-portfolio/ShowPortfolio'
import CreatePortfolio from '@/components/portfolio-component/create-portfolio/CreatePortfolio'
import EditPortfolio from '@/components/portfolio-component/edit-portfolio/EditPortfolio'

import IndexResearch from '@/components/research-component/index-research/IndexResearch'
import ShowResearch from '@/components/research-component/show-research/ShowResearch'
import CreateResearch from '@/components/research-component/create-research/CreateResearch'
import EditResearch from '@/components/research-component/edit-research/EditResearch'

import IndexScholastic from '@/components/scholastic-component/index-scholastic/IndexScholastic'
import ShowScholastic from '@/components/scholastic-component/show-scholastic/ShowScholastic'
import CreateScholastic from '@/components/scholastic-component/create-scholastic/CreateScholastic'
import EditScholastic from '@/components/scholastic-component/edit-scholastic/EditScholastic'

import IndexGift from '@/components/gift-component/index-gift/IndexGift'
import ShowGift from '@/components/gift-component/show-gift/ShowGift'
import CreateGift from '@/components/gift-component/create-gift/CreateGift'
import EditGift from '@/components/gift-component/edit-gift/EditGift'

import IndexMenu from '@/components/menu-component/index-menu/IndexMenu'
import ShowMenu from '@/components/menu-component/show-menu/ShowMenu'
import CreateMenu from '@/components/menu-component/create-menu/CreateMenu'
import EditMenu from '@/components/menu-component/edit-menu/EditMenu'

import ShowHome from '@/components/home-component/show-home/ShowHome'
import EditHome from '@/components/home-component/edit-home/EditHome'

import FileComponent from '@/components/file-component/FileComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/files',
      name: 'Files',
      component: FileComponent
    },

    /*
     ======================
     > Users <
     ======================
     */
    {
      path: '/users',
      name: 'IndexUser',
      component: IndexUser
    },
    {
      path: '/user/new',
      name: 'CreateUser',
      component: CreateUser
    },
    {
      path: '/user/:id/edit',
      name: 'EditUser',
      component: EditUser
    },
    {
      path: '/me',
      name: 'MeUser',
      component: MeUser
    },
    {
      path: '/change-password',
      name: 'PasswordUser',
      component: PasswordUser
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
    },

    /*
     ======================
     > Work <
     ======================
     */

    {
      path: '/works',
      name: 'IndexWork',
      component: IndexWork
    },
    {
      path: '/works/new',
      name: 'CreateWork',
      component: CreateWork
    },
    {
      path: '/works/:id',
      name: 'ShowWork',
      component: ShowWork
    },
    {
      path: '/works/:id/edit',
      name: 'EditWork',
      component: EditWork
    },

    /*
     ======================
     > Education <
     ======================
     */

    {
      path: '/educations',
      name: 'IndexEducation',
      component: IndexEducation
    },
    {
      path: '/educations/new',
      name: 'CreateEducation',
      component: CreateEducation
    },
    {
      path: '/educations/:id',
      name: 'ShowEducation',
      component: ShowEducation
    },
    {
      path: '/educations/:id/edit',
      name: 'EditEducation',
      component: EditEducation
    },

    /*
     ======================
     > Portfolio <
     ======================
     */

    {
      path: '/portfolios',
      name: 'IndexPortfolio',
      component: IndexPortfolio
    },
    {
      path: '/portfolios/new',
      name: 'CreatePortfolio',
      component: CreatePortfolio
    },
    {
      path: '/portfolios/:id',
      name: 'ShowPortfolio',
      component: ShowPortfolio
    },
    {
      path: '/portfolios/:id/edit',
      name: 'EditPortfolio',
      component: EditPortfolio
    },

    /*
     ======================
     > Research <
     ======================
     */

    {
      path: '/researches',
      name: 'IndexResearch',
      component: IndexResearch
    },
    {
      path: '/researches/new',
      name: 'CreateResearch',
      component: CreateResearch
    },
    {
      path: '/researches/:id',
      name: 'ShowResearch',
      component: ShowResearch
    },
    {
      path: '/researches/:id/edit',
      name: 'EditResearch',
      component: EditResearch
    },

    /*
     ======================
     > Scholastic <
     ======================
     */

    {
      path: '/scholastic',
      name: 'IndexScholastic',
      component: IndexScholastic
    },
    {
      path: '/scholastic/new',
      name: 'CreateScholastic',
      component: CreateScholastic
    },
    {
      path: '/scholastic/:id',
      name: 'ShowScholastic',
      component: ShowScholastic
    },
    {
      path: '/scholastic/:id/edit',
      name: 'EditScholastic',
      component: EditScholastic
    },

    /*
     ======================
     > Gift <
     ======================
     */

    {
      path: '/gifts',
      name: 'IndexGift',
      component: IndexGift
    },
    {
      path: '/gifts/new',
      name: 'CreateGift',
      component: CreateGift
    },
    {
      path: '/gifts/:id',
      name: 'ShowGift',
      component: ShowGift
    },
    {
      path: '/gifts/:id/edit',
      name: 'EditGift',
      component: EditGift
    },

    /*
     ======================
     > Menu <
     ======================
     */

    {
      path: '/menu',
      name: 'IndexMenu',
      component: IndexMenu
    },
    {
      path: '/menu/new',
      name: 'CreateMenu',
      component: CreateMenu
    },
    {
      path: '/menu/:id',
      name: 'ShowMenu',
      component: ShowMenu
    },
    {
      path: '/menu/:id/edit',
      name: 'EditMenu',
      component: EditMenu
    },

    /*
     ======================
     > Home <
     ======================
     */

    {
      path: '/home',
      name: 'ShowHome',
      component: ShowHome
    },
    {
      path: '/home/edit',
      name: 'EditHome',
      component: EditHome
    }

  ]
})
