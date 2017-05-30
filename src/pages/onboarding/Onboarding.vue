<template>
  <div class="page--onboarding">
    <swiper :options="swiperOption" ref="swiper">
      <swiper-slide class="meet-new-people">
        <header>
          <img class="o-svg onboarding-confetti" data-swiper-parallax="23%" data-swiper-parallax-duration="400" src="../../assets/images/icons/onboarding/onboarding-confetti.svg" alt="confetti">
          <img class="o-svg onboarding-character-1" data-swiper-parallax="-23%" data-swiper-parallax-duration="800" src="../../assets/images/icons/onboarding/onboarding-character-1.svg" alt="character 1">
          <img class="o-svg onboarding-character-2" data-swiper-parallax="23%" data-swiper-parallax-duration="800" src="../../assets/images/icons/onboarding/onboarding-character-2.svg" alt="character 2">
        </header>
        <footer data-swiper-parallax="-23%" data-swiper-parallax-duration="600">
          <h2 class="title">Ontmoet nieuwe mensen</h2>
          <p class="description">Op Lift is iedereen gelijk en kan je mensen helpen door ze te laten meeliften op jouw kennis.</p>
        </footer>
      </swiper-slide>
      <swiper-slide class="get-answers">
        <header>
          <img class="o-svg onboarding-confetti" data-swiper-parallax="-33%" data-swiper-parallax-duration="800" src="../../assets/images/icons/onboarding/onboarding-confetti-2.svg" alt="confetti">
          <img class="o-svg onboarding-phone" data-swiper-parallax="-73%" data-swiper-parallax-duration="1000" src="../../assets/images/icons/onboarding/onboarding-phone.svg" alt="phone">
          <img class="o-svg onboarding-bubble-1" data-swiper-parallax="-25%" data-swiper-parallax-duration="1000" src="../../assets/images/icons/onboarding/onboarding-bubble-1.svg" alt="bubble 1">
          <img class="o-svg onboarding-bubble-2" data-swiper-parallax="25%" data-swiper-parallax-duration="1000" src="../../assets/images/icons/onboarding/onboarding-bubble-2.svg" alt="bubble 2">
        </header>
        <footer data-swiper-parallax="-23%" data-swiper-parallax-duration="600">
          <h2 class="title">Krijg antwoord op vragen</h2>
          <p class="description">Binnen deze gesloten groep kun je veilig zeggen wat je wilt zonder dat buitenstaanders dit kunnen lezen. </p>
        </footer>
      </swiper-slide>
      <swiper-slide class="safe-environment">
        <header>
          <img class="o-svg onboarding-cloud-1" data-swiper-parallax="-25%" data-swiper-parallax-duration="1200" src="../../assets/images/icons/onboarding/onboarding-cloud.svg" alt="cloud">
          <img class="o-svg onboarding-cloud-2" data-swiper-parallax="-55%" data-swiper-parallax-duration="1200" src="../../assets/images/icons/onboarding/onboarding-cloud.svg" alt="cloud">
          <img class="o-svg onboarding-confetti" data-swiper-parallax="-33%" data-swiper-parallax-duration="800" src="../../assets/images/icons/onboarding/onboarding-confetti-3.svg" alt="confetti">
          <img class="o-svg onboarding-lock" data-swiper-parallax="-73%" data-swiper-parallax-duration="1000" src="../../assets/images/icons/onboarding/onboarding-lock.svg" alt="lock">
        </header>
        <footer data-swiper-parallax="-23%" data-swiper-parallax-duration="600">
          <h2 class="title">Veilige omgeving</h2>
          <p class="description">Alles wat jij plaatst op Lift wordt veilig gehouden door ons. Wij zullen jouw gegevens nooit verkopen of vrijgeven aan derde partijen.</p>
        </footer>
      </swiper-slide>
      <swiper-slide class="selected-for-you">
        <header>
          <img class="o-svg onboarding-confetti" data-swiper-parallax="33%" data-swiper-parallax-duration="800" src="../../assets/images/icons/onboarding/onboarding-confetti-4.svg" alt="confetti">
          <img class="o-svg onboarding-star" data-swiper-parallax="23%" data-swiper-parallax-duration="600" src="../../assets/images/icons/onboarding/onboarding-star.svg" alt="world">
          <img class="o-svg onboarding-star-small-1" data-swiper-parallax="-23%" data-swiper-parallax-duration="1000" src="../../assets/images/icons/onboarding/onboarding-star-small-1.svg" alt="lock">
          <img class="o-svg onboarding-star-small-2" data-swiper-parallax="23%" data-swiper-parallax-duration="800" src="../../assets/images/icons/onboarding/onboarding-star-small-2.svg" alt="lock">
        </header>
        <footer data-swiper-parallax="-23%" data-swiper-parallax-duration="600">
          <h2 class="title">Geselecteerd voor jou omgeving</h2>
          <p class="description">Gebaseerd op de categorieen waar jij in geintresseerd bent, maken wij een speciale ‘voor jou’ feed!</p>
        </footer>
      </swiper-slide>

      <div class="swiper-pagination"  slot="pagination"></div>
      <button class="swiper-button-prev" slot="button-prev"><img src="../../assets/images/icons/onboarding/onboarding-arrow-prev.svg" alt="Vorige"></button>
      <button class="swiper-button-next" slot="button-next"><img src="../../assets/images/icons/onboarding/onboarding-arrow-next.svg" alt="Vorige"></button>
      <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>

    <svg class="onboarding-background-container" viewBox="0 0 530 561" xmlns="http://www.w3.org/2000/svg" width="100%" height="50%" preserveAspectRatio="none">
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
    <img class="o-svg onboarding-world" data-swiper-parallax="-33%" data-swiper-parallax-duration="800" src="../../assets/images/icons/onboarding/onboarding-world.svg" alt="world">
    <button class="swiper-button-finish">Kies jouw interesses<img src="../../assets/images/icons/onboarding/onboarding-arrow-next-white.svg" alt="Voltooien"></button>
  </div>
</template>

<script src="./Onboarding.vue.js"></script>

<style lang="scss" src="./Onboarding.vue.scss"></style>
