import Vue from 'vue'
import VueRouter from 'vue-router'
import articlePage from './articlePage'
import mainPage from '../components/main'
import loginPage from './loginPage.vue'
import editPage from './editPage.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: mainPage},
  {
    path: '/article/:id', 
    component: articlePage,
    // children: [
    //   {
    //     path: ':id'
    //   }
    // ]
  },
  {
    path: '/login',
    component: loginPage
  },
  {
    path: '/edit',
    component: editPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
