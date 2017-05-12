import router from '@/router'
import store from '@/store'
import LikeButton from '@/components/like-button/LikeButton'
import Avatar from '@/components/avatar/Avatar'
import { mapActions } from 'vuex'

export default {
  name: 'post',
  components: {
    LikeButton,
    Avatar
  },
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
        'created_at': '0000-01-01T00:00:00',
        'category': {
          'name': '',
          'id': 0,
        },
        'body': '',
        'like_count': 0,
        'liked': false
      },
      loading: false,
      topOffset: 0
    }
  },
  computed: {
    normalizedCategory() {
      return this.post.category.name.toLowerCase().replace(/\s/g, '-');
    }
  },
  methods: {
    ...mapActions({
      actionGetPost: 'getPost'
    }),

    close() {
      router.push({name: 'Home'})
    },

    loadPost() {
      this.loading = true
      this.actionGetPost(this.$route.params.id)
        .then(() => {
          this.post = store.state.post
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
