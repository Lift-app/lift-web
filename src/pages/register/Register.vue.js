import router from '@/router'
import { mapActions } from 'vuex'

export default {
  name: 'register',
  data() {
    return {
      email: '',
      username: '',
      password: ''
    }
  },
  mounted() {
    document.querySelector('#app').classList.add('nav-hidden')
  },
  beforeDestroy() {
    document.querySelector('#app').classList.remove('nav-hidden')
  },
  methods: {
    ...mapActions({
      register: 'register'
    }),
    createAccount() {
      this.register({
        email: this.email,
        username: this.username,
        password: this.password
      })
        .then(() => {
          this.$toasted.success('Succesvol aangemeld!')
          router.push({name: 'LoginEmail'})
        })
        .catch((error) => {
          this.$toasted.error('Er ging wat mis. Probeer opnieuw!')
        })
    }
  }
}
