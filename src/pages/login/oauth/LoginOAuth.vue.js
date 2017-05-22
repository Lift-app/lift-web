import router from '@/router'
import auth from '@/auth'
import Preloader from '@/components/preloader/Preloader'
import { mapActions } from 'vuex'

export default {
  name: 'loginOAuth',
  methods: {
    ...mapActions({
      actionOAuthLogin: 'oauthLogin',
      actionGetOAuthURL: 'getOAuthURL'
    }),

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
            .then(response => {
              const token = response.data.jwt
              auth.setAuthToken(token)

              this.completeLogin()
            })
        } else {
          this.actionGetOAuthURL('google')
            .then(url => {
              window.location.href = url
            })
        }
        break
      default:
        router.push({name: '404'})
        break
    }
  },
  components: {
    Preloader
  }
}
