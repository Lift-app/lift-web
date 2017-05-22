import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/pages/login/Login'
import LoginEmail from '@/pages/login/email/LoginEmail'
import LoginOAuth from '@/pages/login/oauth/LoginOAuth'
import VoorJou from '@/pages/voorjou/VoorJou'
import Search from '@/pages/search/Search'
import CategoryPosts from '@/pages/category-posts/CategoryPosts'
import Post from '@/pages/post/Post'
import CreatePost from '@/pages/create-post/CreatePost'
import CreatePostSuccess from '@/pages/create-post/success/Success'

import auth from '@/auth'

Vue.use(VueRouter)

function requireAuth(to, from, next) {
  if (!auth.isLoggedIn()) {
    next({
      name: 'Login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export default new VueRouter({
  mode: 'history', // This removes the trailing # on the URL
  routes: [
    {
      path: '/',
      name: 'VoorJou',
      component: VoorJou,
      beforeEnter: requireAuth,
      children: [
        {
          path: 'post/:id',
          name: 'Post',
          component: Post
        }
      ]
    },
    {
      path: '/zoeken',
      name: 'Search',
      beforeEnter: requireAuth,
      component: Search,
      children: [
        {
          path: 'categorie/:category',
          name: 'CategoryPosts',
          component: CategoryPosts
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      children: [
        {
          path: 'email',
          name: 'LoginEmail',
          component: LoginEmail
        },
        {
          path: 'oauth/:type',
          name: 'LoginOAuth',
          component: LoginOAuth
        }
      ]
    },
    {
      path: '/logout',
      beforeEnter(to, from, next) {
        auth.logout()
        next('/login')
      }
    },
    {
      path: '/post-maken',
      name: 'CreatePost',
      component: CreatePost,
      beforeEnter: requireAuth,
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
