import store from '@/store'
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
            store.commit('unlikePost', this.post.id)
          })
      } else {
        this.actionLikePost(this.post.id)
          .then(() => {
            store.commit('likePost', this.post.id)
          })
      }
    },

  }
}
