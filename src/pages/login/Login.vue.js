import config from '@/config/config'
import router from '@/router'

import auth from '@/auth'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      error: '',
      msg: 'login'
    }
  },
  methods: {
    login() {
      const credentials = {
        email: this.email,
        password: this.password,
      }

      auth.login(credentials)
        .then(() => {
          router.push({name: 'Home'})
        })
        .catch((err) => {
          this.error = err.response.data.message
        })
    }
  }
}
