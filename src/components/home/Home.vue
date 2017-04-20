<template>
  <div class="component--home">
    <h1>{{ msg }}</h1>

    <h2 v-if="loading">Laden...</h2>

    <transition-group name="list" tag="span">
      <post v-for="post in posts" :key="post.id" :post-data="post"></post>
    </transition-group>

    <label for="postText">Stel een vraag
      <input type="text" id="postText" v-model="postText">
    </label>
    <button @click="makePost">Post maken</button>
  </div>
</template>

<script src="./Home.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Home.vue.scss"></style>
