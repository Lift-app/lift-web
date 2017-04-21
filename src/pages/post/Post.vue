<template>
  <div class="page--post">
    <div class="post-container">
      <button @click="close" class="close" aria-label="Ga terug">sluiten x</button>

      <article class="post">
        <header>
          <div class="user">
            <img src="" alt="Profielfoto" class="avatar">
            <h3 class="username" v-bind="post_data.user">{{ post_data.user.username }}</h3>
            <span class="created-on">{{ post_data.created_at }}</span>
          </div>
          <button class="button category-button">{{ post_data.category.name }}</button>
        </header>

        <h1 class="title">{{ post_data.body }}</h1>

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
