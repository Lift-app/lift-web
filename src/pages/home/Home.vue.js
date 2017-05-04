import store from '@/store'
import { mapActions } from 'vuex'

import Modal from '@/components/modal/Modal'
import Card from '@/components/card/Card'

export default {
  name: 'home',
  data() {
    return {
      postText: '',
      loading: false,
      showModal: false,
      modalData: {
        type: 'default',
        title: 'Modaltitel',
        submit: true,
        submitText: 'Post plaatsen',
        cancel: true,
        cancelText: 'Annuleren'
      }
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
    Modal
  },
  created() {
    this.getPosts()

    this.$on('hideModal', (value) => {
      this.showModal = false
    });
  }
}
