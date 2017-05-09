<template>
  <div class="page--home">
    <header class="header">
      <nav class="feed-nav">
        <p>Deze berichten zijn voor jou geselecteerd...</p>
        <!--<ul>-->
          <!--<li class="active"><a href="#">Voor jou <img src="./star-red-lift.svg" alt="Voor jou" class="feed-cat-img" style="max-width: 20px;"></a></li>-->
          <!--<li><a href="#">Populair <img src="./hot-red-lift.svg" alt="Populair" class="feed-cat-img" style="max-width: 17px;"></a></li>-->
        <!--</ul>-->
      </nav>
    </header>
    <transition name="slide-right">
      <router-view></router-view>
    </transition>



    <p class="not-found" v-show="!posts.length"><i>Geen berichten gevonden</i></p>

    <div class="card-group" v-if="!loading">
      <transition-group name="slide-up">
        <card v-for="post in posts" :key="post.id" :post_data="post"></card>
      </transition-group>
    </div>
  </div>
</template>

<script src="./Home.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Home.vue.scss"></style>

<!-- Scroll down for feed navigation -->
