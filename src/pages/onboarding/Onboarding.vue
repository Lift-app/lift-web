<template>
  <div class="page--onboarding">
    <swiper :options="swiperOption" ref="swiper">
      <swiper-slide class="first">
        <img class="background" src="../../assets/images/icons/onboarding/onboarding-bg.svg" alt="achtergrond">
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
      <button class="swiper-button-prev" slot="button-prev"><img src="../../assets/images/icons/onboarding/onboarding-arrow-prev.svg" alt="Vorige"></button>
      <button class="swiper-button-next" slot="button-next"><img src="../../assets/images/icons/onboarding/onboarding-arrow-next.svg" alt="Vorige"></button>
      <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
  </div>
</template>

<script src="./Onboarding.vue.js"></script>

<style lang="scss" src="./Onboarding.vue.scss"></style>
