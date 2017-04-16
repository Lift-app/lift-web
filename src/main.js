// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'

import store from './store' // Import Vuex store
import router from './router' // Import vue-router routes

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#lift',
  store,
  router,
  template: '<App/>',
  components: {
    App
  }
})

