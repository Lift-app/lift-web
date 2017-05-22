import router from '@/router'
import auth from '@/auth'
import { mapActions } from 'vuex'

export default {
  name: 'loginEmail',
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
          this.completeLogin()
        })
        .catch((error) => {
          this.loading = false
          this.$toasted.error('Verkeerde login, probeer opnieuw')
        })
    },
    completeLogin() {
      const redirect = this.$route.query.redirect
      if (redirect) {
        router.push(redirect)
      } else {
        router.push({name: 'VoorJou'})
      }
    }
  }
}
