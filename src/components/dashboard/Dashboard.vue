<template>
  <div class="component--dashboard">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="post in posts">
        <span>{{ post.author }} - {{ post.timestamp }}</span>
        <h2>{{ post.question }}</h2>
      </li>
    </ul>
    <button @click="getPosts">Load posts</button>
  </div>
</template>

<script src="./Dashboard.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Dashboard.vue.scss"></style>
