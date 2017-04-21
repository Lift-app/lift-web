<template>
  <div class="card" :class="normalizedCategory" @click="openPost">
    <header>
     <div class="inner-left">
         <img class="avatar" src="https://placehold.it/80x80" :alt="post_data.user.username">
         <span class="u_name">{{ post_data.user.username }}</span><span class="u_date">Eergisteren</span> 
      </div>
      <div class="inner-right">
          <span>{{ post_data.category.name }}</span>
      </div>
      </header>
    <h2 class="title">{{ post_data.body }}</h2>
  </div>
</template>

<script src="./Card.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./Card.vue.scss"></style>
