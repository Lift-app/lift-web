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
      console.log('hesbs')
      router.push({name: 'LoginType', params: {type: 'email'}})
    }
  }
}
