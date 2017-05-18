<template>
  <div class="page--intro">
    <swiper :options="swiperOption" ref="swiper">
      <swiper-slide class="first">
        slide
      </swiper-slide>
      <swiper-slide>
        slide
      </swiper-slide>
      <swiper-slide>
        slide
      </swiper-slide>
      <swiper-slide>
        slide
      </swiper-slide>
      <swiper-slide>
        slide
      </swiper-slide>
      <swiper-slide>
        slide
      </swiper-slide>
      <swiper-slide>
        slide
      </swiper-slide>

      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script src="./Intro.vue.js"></script>

<style scoped lang="scss" src="./Intro.vue.scss"></style>
