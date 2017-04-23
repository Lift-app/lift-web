import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
  posts: {},
  post: {}
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
