<template>
  <div class="page--post">
    <div class="post-container">
      <button @click="close" class="close" aria-label="Ga terug">sluiten x</button>

      <article class="post" v-if="post">
        <header>
          <div class="user">
            <img src="" alt="Profielfoto" class="avatar">
            <h3 class="username" v-bind="post.user">{{ post.user.username }}</h3>
            <span class="created-on">{{ post.created_at }}</span>
          </div>
          <button class="button category-button">{{ post.category.name }}</button>
        </header>

        <h1 class="title">{{ post.body }}</h1>

        <footer>
          <button class="like" aria-label="Bericht leuk vinden">like icon - like count</button>
          <button class="comment" aria-label="Bericht leuk vinden">comment icon - comment count</button>
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
