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
    const provider = this.$route.params.provider

    if (!['google', 'facebook'].includes(provider)) {
      router.push({name: '404'})
      return
    }

    const code = this.$route.query.code

    if (code) {
      this.actionOAuthLogin([provider, code])
        .then(response => {
          const token = response.data.jwt
          localStorage.username = response.data.username
          auth.setAuthToken(token)

          this.completeLogin()
        })
    } else {
      this.actionGetOAuthURL(provider)
        .then(url => {
          window.location.href = url
        })
    }
  },
  components: {
    Preloader
  }
}
