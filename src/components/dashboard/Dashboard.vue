<template>
  <div class="component--dashboard">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="post in posts">
        <span>{{ post.user.username }} - {{ post.category.name }}</span>
        <h2>{{ post.body }}</h2>
      </li>
    </ul>
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
