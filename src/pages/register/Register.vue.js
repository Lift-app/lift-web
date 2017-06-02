import router from '@/router'

export default {
  name: 'register',
  methods: {
    ChooseCategories() {
      router.push({name: 'ChooseCategories'})
    }
  }
}
