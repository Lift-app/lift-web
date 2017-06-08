import router from '@/router'
import Post from '@/pages/post/Post'
import LikeButton from '@/components/like-button/LikeButton'
import Avatar from '@/components/avatar/Avatar'

export default {
  name: 'card',
  components: {
    LikeButton,
    Avatar
  },
  props: {
    post: {},
    componentName: {
      type: String,
      default: 'Post'
    }
  },
  computed: {
    normalizedCategory() {
      return this.post.category.name.toLowerCase().replace(/\s/g, '-')
    }
  },
  methods: {
    openPost() {
      router.push({
        name: this.componentName,
        params: { id: this.post.id }
      })
    },
    haltAction(e) {
      e.stopImmediatePropagation()
    }
  }
}
