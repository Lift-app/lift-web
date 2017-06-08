<template>
  <div class="card" :class="normalizedCategory" @click="openPost">

    <header>
      <div class="user">
        <avatar :post="post"></avatar>
        <div class="user-details">
          <h4 class="u-name" v-if="post.user">{{ post.user.username }}</h4>
          <h4 class="u-name" v-else>Anoniem</h4>
          <h5 class="u-date">{{ post.created_at | moment("from", "now") }}</h5>
        </div>
      </div>
      <button @click="goToCategory" class="btn cat-btn">{{ post.category.name }}</button>
    </header>

    <section>
      <h2 class="title" v-if="post.type !== 'audio'">{{ post.body }}</h2>
      <audio @click="haltAction" preload="auto" v-else :src="post.body" class="audio-post" controls></audio>

    </section>

    <footer class="post-details">
      <like-button :data="post" type="posts"></like-button>

      <div class="footer-action">
        <button class="comment" aria-label="Reageren op deze vraag">
          <img src="../../assets/images/icons/speech-bubble-white.svg" alt="Reageren op deze vraag" height="29" width="26"/>
          <span class="count comment-count"  :aria-label="post.comment_count + ' reacties'">{{ post.comment_count }}</span>
        </button>
      </div>
    </footer>

  </div>
</template>

<script src="./Card.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./Card.vue.scss"></style>
