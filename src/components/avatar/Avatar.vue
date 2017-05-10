<template>
  <div class="avatar">
    <img class="avatar anonymous" src="../../assets/images/icons/anonymous.svg" alt="Anonieme profielfoto" v-if="post.anonymous">
    <img class="avatar" :src="post.user.avatar.thumbnail" :alt="post.user.username + '\'s profielfoto'" v-else-if="post.user.avatar">
    <!-- TODO: default avatar url goes here \/ -->
    <img class="avatar" src="../../assets/images/icons/anonymous.svg" :alt="post.user.username + '\'s profielfoto'" v-else>
  </div>
</template>

<script src="./Avatar.vue.js"></script>
