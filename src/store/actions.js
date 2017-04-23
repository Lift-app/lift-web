import config from '@/config/config'
import axios from 'axios' // We use Axios for AJAX calls

const actions = {
  getPosts({ commit }) {
    return new Promise((resolve, reject) => {
      return axios.get(`${config.apiUrl}/posts`)
        .then((response) => {
          // Commit the data into SET_POSTS - see mutations.js
          commit('SET_POSTS', response.data)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getPost({ commit }, id) {
    return new Promise((resolve, reject) => {
      return axios.get(`${config.apiUrl}/posts/${id}`)
        .then((response) => {
          // Commit the data into SET_POST - see mutations.js
          commit('SET_POST', response.data)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  placePost({ commit }, arg) {
    axios.post(`${config.apiUrl}/posts`, {
      user_id: arg.user_id,
      category_id: arg.category_id,
      body: arg.body
    })
      .then((response) => {
        console.log('success', response)
      })
      .catch((error) => {
        if(config.debug) { console.error(error) }
      })
  }
}

export default actions
