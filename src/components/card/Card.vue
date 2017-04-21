<template>
  <div class="card" :class="normalizedCategory" @click="openPost">
    <span>{{ post_data.user.username }} - {{ post_data.category.name }}</span>
    <h2 class="title">{{ post_data.body }}</h2>
  </div>
</template>

<script src="./Card.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./Card.vue.scss"></style>
