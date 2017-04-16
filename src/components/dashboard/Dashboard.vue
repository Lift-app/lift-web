<template>
  <div class="component--dashboard">
    <h1>{{ msg }}</h1>

    <post v-for="post in posts" :key="post.id" :post-data="post"></post>

    <button @click="getPosts">Load posts</button>
    <label for="postText">Stel een vraag
      <input type="text" id="postText" v-model="postText">
    </label>
    <button @click="makePost">Post maken</button>
  </div>
</template>

<script src="./Dashboard.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Dashboard.vue.scss"></style>
