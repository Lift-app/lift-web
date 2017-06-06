import router from '@/router'

export default {
  name: 'register',
  mounted() {
    document.querySelector('#app').classList.add('nav-hidden')
  },
  beforeDestroy() {
    document.querySelector('#app').classList.remove('nav-hidden')
  },
  methods: {
    ChooseCategories() {
      router.push({name: 'ChooseCategories'})
    }
  }
}
