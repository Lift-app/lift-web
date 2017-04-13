import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Dashboard from '@/components/dashboard/Dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history', // This removes the trailing # on the URL
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
