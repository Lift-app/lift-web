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

  getComments({ commit }, id) {
    return new Promise((resolve, reject) => {
      return axios.get(`${config.apiUrl}/posts/${id}/comments`)
        .then((response) => {
          commit('SET_COMMENTS', {comments: response.data.data, id: id})
          console.log(response.data)
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

  like({ commit }, [id, type]) {
    return new Promise((resolve, reject) => {
      axios.put(`${config.apiUrl}/${type}/${id}/like`)
        .then((response) => {
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  unlike({ commit }, [id, type]) {
    return new Promise((resolve, reject) => {
      axios.put(`${config.apiUrl}/${type}/${id}/unlike`)
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
