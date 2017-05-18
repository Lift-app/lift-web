<template>
  <div class="page--search">
    <div class="search-container">
      <img class="logo" src="./../../assets/images/logo/white.svg">

      <div class="alert alert-danger" v-if="error">
        <p>{{ error }}</p>
      </div>

      <div class="inputs">
        <input
                type="email"
                placeholder="E-mail"
                v-model="credentials.email">
        <input
                type="password"
                placeholder="Wachtwoord"
                v-model="credentials.password" @keyup.enter="search">
        <button class="btn" @click="search">Inloggen</button>
      </div>
    </div>
  </div>
</template>
<script src="./search.vue.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./search.vue.scss"></style>
