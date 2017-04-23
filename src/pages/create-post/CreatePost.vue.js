import { mapActions } from 'vuex'

export default {
  name: 'createPost',
  data () {
    return {
      post: {},
      post_type: 'choose'
    }
  },
  computed: {

  },
  methods: {
    ...mapActions({
      placePost: 'placePost'
    }),

    makePost() {
      this.placePost({
        user_id: 1,
        category_id: 1,
        body: this.postText
      })
        .then(() => {

        })
        .catch((error) => {
          console.log(error.response.data.errors)
        })
    },

    setPostType(type) {
      this.post = {}
      this.post_type = type
    }
  }
}