<template>
  <div class="page--login">
  {{ type }}
    <div class="login-container" v-if="type === 'email'">
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
      </div>
    </div>
    <div v-else>
    wwwwwwwwww
    </div>
  </div>
</template>
<script src="./LoginType.vue.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./LoginType.vue.scss"></style>
