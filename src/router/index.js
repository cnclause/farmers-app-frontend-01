import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Philosophy from '../views/Philosophy.vue'
import Research from '../views/Research.vue'
import Profile from '../views/Profile.vue'
import Forum from '../views/Forum.vue'
import LoginToken from '../views/LoginToken.vue'
import store from '../store'

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
  },
  {
    path: '/research',
    name: 'research',
    component: Research
  },
  {
    path: '/login/token',
    name: 'login-token',
    component: LoginToken
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    beforeEnter(to, from, next){
      if(store.getters.isLoggedIn){
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/forum',
    name: 'forum',
    component: Forum,
    beforeEnter(to, from, next){
      if(store.getters.isLoggedIn){
        next()
      } else {
        next('/')
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
