<template>
  <div class="page--category-posts">

    <transition name="slide-right">
      <router-view></router-view>
    </transition>

    <header class="header" :class="normalizedCategory(category.name)">
      <nav class="default-header category-posts-header">
        <button @click="goBack" class="btn btn-back" aria-label="Naar vorige pagina"><img src="../../assets/images/icons/arrow-left-lift.svg" alt="Terug"> <span>Terug</span></button>
      </nav>
      <div class="category-posts-details">
        <h3 class="category-posts-title" :class="normalizedCategory(category.name)">{{ category.name }}</h3>
        <h5 class="category-posts-count">{{ category.post_count }} bericht<span v-if="category.post_count !== 1">en</span> gevonden</h5>
        <figure>
          <svg version="1.1" class="thumb-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 190 195" xml:space="preserve">
            <path class="thumb-inner" stroke-width="10" stroke-miterlimit="10" d="M25.3,170.1c32.6,7.6,72.3,11.3,82.7,10.9c54.5-2.3,57.2-7,58.8-16
            c0.9-5.3,0.6-9.1-1.3-12.3c4.8-1.8,12.2-6.1,12.2-14.4c0-5.8-1.9-9.4-3.8-11.5c3.8-2.4,8.8-7,8.8-14.3c0-6.3-2.8-10.1-5.3-12.3
            c2.6-2.2,5.3-6.2,5.3-13.3c0-10.8-9.4-14.7-14.7-15.3h-43.5c-1,0-1.7-0.3-2.1-1c-1-1.4-1.3-4.8,0.9-9.5c5.7-12.3,8.4-21.7,8.4-28.7
            c0-11.3-5.9-23.3-16.8-23.3c-5.6,0-6.3,3.3-6.9,6.5l-0.4,1.8c-1.1,4.6-7,18.9-17.7,32C78.6,63.2,79,61.7,68.3,77.3
            c-6.5,9.5-24.3,26.9-51.6,26.8c-5.7,0-9.3,5-8.7,10.5C10.4,133.8,10.7,167.3,25.3,170.1z"/>
          </svg>
        </figure>
      </div>
    </header>

    <p class="not-found" v-show="!posts.length && !loading"><i>Geen berichten gevonden</i></p>

    <div v-if="loading">
      <preloader></preloader>
    </div>

      <div class="card-group" v-if="!loading">
        <card v-for="post in posts" :key="post.id" :post="post" component-name="CategoryPost"></card>
        <infinite-loading :on-infinite="getMorePosts" ref="infiniteLoading" spinner="spiral" v-if="posts.length > 4">
          <small slot="no-more">Dat was het! Meer berichten hebben we op dit moment niet voor je.</small>
        </infinite-loading>
      </div>
  </div>
</template>

<script src="./CategoryPosts.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./CategoryPosts.vue.scss"></style>
