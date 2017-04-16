
export default {
  name: 'post',
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
  }
}
