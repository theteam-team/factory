import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
       
    },
    {
      path: '/Signup',
      name: 'Signup',

      component: () => import('./views/Signup.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('./views/Login.vue')
    }
  ],
   mode:'history'
});
