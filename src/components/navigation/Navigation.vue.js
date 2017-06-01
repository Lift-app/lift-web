import auth from '@/auth'

export default {
  name: 'navigation',
  computed: {
    current_user() {
      return localStorage.username
    }
  }
}
