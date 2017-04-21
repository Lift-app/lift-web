import store from '@/store'
import { mapActions } from 'vuex'

import Card from '@/components/card/Card'

export default {
  name: 'home',
  data() {
    return {
      msg: 'home',
      postText: '',
      loading: false
    }
  },
  computed: {
    posts() {
      return store.getters.getPosts
    },
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
    Card
  },
  mounted() {
    this.getPosts()
  }
}
