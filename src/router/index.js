import Vue from 'vue'
import VueRouter from 'vue-router'
import articlePage from './articlePage'

const mainPage =  () => import('../components/main')
const loginPage = () =>  import('./loginPage.vue')
const editPage = () => import('./editPage.vue')

Vue.use(VueRouter)

const routes = [
  {path: '/', component: mainPage},
  {
    path: '/article/:id', 
    component: articlePage,
    
   
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
router.afterEach((to, from, next) => {
  document.documentElement.scrollTop = 0
})

export default router
