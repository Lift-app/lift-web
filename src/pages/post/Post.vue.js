import router from '@/router'
import store from '@/store'
import LikeButton from '@/components/like-button/LikeButton'
import Avatar from '@/components/avatar/Avatar'
import { mapActions } from 'vuex'

export default {
  name: 'post',
  data() {
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
      comments: null,
      commentBody: null,
      commentLength: 600,
      loading: false,
      topOffset: 0,
      currentUser: {}
    }
  },
  computed: {
    normalizedCategory() {
      return this.post.category.name.toLowerCase().replace(/\s/g, '-');
    },
    commentsTitle() {
      const comments = this.comments || []
      return comments.length === 1 ? 'reactie' : 'reacties'
    }
  },
  methods: {
    ...mapActions({
      actionGetCurrentUser: 'getCurrentUser',
      actionGetPost: 'getPost',
      actionGetComments: 'getComments',
      actionPlaceComment: 'placeComment'
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


          this.loadComments()
        })
        .catch(() => {
          router.push({name: '404'})
        })

    },

    loadComments() {
      this.actionGetComments(this.$route.params.id)
        .then(() => {
          this.comments = store.state.post.comments
      })
    },

    placeComment() {
      let call_data = {
        id: this.$route.params.id,
        type: 'text',
        body: this.commentBody
      }
      this.actionPlaceComment(call_data)
        .then((response) => {
          console.log('posted')
          this.comments = store.state.post.comments
          this.post.comment_count++
          this.commentBody = ''
          this.$toasted.success('Reactie geplaatst!')

          function scrollTo(){
            let topPos = document.getElementById(`comment-${response.id}`).offsetTop;
            document.getElementById('view').scrollTop = topPos-10;
          }
          scrollTo()
        })
        .catch(() => {
          this.commentBody = ''
          this.$toasted.error('Er ging wat mis. Probeer opnieuw!')
        })
    },

    // Focus and blur functions to hide the navbar
    focusInput(e) {
      e.target.classList.add('focussed')
      document.querySelector('#app').classList.add('nav-hidden')
    },

    blurInput(e) {
      e.target.classList.remove('focussed')
      document.querySelector('#app').classList.remove('nav-hidden')
    },

    commentLengthCount() {
      let length = 600
      this.commentLength = length - this.commentBody.length
    }
  },
  mounted() {
    this.loadPost()
    this.actionGetCurrentUser()
      .then(() => {
        this.currentUser = store.state.user
      })
  },
  watch: {
    '$route' (to, from) {
      this.loadPost()
    }
  },
  components: {
    LikeButton,
    Avatar
  }
}
