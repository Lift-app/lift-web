export default {
  name: 'modal',
  props: [
    'show',
    'modalData'
  ],
  data() {
    return {
      modalData: {
        type: 'default',
        title: '',
        submit: true,
        submitText: '',
        cancel: false,
        cancelText: ''
      }
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
