import store from '@/store'
import router from '@/router'
import { mapActions } from 'vuex'

import Card from '@/components/card/Card'
import Preloader from '@/components/preloader/Preloader'
import InfiniteLoading from 'vue-infinite-loading'

export default {
  name: 'category-posts',
  data() {
    return {
      category: {},
      posts: {},
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
      actionGetPosts: 'getPosts',
      actionGetCategory: 'getCategory',
      actionGetMorePosts: 'getMorePosts'
    }),

    goBack() {
      router.go(-1)
    },

    normalizedCategory(name = "") {
      return name.toLowerCase().replace(/\s/g, '-')
    },

    getMorePosts() {
      this.page++

      this.actionGetMorePosts([this.page, this.category.id])
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

      this.actionGetPosts(this.category.id)
        .then(() => {
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
  beforeMount() {
    this.actionGetCategory(this.$route.params.category)
      .then((category) => {
        this.category = category
        this.getPosts()
      })
      .catch(_error => router.push({name: '404'}))
  }
}
