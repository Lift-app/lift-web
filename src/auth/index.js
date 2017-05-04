import config from '@/config/config'
import axios from 'axios'

export default {
  user: {
    authenticated: false
  },

  login(credentials) {
    return new Promise((resolve, reject) => {
      return axios.post(`${config.apiUrl}/tokens`, credentials)
      .then((response) => {
        localStorage.setItem('access_token', response.data.jwt)

        this.user.authenticated = true
        resolve()
      }).catch((error) => {
        reject(error)
      })
    })
  },

  logout() {
    localStorage.removeItem('access_token')
    this.user.authenticated = false
  },

  checkAuth() {
    var jwt = localStorage.getItem('access_token')

    this.user.authenticated = !!jwt
  },

  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    }
  }
}
