import router from '@/router'
import store from '@/store'
import { mapActions } from 'vuex'
import vSelect from 'vue-select'
import Vue from 'vue'

export default {
  name: 'choose-categories',
  data() {
    return {
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

    updateActiveCategory(category, index) {
      category.active = !category.active
      Vue.set(this.categories, index, category)
    },

    getCategories() {
      this.fetchCategories()
        .then(() => {
          this.categories = store.state.categories

          this.categories.forEach(category => category.active = false)
        })
    }
  },
  created() {
    this.getCategories()
  },

  computed: {
    filteredList() {
      return this.categories.filter((category) => {
        return category.active === true
      })
    }
  }
}
