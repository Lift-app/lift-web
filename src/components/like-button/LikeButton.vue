<template>
  <div class="like">
    <button class="like-button" v-on:click.stop="toggleLike()" :aria-label="like_message">
      <img v-if="dark" src="../../assets/images/icons/heart-dark.svg" alt="Vind ik leuk!">
      <img v-if="!dark" src="../../assets/images/icons/heart-white.svg" alt="Vind ik leuk!">
    </button>
    <span class="count like-count" v-bind:aria-label="data.like_count">{{ data.like_count }}</span>
  </div>
</template>

<script src="./LikeButton.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src="./LikeButton.vue.scss"></style>
