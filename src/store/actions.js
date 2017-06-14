import config from '@/config/config'
import axios from 'axios' // We use Axios for AJAX calls

const actions = {
  getCurrentUser({ commit }) {
    return new Promise((resolve, reject) => {
      return axios.get(`${config.apiUrl}/users/me`)
        .then((response) => {
          commit('SET_USER', response.data)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getUser({ commit }, username) {
    return new Promise((resolve, reject) => {
      return axios.get(`${config.apiUrl}/users/${username}`)
        .then((response) => {
          commit('SET_PROFILE', response.data)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getPosts({ commit }, categoryId = null) {
    const uri = categoryId ? `categories/${categoryId}/posts` : 'posts'

    return new Promise((resolve, reject) => {
      return axios.get(`${config.apiUrl}/${uri}`)
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

  getMorePosts({ commit }, [page, categoryId = null]) {
    const uri = categoryId ? `categories/${categoryId}/posts` : 'posts'

    return new Promise((resolve, reject) => {
      return axios.get(`${config.apiUrl}/${uri}?page=${page}`)
        .then((response) => {
          // Commit the data into SET_POSTS - see mutations.js
          commit('APPEND_POSTS', response.data)
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getVoorjou({ commit }) {
    return new Promise((resolve, reject) => {
      return axios.get(`${config.apiUrl}/posts/voorjou`)
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

  getMoreVoorjou({ commit }, page) {
    return new Promise((resolve, reject) => {
      return axios.get(`${config.apiUrl}/posts/voorjou?page=${page}`)
        .then((response) => {
          // Commit the data into SET_POSTS - see mutations.js
          commit('APPEND_POSTS', response.data)
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getPopular({ commit }) {
    return new Promise((resolve, reject) => {
      return axios.get(`${config.apiUrl}/posts/popular`)
        .then((response) => {
          // Commit the data into SET_POSTS - see mutations.js
          commit('SET_POPULAR_POSTS', response.data)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getMorePopular({ commit }, page) {
    return new Promise((resolve, reject) => {
      return axios.get(`${config.apiUrl}/posts/popular?page=${page}`)
        .then((response) => {
          // Commit the data into SET_POSTS - see mutations.js
          commit('APPEND_POPULAR_POSTS', response.data)
          resolve(response.data)
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

  placeComment({ commit }, data) {
    return new Promise((resolve, reject) => {
      return axios.post(`${config.apiUrl}/posts/${data.id}/comments`, data)
        .then((response) => {
          commit('SET_COMMENT', {comment: response.data.data, data: data})
          resolve(response.data.data)
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
          if (config.debug) { console.log('Post created', response) }
          resolve(response.data.data.id)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getCategory({ commit }, category) {
    return new Promise((resolve, reject) => {
      axios.get(`${config.apiUrl}/categories/${category}`)
        .then((response) => {
          resolve(response.data.data)
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
          if (config.debug) { console.log('Get categories', response) }
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
  },

  getOAuthURL({ commit }, provider) {
    return new Promise((resolve, reject) => {
      axios.get(`${config.apiUrl}/oauth/${provider}`)
        .then((response) => {
          resolve(response.data.url)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  oauthLogin({ commit }, [provider, code]) {
    return new Promise((resolve, reject) => {
      axios.get(`${config.apiUrl}/oauth/${provider}/callback?code=${code}`)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  followUser({ commit }, id) {
    return new Promise((resolve, reject) => {
      axios.put(`${config.apiUrl}/users/${id}/follow`)
        .then((response) => {
          commit('follow')
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  unfollowUser({ commit }, id) {
    return new Promise((resolve, reject) => {
      axios.put(`${config.apiUrl}/users/${id}/unfollow`)
        .then((response) => {
          commit('unfollow')
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  updateUser({ commit }, user) {
    return new Promise((resolve, reject) => {
      axios.put(`${config.apiUrl}/users/me`, user, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  search({ commit }, query) {
    return new Promise((resolve, reject) => {
      axios.get(`${config.apiUrl}/posts/search/${query}`)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export default actions
