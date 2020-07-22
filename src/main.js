import Vue from './prototype'
import App from './App.vue'
import VueTheMask from 'vue-the-mask';
import BootstrapVue from 'bootstrap-vue';
import VueSession from 'vue-session';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(fas)
Vue.component('fas', FontAwesomeIcon)

import router from './router.js';

Vue
  .use(VueSession)
  .use(VueTheMask)
  .use(BootstrapVue)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
