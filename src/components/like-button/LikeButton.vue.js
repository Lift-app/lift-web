import store from '@/store'
import { mapActions } from 'vuex'

export default {
  name: 'like-button',
  props: {
    data: {},
    type: String,
    dark: Boolean
  },
  data() {
    return {
      loading: false
    }
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
      if (this.loading) {
        return
      }

      if (this.data.liked) {
        store.commit('unlike', [this.data.id, this.type])
        this.actionUnlike([this.data.id, this.type])
          .then(() => {
            this.loading = false
          })
      } else {
        store.commit('like', [this.data.id, this.type])
        this.actionLike([this.data.id, this.type])
          .then(() => {
            this.loading = false
          })
      }
    },

  }
}
