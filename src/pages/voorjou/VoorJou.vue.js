import store from '@/store'
import { mapActions } from 'vuex'

import Card from '@/components/card/Card'
import Preloader from '@/components/preloader/Preloader'
import InfiniteLoading from 'vue-infinite-loading'

export default {
  name: 'voorjou',
  data() {
    return {
      loading: false,
      page: 1
    }
  },
  computed: {
    posts() {
      return store.getters.fetchPosts
    }
  },
  methods: {
    ...mapActions({
      actionGetVoorjou: 'getVoorjou',
      actionGetMoreVoorjou: 'getMoreVoorjou'
    }),

    getMorePosts() {
      this.page++

      this.actionGetMoreVoorjou(this.page)
        .then((response) => {
          if (response.data.length === 0) {
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
          } else {
            this.posts = store.state.posts
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
          }
        })
    },

    getPosts() {
      this.loading = true
      this.actionGetVoorjou().then(() => {
        this.posts = store.state.posts
        this.loading = false
      })
    }
  },
  components: {
    Card,
    Preloader,
    InfiniteLoading
  },
  created() {
    this.getPosts()
  }
}
