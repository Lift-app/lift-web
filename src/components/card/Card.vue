<template>
  <div class="card" :class="normalizedCategory" @click="openPost">
    <span>{{ postData.user.username }} - {{ postData.category.name }}</span>
    <h2 class="title">{{ postData.body }}</h2>
  </div>
</template>

<script src="Card.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./Card.vue.scss"></style>
