<template>
  <div class="page--post">
    <div class="post-container">
      <button @click="close" class="close" aria-label="Ga terug">sluiten x</button>

      <article class="post">
        <header v-if="!loading">

          <div class="user" v-if="post.user">
            <img class="avatar" src="https://placehold.it/60x60" :alt="post.user.username + '\'s profielfoto'">
            <h3 class="username" v-model="post.user.username"></h3>
            <span class="created-on">2 dagen geleden</span>
          </div>

          <div class="user" v-else>
            <img class="avatar" src="https://placehold.it/60x60" alt="Anoniem's profielfoto">
            <h3 class="username anonymous">Anoniem</h3>
            <span class="created-on">2 dagen geleden</span>
          </div>
          <button class="btn category-button">{{ post.category.name }}</button>
        </header>

        <h1 class="title">{{ post.body }}</h1>

        <p class="title" aria-hidden="true" v-if="loading">Laden...</p>

        <footer>
          <button class="like" aria-label="Vraag leuk vinden"><img src="../../assets/images/icons/heart-single-lift.svg" alt="Vind ik leuk"><span class="like-count">12</span></button>
          <button class="comment" aria-label="Reacties op deze vraag"><img src="../../assets/images/icons/comment-single-lift.svg" alt="Reageren op deze vraag"><span class="like-count">12</span></button>
        </footer>
      </article>

      <div class="comments">
        comments
      </div>

    </div>

  </div>
</template>

<script src="./Post.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Post.vue.scss"></style>
