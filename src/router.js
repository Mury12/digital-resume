import Vue from './prototype';
import VueRouter from 'vue-router'
import Home from './_pages/Home/Home'
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
            component: Home,
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
                protected: true,
                title: 'Halo!'
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