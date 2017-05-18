import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'intro',
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        grabCursor : true,
        setWrapperSize :true,
        autoHeight: true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        scrollbar:'.swiper-scrollbar',
        mousewheelControl : true,
        onTransitionStart(swiper){
          console.log(swiper)
        }
      }
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
