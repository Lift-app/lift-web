<template>
  <nav class="navigation">
    <router-link :to="{name: 'VoorJou'}" exact id="feed-nav" :class="$route.name === 'Post' ? 'router-link-active' : ''">Voor jou</router-link>
    <router-link :to="{name: 'Popular'}" id="interests-nav">Populair</router-link>
    <router-link :to="{name: 'CreatePost'}" id="add_post-nav">Iets zeggen</router-link>
    <router-link :to="{name: 'Search'}" id="search-nav">Zoeken</router-link>
    <router-link :to="{name: 'Profile', params: {username: current_user}}" id="profile-nav">Profiel</router-link>
  </nav>
</template>

<script src="./Navigation.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./Navigation.vue.scss"></style>
