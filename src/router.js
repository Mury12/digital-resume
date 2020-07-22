import Vue from './prototype';
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'
let routes = [
  /** Auth needed */
  ...[{
          path: '/HelloVue',
          name: 'Hello Vue',
          component: HelloWorld,
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