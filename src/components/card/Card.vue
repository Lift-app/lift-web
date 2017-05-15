<template>
  <div class="card" :class="normalizedCategory" @click="openPost">

    <header>
      <div class="user">
        <avatar :post="post_data"></avatar>
        <div class="user-details">
          <h4 class="u-name" v-if="post_data.user">{{ post_data.user.username }}</h4>
          <h4 class="u-name" v-else>Anoniem</h4>
          <h5 class="u-date">{{ post_data.created_at | moment("from", "now") }}</h5>
        </div>
      </div>
      <a href="#" class="btn cat-btn">{{ post_data.category.name }}</a>
    </header>

    <section>
      <h2 class="title" v-if="post_data.type !== 'audio'">{{ post_data.body }}</h2>
      <audio preload="auto" v-else :src="post_data.body" class="audio-post" controls></audio>

    </section>

    <footer class="post-details">
      <like-button :data="post_data" type="posts"></like-button>

      <div class="footer-action">
        <button class="comment" aria-label="Reageren op deze vraag"><img src="../../assets/images/icons/speech-bubble-white.svg" alt="Reageren op deze vraag" height="29" width="26"></button>

        <span class="count comment-count"  :aria-label="post_data.comment_count + ' reacties'">{{ post_data.comment_count }}</span>
      </div>
    </footer>

  </div>
</template>

<script src="./Card.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./Card.vue.scss"></style>
