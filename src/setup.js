import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import VueTheMask from 'vue-the-mask';
import VueSession from 'vue-session';
import VueScrollTo from 'vue-scrollto';
import VueHttp from './plugin/http';
import VueTranslator from './plugin/translation';
import PageTitle from './components/PageTitle/PageTitle.vue';
import Overlayer from './components/Overlayer/Overlayer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/theme.css'
Vue
    .use(VueSession, { persist: true })
    .use(VueHttp)
    .use(VueTranslator)
    .use(VueTheMask)
    .use(BootstrapVue)
    .use(VueScrollTo, {
        container: "body",
        duration: 500,
        easing: "ease",
        offset: -100,
        force: true,
        cancelable: true,
        onStart: false,
        onDone: false,
        onCancel: false,
        x: false,
        y: true
    })

Vue.component('page-title', PageTitle);

library.add(fas)
Vue.component('fas', FontAwesomeIcon)
Vue.component('PageTitle', PageTitle)
Vue.component('Overlayer', Overlayer)

Vue.config.productionTip = false

export default Vue;