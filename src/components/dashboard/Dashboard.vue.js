import store from '@/store'
import { mapActions } from 'vuex'

import Post from '@/components/post/Post'

export default {
  name: 'dashboard',
  data () {
    return {
      msg: 'dashboard',
      postText: ''
    }
  },
  computed: {
    posts() {
      return store.state.posts
    }
  },
  methods: {
    ...mapActions([
      'getPostsFromApi',
      'placePost'
    ]),
    getPosts() {
      this.getPostsFromApi()
    },
    makePost() {
      this.placePost({
        user_id: 1,
        category_id: 1,
        body: this.postText
      })
    }
  },
  components: {
    Post
  }
}
