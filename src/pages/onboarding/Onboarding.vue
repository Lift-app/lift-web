<template>
  <div class="page--onboarding">
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

      <div class="swiper-pagination"  slot="pagination"></div>
      <button class="swiper-button-prev" slot="button-prev"><img src="../../assets/images/icons/onboarding/onboarding-arrow-prev.svg" alt="Vorige"></button>
      <button class="swiper-button-next" slot="button-next"><img src="../../assets/images/icons/onboarding/onboarding-arrow-next.svg" alt="Vorige"></button>
      <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>

    <svg class="onboarding-background-container" viewBox="0 0 530 561" xmlns="http://www.w3.org/2000/svg" width="100%" height="470" preserveAspectRatio="none">
      <defs>
        <rect id="path-1" x="0" y="0" width="530" height="561"></rect>
      </defs>
      <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <mask id="mask-2">
          <use xlink:href="#path-1"></use>
        </mask>
        <use id="Rectangle-12" fill="transparent" xlink:href="#path-1"></use>
        <circle class="onboarding-background" fill="#50E3C2" mask="url(#mask-2)" cx="267" cy="127" r="404"></circle>
      </g>
    </svg>

    <img class="onboarding-background-circle" src="../../assets/images/icons/onboarding/onboarding-bg-circle.svg" alt="bg">
  </div>
</template>

<script src="./Onboarding.vue.js"></script>

<style lang="scss" src="./Onboarding.vue.scss"></style>
