import router from '@/router'
import auth from '@/auth'
import config from '@/config/config'

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
  },
  beforeCreate() {
    this.type = this.$route.params.type

    return
    switch(this.type) {
      case 'google':
        const clientId = config.google.clientId
        const redirectUrl = encodeURIComponent(window.location)
        const scope = config.google.scope
        const oauthUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=code&scope=${scope}`
        window.location.href = oauthUrl
        break
      case 'facebook':
        console.log('heuj facebook auth')
        break
    }
  }
}
