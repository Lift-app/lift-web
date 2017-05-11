import config from '@/config/config'
import router from '@/router'
import auth from '@/auth'

export default {
  name: 'login',
  data() {
    return {
      credentials: {
        email: '',
        password: '',
      },
      error: '',
      msg: 'login'
    }
  },
  mounted() {
    document.querySelector('#app').classList.add('nav-hidden')
  },
  beforeDestroy() {
    document.querySelector('#app').classList.remove('nav-hidden')
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
