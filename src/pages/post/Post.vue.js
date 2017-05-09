import router from '@/router'
import store from '@/store'
import { mapActions } from 'vuex'

export default {
  name: 'post',
  data () {
    return {
      post: {
        user: {
          'username': '',
          'id': 0
        },
        'updated_at': '',
        'is_locked': false,
        'id': 0,
        'created_at': '',
        'category': {
          'name': '',
          'id': 0,
        },
        'body': '',
        'likes': 0,
        'liked': false
      },
      loading: false,
      topOffset: 0
    }
  },
  methods: {
    ...mapActions({
      actionGetPost: 'getPost',
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

    close() {
      router.push({name: 'Home'})
    },

    loadPost() {
      this.loading = true
      this.actionGetPost(this.$route.params.id)
        .then(() => {
          this.post = store.state.post
          console.log(this.post)
          this.loading = false
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
