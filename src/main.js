import Vue from './setup';
import App from './App.vue'
import router from './router.js';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
