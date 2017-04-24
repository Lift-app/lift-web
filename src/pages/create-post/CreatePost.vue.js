import store from '@/store'
import { mapActions } from 'vuex'

export default {
  name: 'createPost',
  data () {
    return {
      body: undefined,
      category: 0,
      anonymity: false,
      categories: [],
      post_type: 'choose',
    }
  },
  computed: {

  },
  methods: {
    ...mapActions({
      fetchCategories: 'getCategories',
      placePost: 'placePost'
    }),

    getCategories() {
      this.fetchCategories()
        .then(() => {
          this.categories = store.state.categories
          // add a choose a category option
          this.categories.unshift({name: 'Kies een categorie...', id: 0, disabled: true})
        })
    },

    makePost() {
      this.placePost({
        user_id: 1,
        category_id: this.post.category,
        body: this.post.body
      })
        .then(() => {

        })
        .catch((error) => {
          console.log(error.response.data.errors)
        })
    },

    // set the post type to given name, and clean this.post if type is different then current type
    setPostType(type) {
      if(type !== this.post_type) {this.post = {}}
      this.post_type = type
    }
  },
  created() {
    this.getCategories()
  }
}