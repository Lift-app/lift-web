export default {
  apiUrl: 'https://api.liftapp.nl',
  debug: true, // True when developing (use for logging things while in debug mode)

  loggedIn: false,

  isLoggedIn() {
    return this.loggedIn
  },

  login() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.loggedIn = true
        resolve(this.loggedIn)
      }, 500)
    })
  }
}
