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
      actionGetPosts: 'getPosts'
    }),

    getPosts() {
      this.loading = true
      this.actionGetPosts().then(() => {
        this.loading = false
      })
    }
  },
  components: {
    Card
  },
  created() {
    this.getPosts()
  }
}
