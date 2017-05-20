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
      loading: false
    }
  },
  methods: {
    login() {
      this.loading = true
      const credentials = this.credentials
      auth.login(credentials)
        .then(() => {
          const redirect = this.$route.query.redirect
          if (redirect) {
            router.push(redirect)
          } else {
            router.push({name: 'VoorJou'})
          }
        })
        .catch((error) => {
          this.loading = false
          this.$toasted.error('Verkeerde login, probeer opnieuw')
        })
    }
  }
}
