import store from '@/store'
import { mapActions } from 'vuex'

import Card from '@/components/card/Card'

export default {
  name: 'home',
  data() {
    return {
      postText: '',
      loading: false
    }
  },
  computed: {
    posts() {
      return store.getters.fetchPosts
    }
  },
  methods: {
    ...mapActions({
      actionGetPosts: 'getPosts',
      placePost: 'placePost'
    }),

    getPosts() {
      this.loading = true
      this.actionGetPosts().then(() => {
        this.loading = false
      })
    },

    makePost() {
      this.placePost({
        user_id: 1,
        category_id: 1,
        body: this.postText
      }, arg)
    }
  },
  components: {
    Card
  },
  created() {
    this.getPosts()
  }
}
