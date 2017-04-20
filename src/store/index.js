import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
  posts: {}
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
