import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacts',
    name: 'contacts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Contacts.vue')
  },
  {
    path: '/releases',
    name: 'Releases',
    component: () => import('../views/Releases.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/releases/AnderdogSleepParalysis',
    name: 'releases/AnderdogSleepParalysis',
    component: () => import('../views/releases/AnderdogSleepParalysis.vue')
  },
  {
    path: '/releases/KoMaRealFace',
    name: 'releases/KoMaRealFace',
    component: () => import('../views/releases/KoMaRealFace.vue')
  },
  {
    path: '/releases/AmbidextrousErrorism',
    name: 'releases/AmbidextrousErrorism',
    component: () => import('../views/releases/AmbidextrousErrorism.vue')
  },
  {
    path: '/releases/MicrodogEastSide',
    name: 'releases/MicrodogEastSide',
    component: () => import('../views/releases/MicrodogEastSide.vue')
  },
  {
    path: '/releases/VvvedenskayaAttempts',
    name: 'releases/VvvedenskayaAttempts',
    component: () => import('../views/releases/VvvedenskayaAttempts.vue')
  },
  {
    path: '/releases/MorakhLimes',
    name: 'releases/MorakhLimes',
    component: () => import('../views/releases/MorakhLimes.vue')
  },
  {
    path: '/releases/AnderdogAndreyLeto',
    name: 'releases/AnderdogAndreyLeto',
    component: () => import('../views/releases/AnderdogAndreyLeto.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
