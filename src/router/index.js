import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/login/Login'

Vue.use(Router)

export default new Router({
  mode: 'history', // This removes the trailing # on the URL
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
