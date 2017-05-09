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
            <img class="avatar" src="https://placeimg.com/60/60/people" :alt="post.user.username + '\'s profielfoto'">
            <h3 class="username" v-model="post.user.username">{{ post.user.username }}</h3>
            <span class="created-on">{{post.created_at}}</span>
          </div>

          <div class="user anonymous" v-else>
            <img class="avatar anonymous" src="../../assets/images/icons/anonymous.svg" alt="Anonieme profielfoto">
            <h3 class="username">Anoniem</h3>
            <span class="created-on">{{post.created_at}}</span>
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
      <!-- START comments-->
        <h3>Reacties</h3>
        <div class="comments">
            <div class="comment-wrap your-comment">
                <div class="side">
                    <div class="avatar" style="background-image: url('https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg')"></div>
                </div>
                <div class="comment-block">
                    <form action="">
                        <textarea name="" id="" cols="30" rows="3" placeholder="Jou reactie..."></textarea>
                    </form>
                </div>
            </div>

            <div class="comment-wrap comment comment-1 has_reply">
                <div class="side">
                    <div class="avatar" style="background-image: url('https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg')"></div>
                    <button class="side-comment-function rapport-comment"><img src="../../assets/images/icons/warning-lift-black.svg" alt="Reactie rapporteren"></button>
                    <button class="side-comment-function reply-comment"><img src="../../assets/images/icons/reply-lift-black.svg" alt="Reactie beantwoorden"></button>
                </div>
                <div class="comment-block">
                    <div class="rapported-message">
                        <p>Reactie als ongepast gemarkeerd. <a href="#" class="show-rapported">Reactie tonen</a></p>
                    </div>
                    <p class="comment-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto temporibus iste nostrum dolorem natus recusandae incidunt voluptatum. Eligendi voluptatum ducimus architecto tempore, quaerat explicabo veniam fuga corporis totam reprehenderit quasi
                        sapiente modi tempora at perspiciatis mollitia, dolores voluptate. Cumque, corrupti?</p>
                    <div class="bottom-comment">
                        <div class="comment-date">Geplaatst door: <strong>Gerrit Pils</strong> op 12 april 2017 om 12:35</div>
                    </div>
                </div>
            </div>

            <div class="comment-wrap comment comment-2 is-reply is-reply-1">
                <div class="side">
                    <div class="avatar" style="background-image: url('https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg')"></div>
                    <button class="side-comment-function rapport-comment"><img src="../../assets/images/icons/warning-lift-black.svg" alt="Reactie rapporteren"></button>
                    <button class="side-comment-function reply-comment"><img src="../../assets/images/icons/reply-lift-black.svg" alt="Reactie beantwoorden"></button>
                </div>
                <div class="comment-block">
                    <div class="rapported-message">
                        <p>Reactie als ongepast gemarkeerd. <a href="#" class="show-rapported">Reactie tonen</a></p>
                    </div>
                    <p class="comment-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div class="bottom-comment">
                        <div class="comment-date">Geplaatst door: <strong>Gerrit Pils</strong> op 12 april 2017 om 12:35</div>
                    </div>
                </div>
            </div>

            <div class="comment-wrap comment comment-7">
                <div class="side">
                    <div class="avatar" style="background-image: url('https://s3.amazonaws.com/uifaces/faces/twitter/felipenogs/128.jpg')"></div>
                    <button class="side-comment-function rapport-comment"><img src="../../assets/images/icons/warning-lift-black.svg" alt="Reactie rapporteren"></button>
                    <button class="side-comment-function reply-comment"><img src="../../assets/images/icons/reply-lift-black.svg" alt="Reactie beantwoorden"></button>
                </div>
                <div class="comment-block">
                    <div class="rapported-message">
                        <p>Reactie als ongepast gemarkeerd. <a href="#" class="show-rapported">Reactie tonen</a></p>
                    </div>
                    <p class="comment-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto temporibus iste nostrum dolorem natus recusandae incidunt voluptatum. Eligendi voluptatum ducimus architecto tempore, quaerat explicabo veniam fuga corporis totam reprehenderit quasi
                        sapiente modi tempora at perspiciatis mollitia, dolores voluptate. Cumque, corrupti?</p>
                    <div class="bottom-comment">
                        <div class="comment-date">Geplaatst door: <strong>Gerrit Pils</strong> op 12 april 2017 om 12:35</div>
                    </div>
                </div>
            </div>

            <div class="comment-wrap comment comment-8 is-rapported">
                <div class="side">
                    <div class="avatar" style="background-image: url('https://s3.amazonaws.com/uifaces/faces/twitter/felipenogs/128.jpg')"></div>
                    <button class="side-comment-function rapport-comment"><img src="../../assets/images/icons/warning-lift-black.svg" alt="Reactie rapporteren"></button>
                    <button class="side-comment-function reply-comment"><img src="../../assets/images/icons/reply-lift-black.svg" alt="Reactie beantwoorden"></button>
                </div>
                <div class="comment-block">
                    <div class="rapported-message">
                        <p>Reactie als ongepast gemarkeerd. <a href="#" class="show-rapported">Reactie tonen</a></p>
                    </div>
                    <p class="comment-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto temporibus iste nostrum dolorem natus recusandae incidunt voluptatum. Eligendi voluptatum ducimus architecto tempore, quaerat explicabo veniam fuga corporis totam reprehenderit quasi
                        sapiente modi tempora at perspiciatis mollitia, dolores voluptate. Cumque, corrupti?</p>
                    <div class="bottom-comment">
                        <div class="comment-date">Geplaatst door: <strong>Gerrit Pils</strong> op 12 april 2017 om 12:35</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- END comments-->
    </div>

  </div>
</template>

<script src="./Post.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Post.vue.scss"></style>
