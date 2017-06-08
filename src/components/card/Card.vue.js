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
        params: {
          id: this.post.id,
          backRoute: this.$route
        }
      })
    },

    goToUser(e) {
      e.stopImmediatePropagation()
      if (this.post.user) {
        router.push({
          name: 'Profile',
          params: {
            username: this.post.user.username
          }
        })
      } else {
        console.log('User is anonymous, cannot navigate to profile!')
      }
    },

    goToCategory(e) {
      e.stopImmediatePropagation()
      const lowercaseCategory = this.post.category.name.toLowerCase()
      router.push({
        name: 'CategoryPosts',
        params: {
          category: lowercaseCategory,
          backRoute: this.$route
        }
      })
    },
    haltAction(e) {
      e.stopImmediatePropagation()
    }
  }
}
