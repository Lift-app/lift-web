<template>
  <div class="page--post">
    <div class="post-container">
      <button @click="close" class="close" aria-label="Ga terug">sluiten x</button>

      <article class="post" v-if="post">
        <header>
          <div class="user">
<<<<<<< HEAD
          <img class="avatar" src="https://placehold.it/60x60" :alt="post_data.user.username">
            <h3 class="username" v-bind="post_data.user">{{ post_data.user.username }}</h3>
            <span class="created-on">2 dagen geleden</span>
            <!-- <span class="created-on">{{ post_data.created_at }} </span>-->
=======
            <img src="" alt="Profielfoto" class="avatar">
            <h3 class="username" v-bind="post.user">{{ post.user.username }}</h3>
            <span class="created-on">{{ post.created_at }}</span>
>>>>>>> 73035a5db2fbeed6816152c5943084bbf0b9433e
          </div>
          <button class="button category-button">{{ post.category.name }}</button>
        </header>

        <h1 class="title">{{ post.body }}</h1>

        <footer>
          <button class="like" aria-label="Vraag leuk vinden"><img src="../../assets/images/icons/heart-single.svg" alt="Vind ik leuk"><span class="like-count">12</span></button>
          <button class="comment" aria-label="Reacties op deze vraag"><img src="../../assets/images/icons/comment-single.svg" alt="Reageren op deze vraag"><span class="like-count">12</span></button>
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
