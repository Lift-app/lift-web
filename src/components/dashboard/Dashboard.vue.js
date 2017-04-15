import store from '../../store'
import { mapActions } from 'vuex'

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
  },
  methods: {
    ...mapActions([
      'getPostsFromApi'
    ]),
    getPosts() {
      this.getPostsFromApi({limit: 15})
    }
  }
}
