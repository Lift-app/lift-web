
export default {
  name: 'card',
  props: {
    postData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  },
  computed: {
    normalizedCategory() {
      return this.postData.category.name.toLowerCase().replace(/\s/g, '-');
    }
  },
  methods: {
    openPost() {
      console.log(this.postData.id)
    }
  }
}
