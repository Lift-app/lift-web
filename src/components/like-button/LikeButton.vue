<template>
  <div>
    <button class="like" v-on:click="toggleLike()" aria-label="Vraag leuk vinden">
      <img v-if="dark" src="../../assets/images/icons/heart-dark.svg" alt="Vind ik leuk!">
      <img v-if="!dark" src="../../assets/images/icons/heart-white.svg" alt="Vind ik leuk!">
    </button>
    <span class="count like-count" v-bind:aria-label="post.likes">{{ post.likes }}</span>
  </div>
</template>

<script src="./LikeButton.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src="./LikeButton.vue.scss"></style>
