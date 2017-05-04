<template>
  <div class="page--login">
    <div class="login-container">
      <img class="logo" src="./../../assets/images/logo/white.svg">

      <div class="alert alert-danger" v-if="error">
        <p>{{ error }}</p>
      </div>

      <input
        type="text"
        placeholder="E-mail"
        v-model="email">
      <input
        type="password"
        placeholder="Password"
        v-model="password">
      <button class="btn" v-on:click="login()">Inloggen</button>
    </div>
  </div>
</template>
<script src="./Login.vue.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Login.vue.scss"></style>
