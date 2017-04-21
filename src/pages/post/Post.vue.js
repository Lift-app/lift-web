import router from '@/router'

export default {
  name: 'post',
  data () {
    return {
      post_data: {
        id: Number,
        user: { username: null, id: 0 },
        updated_at: null,
        is_locked: false,
        created_at: null,
        category: { name: null, id: 4, description: null },
        body: null
      }
    }
  },
  methods: {

    fetchData() {
      this.post_data = this.$route.params.post_data
    },

    close() {
      router.go(-1)
    }
  },
  created() {
    this.fetchData()
  }
}