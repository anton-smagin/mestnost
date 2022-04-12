import { createRouter } from "vue-router";
import HomePage from '../views/HomePage.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/contacts',
    name: 'contacts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ContactsPage.vue')
  },
  {
    path: '/releases',
    name: 'release',
    component: () => import('../views/ReleasesPage.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutPage.vue')
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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
