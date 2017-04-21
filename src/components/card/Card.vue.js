import router from '@/router'

import Post from '@/pages/post/Post'

export default {
  name: 'card',
  props: {
    post_data: {}
  },
  computed: {
    normalizedCategory() {
      return this.post_data.category.name.toLowerCase().replace(/\s/g, '-');
    }
  },
  methods: {
    openPost() {
      router.push({
        name: 'Post',
        params: {
          id: this.post_data.id,
          post_data: this.post_data
        }
      })
    }
  }
}
