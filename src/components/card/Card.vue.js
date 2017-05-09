import router from '@/router'
import Post from '@/pages/post/Post'
import LikeButton from '@/components/like-button/LikeButton'

export default {
  name: 'card',
  components: {
    LikeButton
  },
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
        params: { id: this.post_data.id }
      })
    }
  }
}
