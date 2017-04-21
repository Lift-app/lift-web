import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/pages/login/Login'
import Home from '@/pages/home/Home'
import Post from '@/pages/post/Post'

Vue.use(Router)

export default new Router({
  mode: 'history', // This removes the trailing # on the URL
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: true,
      children: [
        {
          path: 'post/:id',
          name: 'Post',
          component: Post
        }
      ]
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
