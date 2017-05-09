import { mapActions } from 'vuex'

export default {
  name: 'like-button',
  props: {
    post: {},
    dark: Boolean
  },
  methods: {
    ...mapActions({
      actionLikePost: 'likePost',
      actionUnlikePost: 'unlikePost'
    }),
    toggleLike() {
      if (this.post.liked) {
        this.actionUnlikePost(this.post.id)
          .then(() => {
            this.post.likes--
            this.post.liked = false
          })
      } else {
        this.actionLikePost(this.post.id)
          .then(() => {
            this.post.likes++
            this.post.liked = true
          })
      }
    },

  }
}
