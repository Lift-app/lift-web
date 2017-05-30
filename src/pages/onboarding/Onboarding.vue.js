import { swiper, swiperSlide } from 'vue-awesome-swiper'
import router from '@/router'

export default {
  name: 'intro',
  data () {
    const vue = this
    return {
      colors: ['#C783FF', '#50E3C2', '#90DBFF', '#FF5537'],
      swiperOption: {
        notNextTick: true,
        grabCursor: true,
        setWrapperSize: true,
        parallax: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        mousewheelControl: true,
        onTransitionStart(swiper) {
          vue.changeThemeColor(swiper)
        },
        onTransitionEnd(swiper) {
          vue.handleSlideChange(swiper)
        }
      }
    }
  },
  computed: {
    onboardingBgElem() {
      return document.querySelector('.onboarding-background')
    },
    onboardingWorldElem() {
      return document.querySelector('.onboarding-world')
    },
    onboardingPaginationElem() {
      return document.querySelector('.swiper-pagination')
    },
    onboardingBulletElems() {
      return document.querySelectorAll('.swiper-pagination-bullet')
    },
    onboardingFinishElem() {
      return document.querySelector('.swiper-button-finish')
    }
  },
  methods: {

    handleSlideChange(swiper) {
      switch(swiper.activeIndex) {
        case 2:
          this.onboardingWorldElem.classList.add('active')
          this.onboardingFinishElem.classList.remove('active')
          this.onboardingPaginationElem.classList.remove('hidden')
          break
        case 3:
          this.onboardingWorldElem.classList.remove('active')
          this.onboardingPaginationElem.classList.add('hidden')
          this.onboardingFinishElem.classList.add('active')
          break
        case 4:
          this.onboardingPaginationElem.classList.add('hidden')
          break
        default:
          this.onboardingWorldElem.classList.remove('active')
          this.onboardingPaginationElem.classList.remove('hidden')
          this.onboardingFinishElem.classList.remove('active')
      }
    },

    changeThemeColor(swiper) {
      for (let i = 0; i < this.onboardingBulletElems.length; i++) {
        this.onboardingBulletElems[i].style.backgroundColor = '#849199' // default background color ($regent)
      }
      this.onboardingBgElem.style.fill = this.colors[swiper.activeIndex]
      document.querySelector('.swiper-pagination-bullet-active').style.backgroundColor = this.colors[swiper.activeIndex]
      setTimeout(() => {
        document.querySelector('meta[name=theme-color]').setAttribute('content', this.colors[swiper.activeIndex])
      }, 120)
    },

    endOnboarding() {
      localStorage.setItem('onboarded', true)
      router.push({name: 'VoorJou'})
    }
  },
  mounted() {
    document.querySelector('#app').classList.add('nav-hidden')
    document.querySelector('meta[name=theme-color]').setAttribute('content', this.colors[0])
  },
  beforeDestroy() {
    document.querySelector('#app').classList.remove('nav-hidden')
  },
  components: {
    swiper,
    swiperSlide
  }
}
