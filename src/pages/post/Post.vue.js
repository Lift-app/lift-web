import router from '@/router'
import store from '@/store'
import { mapActions } from 'vuex'

export default {
  name: 'post',
  data () {
    return {
      post: undefined
    }
  },
  methods: {
    ...mapActions({
      actionGetPost: 'getPost'
    }),

    close() {
      router.go(-1)
    },

    loadPost() {
      this.actionGetPost(this.$route.params.id)
        .then(() => {
          this.post = store.state.post
        })
        .catch(() => {
          router.push({name: '404'})
        })

    },
  },
  mounted() {
    this.loadPost()
  },
  watch: {
    '$route' (to, from) {
      this.loadPost()
    }
  }
}