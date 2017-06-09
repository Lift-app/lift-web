<template>
  <div class="page--login">
    <div class="login-container">
      <img class="logo" src="../../../assets/images/logo/white.svg">
      <h3 class="slogan">Dé online gemeenschap voor Wajongers</h3>
      <div class="login-email-fields">
        <input
          type="email"
          placeholder="E-mail"
          v-model="credentials.email">
        <input
          type="password"
          placeholder="Wachtwoord"
          v-model="credentials.password" @keyup.enter="login">

        <button class="btn" @click="login">Inloggen</button>
        <div class="login-options">
          <router-link class="no-account" :to="{name: 'Register'}"><small>Ik heb nog geen account</small></router-link>
          <a href="#"><small>Wachtwoord vergeten?</small></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./LoginEmail.vue.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./LoginEmail.vue.scss"></style>
