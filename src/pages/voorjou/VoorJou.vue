<template>
  <div class="page--voorjou">
    <header class="header">
      <nav class="feed-nav">
        <h2 class="title">Voor jou</h2>
        <p class="description">Deze berichten zijn persoonlijk voor jou geselecteerd.</p>
      </nav>
    </header>
    <transition name="slide-right">
      <router-view></router-view>
    </transition>

    <div class="loading-results">
      <p class="not-found" v-show="!posts.length && !loading"><i>Geen berichten gevonden</i></p>

      <div v-if="loading">
        <preloader></preloader>
      </div>
    </div>

    <transition name="slide-up">
      <div class="card-group" v-if="!loading">
        <card v-for="post in posts" :key="post.id" :post="post"></card>
        <infinite-loading :on-infinite="getMorePosts" ref="infiniteLoading" spinner="spiral" v-if="posts.length > 4">
          <span slot="no-more">Dat was het! <br><small>Meer berichten hebben we op dit moment niet voor je.</small></span>
        </infinite-loading>
      </div>
    </transition>
  </div>
</template>

<script src="./VoorJou.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./VoorJou.vue.scss"></style>
