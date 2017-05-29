import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'intro',
  data () {
    const vue = this
    return {
      colors: ['#C783FF', '#50E3C2', '#90DBFF', '#FF5537'],
      swiperOption: {
        notNextTick: true,
        grabCursor : true,
        setWrapperSize :true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        mousewheelControl : true,
        onTransitionStart(swiper) {
          vue.changeThemeColor(swiper)
        }
      }
    }
  },
  computed: {
    onboardingBgElem() {
      return document.querySelector('.onboarding-background')
    },
    onboardingBulletElems() {
      return document.querySelectorAll('.swiper-pagination-bullet')
    }
  },
  methods: {
    changeThemeColor(swiper) {
      for (let i = 0; i < this.onboardingBulletElems.length; i++) {
        this.onboardingBulletElems[i].style.backgroundColor = '#849199' // default background color ($regent)
      }
      this.onboardingBgElem.style.fill = this.colors[swiper.activeIndex]
      document.querySelector('.swiper-pagination-bullet-active').style.backgroundColor = this.colors[swiper.activeIndex]
    }
  },
  mounted() {
    document.querySelector('#app').classList.add('nav-hidden')
  },
  beforeDestroy() {
    document.querySelector('#app').classList.remove('nav-hidden')
  },
  components: {
    swiper,
    swiperSlide
  }
}
