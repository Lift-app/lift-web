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
      user: null,
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
      actionGetMorePosts: 'getMorePosts',
      actionUpdateUser: 'updateUser',
      actionGetCurrentUser: 'getCurrentUser'
    }),

    goBack() {
      let backRoute = this.$route.params.backRoute
      if (backRoute) {
        router.push({
          name: backRoute.name,
          params: backRoute.params
        })
      } else {
        router.push({name: 'VoorJou'})
      }
    },

    normalizedCategory(name = "") {
      return name.toLowerCase().replace(/\s/g, '-')
    },

    toggleInterest() {
      if (this.category.is_interested) {
        this.$toasted.error(`Je bent nu niet meer geïnteresseerd in ${this.category.name.toLowerCase()}!`)

        this.category.is_interested = false
        const index = this.user.interests.findIndex(category => category.id == this.category.id)

        if (index !== -1) {
          this.user.interests.splice(index, 1)
        }
      } else {
        this.$toasted.success(`Je bent nu geïnteresseerd in ${this.category.name.toLowerCase()}!`)

        this.category.is_interested = true
        this.user.interests.push({id: this.category.id})
      }

      const interests = this.user.interests.map(category => category.id)

      this.actionUpdateUser({interests: interests})
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
    this.actionGetCurrentUser()
      .then(() => {
        this.user = store.state.user
      })
    this.actionGetCategory(this.$route.params.category)
      .then((category) => {
        this.category = category
        this.getPosts()
      })
      .catch(_error => router.push({name: '404'}))
  }
}
