import router from '@/router'
import store from '@/store'
import Post from '@/pages/post/Post'

export default {
  name: 'card',
  props: {
    post_data: {}
  },
  computed: {

    posts() {
      return store.getters.getPostWithId
    },

    normalizedCategory() {
      return this.post_data.category.name.toLowerCase().replace(/\s/g, '-');
    }
  },
  methods: {
    openPost() {
      router.push({
        name: 'Post',
        params: { id: this.post_data.id }
      })
    }
  }
}
