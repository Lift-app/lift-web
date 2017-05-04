<template>
  <div class="page--home">
    <router-view></router-view>

    <h2 v-if="loading">Laden...</h2>

    <button id="show-modal" @click="showModal = true">Show modal</button>

    <modal :show.sync="showModal" v-show="showModal" shown="modalShown" :modal-data="modalData">
      <p>content</p>
    </modal>

    <p v-show="!posts.length"><i>Geen berichten gevonden</i></p>

    <div class="card-group" v-if="!loading">
      <transition-group name="slide-up">
        <card v-for="post in posts" :key="post.id" :post_data="post"></card>
      </transition-group>
    </div>
  </div>
</template>

<script src="./Home.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped lang="scss" src="./Home.vue.scss"></style>-->
