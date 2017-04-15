import store from '../../store'

export default {
  name: 'dashboard',
  data () {
    return {
      msg: 'dashboard'
    }
  },
  computed: {
    posts() {
      return store.state.posts
    }
  }
}