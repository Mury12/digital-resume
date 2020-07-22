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
              title: 'Halo!'
          }
      },
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
  /** Auth not needed */
  // ...[{
  //         path: '/auth/login',
  //         name: 'Login',
  //         component: AuthScreen,
  //         meta: {
  //             protected: false,
  //             auth: false,
  //             title: 'Login'
  //         }
  //     },
  // ],


]

Vue.use(VueRouter);

var router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;