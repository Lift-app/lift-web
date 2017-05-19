<template>
  <div class="page--login">

    <router-view></router-view>

    <div class="login-container">
      <img class="logo" src="./../../assets/images/logo/white.svg">
      <h3 class="slogan">Dé online gemeenschap voor Wajongers</h3>
      <div class="login-type-buttons">
        <button class="btn social-btn fb-btn"><span><img src="../../assets/images/icons/facebook-lift.svg" alt="Inloggen met Facebook"> Inloggen met Facebook</span></button>
        <button class="btn social-btn g-btn"><img src="../../assets/images/icons/google-lift.svg" alt="Inloggen met Google"><span>Inloggen met Google</span></button>
        <button class="btn sign-in-button" @click="loginWithEmail"><span>Inloggen met emailadres</span></button>
      </div>
    </div>
  </div>
</template>
<script src="./Login.vue.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Login.vue.scss"></style>
