<template>
  <nav class="navigation">
    <router-link :to="{ name: 'Home' }" exact id="feed-nav">Home</router-link>
    <a href="#" id="interests-nav">Interesses</a>
    <router-link :to="{name: 'CreatePost'}" id="add_post-nav">Iets zeggen</router-link>
    <a href="#" id="search-nav">Zoeken</a>
    <router-link :to="{name: 'Login'}" id="profile-nav">Account</router-link>
  </nav>
</template>

<script src="./Navigation.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./Navigation.vue.scss"></style>
