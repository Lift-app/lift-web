import store from '@/store'
import { mapActions } from 'vuex'

import Post from '@/components/post/Post'

export default {
  name: 'home',
  data () {
    return {
      msg: 'home',
      postText: '',
      loading: false
    }
  },
  computed: {
    posts() {
      return store.getters.getPosts
    }
  },
  methods: {
    ...mapActions([
      'getPostsFromApi',
      'placePost'
    ]),
    getPosts() {
      this.loading = true
      this.getPostsFromApi().then(() => {
        this.loading = false
      })
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
  },
  mounted() {
    this.getPosts()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  }
}
