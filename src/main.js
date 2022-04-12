import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueYandexMetrika from 'vue-yandex-metrika'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faApple, faYandex, faBandcamp, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue } from 'bootstrap-vue'

library.add(faApple)
library.add(faYandex)
library.add(faBandcamp)
library.add(faSpotify)

// Vue.config.productionTip = false

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(BootstrapVue)
  .use(router)
  .use(VueYandexMetrika, {
    id: 73630327,
    router: router,
    env: process.env.NODE_ENV
    // other options
  })
  .mount('#app')
