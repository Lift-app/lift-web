import router from '@/router'
import auth from '@/auth'
import { mapActions } from 'vuex'

export default {
  name: 'loginType',
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      },
      loading: false,
      type: 'email'
    }
  },
  methods: {
    ...mapActions({
      actionOAuthLogin: 'oauthLogin',
      actionGetOAuthURL: 'getOAuthURL'
    }),
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
  },
  created() {
    this.type = this.$route.params.type

    switch (this.type) {
      case 'google':
        const code = this.$route.query.code
        if (code) {
          this.actionOAuthLogin(['google', code])
            .then((response) => {
              const token = response.data.jwt
              auth.setAuthToken(token)

              this.completeLogin()
            })
        } else {
          this.actionGetOAuthURL('google')
            .then((url) => {
              window.location.href = url
            })
        }
        break
    }
  }
}
