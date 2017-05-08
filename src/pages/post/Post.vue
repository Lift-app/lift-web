<template>
  <div class="page--post">
    <div class="post-container">
     <nav>
      <router-link to="/" class="btn btn-back" aria-label="Terug naar: Home">&lang; Terug</router-link>
      <button class="report" aria-label="Vraag leuk vinden"><img src="../../assets/images/icons/report-white.svg" alt="rapporteer"></button>      
     </nav>

      <article class="post">
        <header v-if="!loading">
          

          <div class="user" v-if="post.user">
            <img class="avatar" src="https://placeimg.com/60/60/people" :alt="post.user.username + '\'s profielfoto'">
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
              <div class="footer-action">
                  <button class="like" aria-label="Vraag leuk vinden"><img src="../../assets/images/icons/heart-dark.svg" alt="Vind ik leuk!"></button>
                  <span class="count like-count" v-bind:aria-label="post.likes">{{ post.likes }}</span>
              </div>

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
