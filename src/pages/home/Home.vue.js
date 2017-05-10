import store from '@/store'
import { mapActions } from 'vuex'

import Modal from '@/components/modal/Modal'
import Card from '@/components/card/Card'
import Preloader from '@/components/preloader/Preloader'

export default {
  name: 'home',
  data() {
    return {
      postText: '',
      loading: false
    }
  },
  computed: {
    posts() {
      return store.getters.fetchPosts
    }
  },
  methods: {
    ...mapActions({
      actionGetPosts: 'getPosts'
    }),

    getPosts() {
      this.loading = true
      this.actionGetPosts().then(() => {
        this.loading = false
      })
    }
  },
  components: {
    Card,
    Preloader
  },
  created() {
    this.getPosts()
  }
}
