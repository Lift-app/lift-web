import router from '@/router'
import store from '@/store'
import { mapActions } from 'vuex'
import vSelect from 'vue-select'

export default {
  name: 'search',
  data() {
    return {
      keyword: '',
      categories: []
    }
  },
  methods: {
    ...mapActions({
      fetchCategories: 'getCategories'
    }),

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
      router.push({name: 'CategoryPosts', params: {category: lowercaseCategory}})
    }
  },
  created() {
    this.getCategories()
  },
  components: {
    vSelect
  },
  computed: {
    filteredList() {
      return this.categories.filter((category) => {
        return category.name.toLowerCase().includes(this.keyword.toLowerCase())
      })
    }
  }
}
