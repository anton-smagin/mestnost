import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueYandexMetrika from 'vue-yandex-metrika'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faApple, faYandex, faBandcamp, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faApple)
library.add(faYandex)
library.add(faBandcamp)
library.add(faSpotify)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueYandexMetrika, {
  id: 73630327,
  router: router,
  env: process.env.NODE_ENV,
  debug: true,
  // other options
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
