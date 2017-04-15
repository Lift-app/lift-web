import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
  posts: [
    {
      id: '1',
      author: 'Peter',
      question: 'Hey Jing, want to give a Flux talk at ForwardJS?',
      timestamp: '3 dagen geleden'
    },
    {
      id: '2',
      author: 'Klaas',
      question: 'Seems like a pretty cool conference?',
      timestamp: '4 dagen geleden'
    }
  ]
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
