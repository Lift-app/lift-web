import config from '@/config/config'
import axios from 'axios'

export default {
  login(credentials) {
    return new Promise((resolve, reject) => {
      return axios.post(`${config.apiUrl}/tokens`, credentials)
        .then((response) => {
          localStorage.access_token = response.data.jwt

          axios.defaults.headers.common = {
            'Authorization': this.getAuthHeader()
          }

          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  logout() {
    delete localStorage.access_token
  },

  isLoggedIn() {
    return !!localStorage.access_token
  },

  getAuthHeader() {
    return `Bearer ${localStorage.access_token}`
  }
}
