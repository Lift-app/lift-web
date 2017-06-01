import router from '@/router'
import store from '@/store'
import { mapActions } from 'vuex'
import vSelect from 'vue-select'

export default {
  name: 'choose-categories',
  data() {
    return {
      isActive: false,
      categories: []
    }
  },
  methods: {
    myFilter: function() {
      this.isActive = !this.isActive;
    },
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
    }
  },
  created() {
    this.getCategories()
  }
}
