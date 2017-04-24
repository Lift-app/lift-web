import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/pages/login/Login'
import Home from '@/pages/home/Home'

import Post from '@/pages/post/Post'

import CreatePost from '@/pages/create-post/CreatePost'
import CreatePostSuccess from '@/pages/create-post/success/Success'

Vue.use(Router)

export default new Router({
  mode: 'history', // This removes the trailing # on the URL
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'post/:id',
          name: 'Post',
          component: Post
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/post-maken',
      name: 'CreatePost',
      component: CreatePost,
      children: [
        {
          path: 'gemaakt',
          name: 'CreatePostSuccess',
          component: CreatePostSuccess
        }
      ]
    },

    // Default route if none of the above can be matched
    {
      name: '404',
      path: '/404',
      component: {
        template: '<div><p>Pagina kon niet gevonden worden.</p> <router-link to="/">Ga terug</router-link></div>'
      }
    }
  ]
})
