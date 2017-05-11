<template>
  <div class="page--post" :class="normalizedCategory">
    <div class="post-container">
      <nav>
        <router-link to="/" class="btn btn-back" aria-label="Terug naar: Home"><img src="../../assets/images/icons/arrow-left-lift.svg" alt="Terug"> <span>Terug</span></router-link>
        <button class="report" aria-label="rapporteren">Melden <img src="../../assets/images/icons/warning-lift-white.svg" alt="Bericht rapporteren" class="report-icon"/></button>
      </nav>

      <article class="post">
        <header v-if="!loading">
          <div class="user">
            <avatar :post="post"></avatar>
            <h3 class="username" v-if="post.anonymous">Anoniem</h3>
            <h3 class="username" v-else v-model="post.user.username">{{ post.user.username }}</h3>
            <span class="created-on">{{ post.created_at | moment("from", "now") }}</span>
          </div>

          <button class="btn category-button">{{ post.category.name }}</button>
        </header>

        <h1 class="title">{{ post.body }}</h1>
        <p class="title" aria-hidden="true" v-if="loading">Laden...</p>

        <footer class="post-details">
          <like-button :data="post" type="posts" :dark="true"></like-button>

          <div class="footer-action">
            <button class="comment" aria-label="Reageren op deze vraag"><img src="../../assets/images/icons/speech-bubble-dark.svg" alt="Reageren op deze vraag"></button>
            <span class="count comment-count"  :aria-label="post.comment_count + ' reacties'">{{ post.comment_count }}</span>
          </div>
        </footer>
      </article>

      <div class="comments">
        <header>
          <h3>Reacties</h3>
        </header>

        <article>
          <header>
            post
          </header>

          <footer>

          </footer>
        </article>

      </div>
    </div>
  </div>
</template>

<script src="./Post.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Post.vue.scss"></style>
