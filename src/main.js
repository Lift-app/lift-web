// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'

import store from './store' // Import Vuex store
import router from './router' // Import vue-router routes

import notifications from './config/notifications'

import moment from 'moment'

Vue.config.productionTip = false

moment.locale('nl')
Vue.use(require('vue-moment'))

/* eslint-disable no-new */
new Vue({
  el: '#lift',
  store,
  router,
  notifications,
  template: '<App/>',
  components: {
    App
  }
})
