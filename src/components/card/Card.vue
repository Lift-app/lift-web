<template>
  <div class="card" :class="normalizedCategory" @click="openPost">

    <header>
      <div class="user">
        <img class="avatar" src="https://placehold.it/60x60" :alt="post_data.user.username">
        <div class="user-details">
          <h4 class="u-name">{{ post_data.user.username }}</h4>
          <h5 class="u-date">Eergisteren</h5>
        </div>
      </div>
      <a href="#" class="btn cat-button">{{ post_data.category.name }}</a>
    </header>

    <section>
      <h2 class="title">{{ post_data.body }}</h2>
    </section>

    <footer>
      <div class="footer-action like">
        <a href="#" title="Bericht leuk vinden"><img src="https://placehold.it/20x20" alt="like"></a>
        <span class="count like-count" aria-label="23 likes">23</span>
      </div>

      <div class="footer-action comment">
        <a href="#" title="Reageren op bericht"><img src="https://placehold.it/20x20" alt="reactie"></a>
        <span class="count comment-count" aria-label="15 reacties">15</span>
      </div>
    </footer>

  </div>
</template>

<script src="./Card.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./Card.vue.scss"></style>
