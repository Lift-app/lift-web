import auth from '@/auth'

export default {
  name: 'navigation',
  computed: {
    username() {
      return localStorage.username
    }
  }
}
