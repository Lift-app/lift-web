<template>
  <div class="like" :class="dark ? 'dark' : ''">
    <button class="like-button" v-on:click.stop="toggleLike()" :aria-label="like_message" :class="data.liked ? 'liked' : ''">
      <img v-if="dark" src="../../assets/images/icons/thumb-icon-dark.svg" alt="Vind ik leuk!">
      <img v-if="!dark" src="../../assets/images/icons/thumb-icon-white.svg" alt="Vind ik leuk!">
    </button>
    <span class="count like-count" v-bind:aria-label="data.like_count" v-if="data.like_count > 0">{{ data.like_count }}</span>
  </div>
</template>

<script src="./LikeButton.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src="./LikeButton.vue.scss"></style>
