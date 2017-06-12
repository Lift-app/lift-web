import router from '@/router'
import store from '@/store'
import { mapActions } from 'vuex'
import vSelect from 'vue-select'
import Card from '@/components/card/Card'

export default {
  name: 'search',
  data() {
    return {
      keyword: '',
      categories: [],
      results: [],
      searching: false
    }
  },
  methods: {
    ...mapActions({
      fetchCategories: 'getCategories',
      search: 'search'
    }),

    _debounce(callback, wait, context = this) {
      let timeout = null
      let callbackArgs = null

      const later = () => callback.apply(context, callbackArgs)

      return function() {
        callbackArgs = arguments
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
      }
    },

    doSearch() {
      let query = encodeURI(this.keyword).toLowerCase()
      this.searching = true

      if (query.length !== 0) {
        (this._debounce(() => {

          this.search(query).then((response) => {
            this.results = response.data.data
            this.searching = false
          })

        }, 400))()
      } else {
        this.results = []
        this.searching = false
      }
    },

    normalizedCategory(name) {
      return name.toLowerCase().replace(/\s/g, '-')
    },

    getCategories() {
      this.fetchCategories()
        .then(() => {
          this.categories = store.state.categories
        })
    },

    goToCategory(category) {
      const lowercaseCategory = category.toLowerCase()
      router.push({
        name: 'CategoryPosts',
        params: {
          category: lowercaseCategory,
          backRoute: this.$route
        }
      })
    }
  },
  created() {
    this.getCategories()
  },
  components: {
    vSelect,
    Card
  },
  computed: {
    filteredList() {
      return this.categories.filter((category) => {
        return category.name.toLowerCase().includes(this.keyword.toLowerCase())
      })
    }
  }
}
