import config from '@/config/config'
import axios from 'axios'

export default {
  login(credentials) {
    return new Promise((resolve, reject) => {
      return axios.post(`${config.apiUrl}/tokens`, credentials)
        .then((response) => {
          localStorage.username = response.data.username
          this.setAuthToken(response.data.jwt)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  setAuthToken(token) {
    localStorage.access_token = token

    this.setAuthHeader()
  },

  logout() {
    delete localStorage.username
    delete localStorage.access_token
  },

  isLoggedIn() {
    return !!localStorage.access_token
  },

  setAuthHeader() {
    axios.defaults.headers.common = {
      'Authorization': this.getAuthHeader()
    }
  },

  getAuthHeader() {
    return `Bearer ${localStorage.access_token}`
  }
}
