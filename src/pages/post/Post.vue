<template>
  <div class="page--post">
    <div class="post-container">
      <nav>
        <button @click="goBack" class="btn btn-back" aria-label="Naar vorige pagina"><img src="../../assets/images/icons/arrow-left-lift.svg" alt="Terug"> <span>Terug</span></button>
        <button class="report" aria-label="rapporteren"><span>Melden</span><img src="../../assets/images/icons/warning-lift-white.svg" alt="Bericht rapporteren" class="report-icon"/></button>
      </nav>

      <article class="post" :class="normalizedCategory">
        <div class="inner-post">
          <header v-if="!loading">
            <a @click="goToUser(post.user.username)" class="user">
              <avatar :post="post"></avatar>
              <h3 class="username" v-if="post.anonymous">Anoniem</h3>
              <h3 class="username" v-else v-model="post.user.username">{{ post.user.username }}</h3>
              <span class="created-on">{{ post.created_at | moment("from", "now") }}</span>
            </a>

            <button class="btn category-button">{{ post.category.name }}</button>
          </header>

          <h1 class="title" v-if="post.type !== 'audio'">{{ post.body }}</h1>
          <audio preload="auto" v-else class="audio-post" controls>
            <source :src="post.body" type="audio/wav">
          </audio>

          <p class="title" aria-hidden="true" v-if="loading">
            <preloader></preloader>
          </p>

          <footer class="post-details">
            <like-button :data="post" type="posts" :dark="true"></like-button>
          </footer>
        </div>
      </article>

      <div class="comments">
        <div class="comment create-comment">
          <aside class="comment-sidebar">
            <figure class="avatar-container">
              <img class="avatar" v-if="currentUser.avatar" :src="currentUser.avatar.thumbnail" :alt="currentUser.username + '\'s profielfoto'">
              <img class="avatar" v-else src="../../assets/images/icons/anonymous.svg" :alt="currentUser.username + '\'s profielfoto'">
            </figure>
          </aside>
          <div class="comment-content">
            <header>
              <span class="username">{{ currentUser.username }}</span>
            </header>

              <textarea name="body" class="body" placeholder="Typ hier je reactie..." @focus="focusInput" @blur="blurInput" v-model="commentBody" maxlength="600" v-on:keyup="commentLengthCount"></textarea>
            <footer>
              <span class="comment-length">{{commentLength}}</span>
              <button class="btn btn-green btn-submit has_icon" @click="placeComment">Plaatsen</button>
            </footer>
          </div>
        </div>

        <p aria-hidden="true" v-if="commentsLoading">
          <preloader></preloader>
        </p>

        <div v-if="!commentsLoading">
          <h3 class="title"><span class="comment-count">{{ post.comment_count }}</span> {{ commentsTitle }}</h3>

          <article v-for="(comment, index) in comments"
                   v-bind:item="comment"
                   v-bind:index="index"
                   v-bind:key="comment.id" class="comment" :id="'comment-' + comment.id">
            <aside class="comment-sidebar">
              <a @click="goToUser(comment.user.username)">
                <figure class="avatar-container" v-if="comment.user">
                  <img class="avatar" v-if="comment.user.avatar" :src="comment.user.avatar.thumbnail" alt="Avatar">
                  <img class="avatar anonymous" v-else src="../../assets/images/icons/anonymous.svg" alt="Anonieme profielfoto">
                </figure>
              </a>
            </aside>

            <div class="comment-content">
              <header>
                <a @click="goToUser(comment.user)">
                  <span class="username" v-if="comment.user">{{ comment.user.username }}</span>
                  <span v-else="!comment.user">Anoniem</span>
                  <small class="date">{{ comment.updated_at | moment("from", "now") }}</small>
                </a>
              </header>

              <h3 v-if="comment.deleted" class="deleted-body">Bericht verwijderd</h3>
              <h3 v-else-if="comment.type !== 'audio'" class="body">{{ comment.body }}</h3>
              <audio preload="auto" v-else class="audio-post" controls>
                <source :src="comment.body" type="audio/wav">
              </audio>

              <footer v-if="!comment.deleted">
                <like-button type="comments" :data="comment" :dark="true"></like-button>
                <button class="btn reply" aria-label="Reageren op deze comment"><img src="../../assets/images/icons/reply-lift-gray.svg" alt="Reageren op deze comment">reageren</button>
              </footer>
            </div>
          </article>
        </div>

      </div>
    </div>
  </div>
</template>

<script src="./Post.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Post.vue.scss"></style>
