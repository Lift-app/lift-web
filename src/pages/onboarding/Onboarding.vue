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
          <h2 class="title">Geselecteerd voor jou</h2>
          <p class="description">Gebaseerd op de categorieen waar jij in geïnteresseerd bent, maken wij een speciale ‘voor jou’ feed!</p>
        </footer>
      </swiper-slide>

      <div class="swiper-pagination"  slot="pagination"></div>
      <button class="swiper-button-prev" slot="button-prev"><img src="../../assets/images/icons/onboarding/onboarding-arrow-prev.svg" alt="Vorige"></button>
      <button class="swiper-button-next" slot="button-next"><img src="../../assets/images/icons/onboarding/onboarding-arrow-next.svg" alt="Vorige"></button>
    </swiper>

    <svg class="onboarding-background-container" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%"
    viewBox="0 0 100 100"
    preserveAspectRatio="none">
      <g class="onboarding-background">
        <path d="M0 0 H 100 V 81 H 0 L 0 0"/>
        <path d="M-5,80 Q50,120 105,80" />
      </g>
    </svg>

    <img class="onboarding-background-circle" src="../../assets/images/icons/onboarding/onboarding-bg-circle.svg" alt="bg">
    <img class="o-svg onboarding-world" data-swiper-parallax="-33%" data-swiper-parallax-duration="800" src="../../assets/images/icons/onboarding/onboarding-world.svg" alt="world">
    <button @click="endOnboarding" class="swiper-button-skip"><div>
      <span>overslaan</span><img src="../../assets/images/icons/onboarding/onboarding-arrow-skip.svg" alt="Overslaan">
    </div></button>
    <button @click="endOnboarding" class="swiper-button-finish"><div>
      <span>Kies jouw interesses</span><img src="../../assets/images/icons/onboarding/onboarding-arrow-next-white.svg" alt="Voltooien">
    </div></button>
  </div>
</template>

<script src="./Onboarding.vue.js"></script>

<style lang="scss" src="./Onboarding.vue.scss"></style>
