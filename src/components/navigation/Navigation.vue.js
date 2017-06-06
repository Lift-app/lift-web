import auth from '@/auth'

export default {
  name: 'navigation',
  data() {
    return {
      current_user: ''
    }
  },
  watch: {
    '$route' (to, from) {
      this.current_user = localStorage.username
    }
  },
  computed: {
    current_user() {
      return localStorage.username
    }
  }
}
