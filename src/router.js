import Vue from './prototype';
import VueRouter from 'vue-router'
import Home from './_pages/Home/Home'
import AdminPanel from './_pages/AdminPanel/AdminPanel'
import Login from './_pages/Login/Login'
let routes = [
    /** Auth needed */
    ...[
        {
            path: '/',
            name: 'Início',
            component: Home,
            meta: {
                protected: true,
                title: 'Início'
            }
        },
        {
            path: '/painel-administrativo',
            name: 'Painel Administrativo',
            component: AdminPanel,
            meta: {
                protected: true,
                title: 'Administração'
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
    ],


]

Vue.use(VueRouter);

var router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;