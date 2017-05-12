import router from '@/router'
import auth from '@/auth'

export default {
  name: 'loginType',
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      },
      error: '',
      msg: 'login'
    }
  },
  methods: {
    login() {
      const credentials = this.credentials
      auth.login(credentials)
        .then(() => {
          const redirect = this.$route.query.redirect
          if (redirect) {
            router.push(redirect)
          } else {
            router.push({name: 'Home'})
          }
        })
        .catch((error) => {
          console.log(`Failed to log in: ${error}`)
        })
    }
  }
}
