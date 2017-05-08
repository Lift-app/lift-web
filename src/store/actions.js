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
    return new Promise((resolve, reject) => {
      axios.post(`${config.apiUrl}/posts`, arg)
        .then((response) => {
          if(config.debug) { console.log('Post created', response) }
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getCategories({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get(`${config.apiUrl}/categories`)
        .then((response) => {
          commit('SET_CATEGORIES', response.data)
          if(config.debug) { console.log('Get categories', response) }
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  likePost({ commit }, id) {
    return new Promise((resolve, reject) => {
      axios.put(`${config.apiUrl}/posts/${id}/like`, {}, {
        headers: {'authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJVc2VyOjEiLCJleHAiOjE0OTY4NDQxMzYsImlhdCI6MTQ5NDI1MjEzNiwiaXNzIjoiTGlmdCIsImp0aSI6ImUxNDVlZWRkLWMyNWItNGFlZi1hN2U1LTc4MGQzMGY4YjlhYiIsInBlbSI6e30sInN1YiI6IlVzZXI6MSIsInR5cCI6ImFjY2VzcyJ9.9W7iJS3MypQGorYL879VRqexqUrRhDteHQ31GBG0OjiB9GyT24QnLF8u8Smyq_ol50_Pmn7cI6JQPjK6ScdcvQ'}
      })
        .then((response) => {
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export default actions
