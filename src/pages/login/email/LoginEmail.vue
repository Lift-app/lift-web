<template>
  <div class="page--login">
    <div class="login-container">
      <img class="logo" src="../../../assets/images/logo/white.svg">

      <div class="inputs">
        <input
          type="email"
          placeholder="E-mail"
          v-model="credentials.email">
        <input
          type="password"
          placeholder="Wachtwoord"
          v-model="credentials.password" @keyup.enter="login">

        <button class="btn" @click="login">Inloggen</button>
        <div>
          <a href="#">Heb je al een account?</a>
          <a href="#">Wachtwoord vergeten?</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./LoginEmail.vue.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./LoginEmail.vue.scss"></style>
