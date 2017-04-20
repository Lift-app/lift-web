import config from '@/config/config'
import router from '@/router'

export default {
  name: 'login',
  data () {
    return {
      msg: 'login'
    }
  },
  methods: {
    login() {
      config.login().then(() => {
        router.push({name: 'Home'})
      })
    }
  }
}