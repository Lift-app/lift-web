import router from '@/router'

export default {
  name: 'login',
  mounted() {
    document.querySelector('#app').classList.add('nav-hidden')
  },
  beforeDestroy() {
    document.querySelector('#app').classList.remove('nav-hidden')
  },
  methods: {
    loginWithEmail() {
      router.push({name: 'LoginEmail'})
    },

    loginWithGoogle() {
      router.push({name: 'LoginOAuth', params: {type: 'google'}})
    }
  }
}
