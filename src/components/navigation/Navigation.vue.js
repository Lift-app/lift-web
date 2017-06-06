import auth from '@/auth'

export default {
  name: 'navigation',
  methods: {
    current_user() {
      return localStorage.username
    }
  }
}
