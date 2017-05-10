<template>
  <div class="page--post">
    <div class="post-container">
     <nav>
      <router-link to="/" class="btn btn-back" aria-label="Terug naar: Home">&lang; Terug</router-link>
      <button class="report" aria-label="Vraag leuk vinden"><img src="../../assets/images/icons/warning-lift-white.svg" alt="Bericht rapporteren"></button>
     </nav>

      <article class="post">
        <header v-if="!loading">


          <div class="user" v-if="post.user">
            <avatar :post="post"></avatar>
            <h3 class="username" v-model="post.user.username">{{ post.user.username }}</h3>
            <span class="created-on">2 dagen geleden</span>
          </div>

          <div class="user anonymous" v-else>
            <img class="avatar anonymous" src="../../assets/images/icons/anonymous.svg" alt="Anonieme profielfoto">
            <h3 class="username">Anoniem</h3>
            <span class="created-on">2 dagen geleden</span>
          </div>
          <button class="btn category-button">{{ post.category.name }}</button>
        </header>

        <h1 class="title">{{ post.body }}</h1>

        <p class="title" aria-hidden="true" v-if="loading">Laden...</p>

          <footer class="post-details">
              <like-button :post="post" :dark="true"></like-button>

              <div class="footer-action">
                  <button class="comment" aria-label="Reageren op deze vraag"><img src="../../assets/images/icons/speech-bubble-dark.svg" alt="Reageren op deze vraag"></button>

                  <span class="count comment-count"  :aria-label="post.comments + ' reacties'">{{ post.comments }}</span>
              </div>
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
