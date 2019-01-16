import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      //from import
      component: Login
    },
    {
      path: '/Exchain',
      name: 'home',
      component: Home
    }
  ]
})
