export default {
  name: 'modal',
  props: [
    'show',
    'modalData'
  ],
  data() {
    return {

    }
  },
  methods: {
    hideModal() {
      this.$parent.$emit('hideModal', false)
    },
    submitModal() {
      this.$parent.$emit('submitModal', this.modalData)
      this.hideModal()
    }
  }
}
