// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'

import store from './store' // Import Vuex store
import router from './router' // Import vue-router routes

import notifications from './config/notifications'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import moment from 'moment'
import InfiniteLoading from 'vue-infinite-loading'

Vue.config.productionTip = false

moment.locale('nl')
Vue.use(require('vue-moment'))
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#lift',
  store,
  router,
  notifications,
  template: '<App/>',
  components: {
    App,
    InfiniteLoading
  }
})
