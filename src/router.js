import Vue from './prototype';
import VueRouter from 'vue-router'
import Home from './_pages/Home/Home'
import Login from './_pages/Login/Login'
let routes = [
    /** Auth needed */
    ...[
        {
            path: '/home',
            name: 'Home',
            component: Home,
            meta: {
                protected: true,
                title: 'Início'
            }
        },


    ],
    /** Auth not needed */
    ...[
        {
            path: '/entrar',
            name: 'Realizar Login',
            component: Login,
            meta: {
                protected: false,
                title: 'Realizar Login'
            }
        },
        {
            path: '*',
            component: Login,
            name: 'Other',
            meta: {
                title: 'Login'
            }
        }
    ],


]

Vue.use(VueRouter);

var router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;