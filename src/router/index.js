import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Debug from '../views/Debug.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/debug',
    name: 'Debug',
    component: Debug
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  
]

const router = new VueRouter({
  routes
})

export default router
