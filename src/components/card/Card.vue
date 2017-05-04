<template>
  <div class="card" :class="normalizedCategory" @click="openPost">


    <header>
      <div class="user">
        <img class="avatar" src="https://placehold.it/60x60">
        <div class="user-details">
          <h4 class="u-name" v-if="post_data.user">{{ post_data.user.username }}</h4>
          <h4 class="u-name anonymous" v-else>Anoniem</h4>
          <h5 class="u-date">Eergisteren</h5>
        </div>
      </div>
      <a href="#" class="btn cat-btn">{{ post_data.category.name }}</a>
    </header>

    <section>
      <h2 class="title" v-if="post_data.type !== 'audio'">{{ post_data.body }}</h2>
      <audio style="width: 100%; margin: 20px 0;" preload="auto" v-else :src="post_data.body" controls></audio>
    </section>

    <footer>
      <div class="footer-action">
        <button class="like" aria-label="Vraag leuk vinden"><img src="../../assets/images/icons/heart-white.svg" alt="Vind ik leuk"></button>
        <span class="count like-count" v-bind:aria-label="post_data.likes">{{ post_data.likes }}</span>
      </div>

      <div class="footer-action">
        <button class="comment" aria-label="Vraag leuk vinden"><img src="../../assets/images/icons/speech-bubble-white.svg" alt="Reageren op deze vraag"></button>

        <span class="count comment-count" :aria-label="post_data.comments + ' reacties'">{{ post_data.comments }}</span>
      </div>
    </footer>

  </div>
</template>

<script src="./Card.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./Card.vue.scss"></style>
