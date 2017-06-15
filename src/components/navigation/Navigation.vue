<template>
  <nav class="navigation">
    <router-link :to="{ name: 'VoorJou', params: {backRoute: this.$route}}" exact id="feed-nav" :class="$route.name === 'Post' ? 'router-link-active' : ''">Voor jou</router-link>
    <a href="#" id="interests-nav">Populair</a>
    <router-link :to="{name: 'CreatePost', params: {backRoute: this.$route}}" id="add_post-nav">Iets zeggen</router-link>
    <router-link :to="{name: 'Search', params: {backRoute: this.$route}}" id="search-nav">Zoeken</router-link>
    <router-link :to="{name: 'Profile', params: {username: current_user, backRoute: this.$route}}" id="profile-nav">Profiel</router-link>
  </nav>
</template>

<script src="./Navigation.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./Navigation.vue.scss"></style>
