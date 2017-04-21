<template>
  <div class="card" :class="normalizedCategory" @click="openPost">
    <header>
     <div class="inner-left">
         <img class="avatar" src="https://placehold.it/60x60" :alt="post_data.user.username">
         <div id="user_details">
             <h4 class="u_name">{{ post_data.user.username }}</h4>
             <h5 class="u_date">Eergisteren</h5> 
         </div>
      </div>
      <div class="inner-right">
          <a href="#" class="button cat_button">{{ post_data.category.name }}</a>
      </div>
      </header>
      <section id="card-content">
          <h2 class="title">{{ post_data.body }}</h2>
      </section>
      <footer>
          <img src="https://placehold.it/20x20" alt="like"><span>23</span>
          <img src="https://placehold.it/20x20" alt="comment"><span>12</span>
      </footer>
  </div>
</template>

<script src="./Card.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./Card.vue.scss"></style>
