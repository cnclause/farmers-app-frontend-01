import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Philosophy from '../views/Philosophy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/philosophy',
    name: 'philosophy',
    component: Philosophy
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
