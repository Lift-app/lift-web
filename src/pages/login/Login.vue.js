import router from '@/router'
import config from '@/config/config'

export default {
  name: 'login',
  mounted() {
    if (!localStorage.onboarded) {
      router.push({name: 'Onboarding'})
      config.debug ? console.log('navigating to onboarding') : null
    }
    document.querySelector('#app').classList.add('nav-hidden')
  },
  beforeDestroy() {
    document.querySelector('#app').classList.remove('nav-hidden')
  },
  methods: {
    loginWithEmail() {
      router.push({name: 'LoginEmail'})
    },

    loginWithOAuth(provider) {
      router.push({name: 'LoginOAuth', params: {provider: provider}})
    }
  }
}
