import store from '@/store'
import { mapActions } from 'vuex'

export default {
  name: 'like-button',
  props: {
    data: {},
    type: String,
    dark: Boolean
  },
  computed: {
    like_message() {
      const typeName = this.type === 'posts' ? 'Vraag' : 'Reactie'
      return `${typeName} leuk vinden`
    }
  },
  methods: {
    ...mapActions({
      actionLike: 'like',
      actionUnlike: 'unlike'
    }),
    toggleLike() {
      if (this.data.liked) {
        this.actionUnlike([this.data.id, this.type])
          .then(() => {
            store.commit('unlike', [this.data.id, this.type])
          })
      } else {
        this.actionLike([this.data.id, this.type])
          .then(() => {
            store.commit('like', [this.data.id, this.type])
          })
      }
    },

  }
}
