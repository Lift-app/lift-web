<template>
  <div class="page--home">
    <h1>{{ msg }}</h1>

    <h2 v-if="loading" style="background: red">Laden...</h2>

    <router-view></router-view>
    <div class="card-group" v-if="!loading">
      <transition-group name="slide-up">
        <card v-for="post in posts" :key="post.id" :post_data="post"></card>
      </transition-group>
    </div>

    <label for="postText">Stel een vraag
      <input type="text" id="postText" v-model="postText">
    </label>
    <button @click="makePost">Post maken</button>
  </div>
</template>

<script src="./Home.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Home.vue.scss"></style>
