<template>
  <div class="post" :class="normalizedCategory">
    <span>{{ postData.user.username }} - {{ postData.category.name }}</span>
    <h2 class="title">{{ postData.body }}</h2>
  </div>
</template>

<script src="./Post.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./Post.vue.scss"></style>
