<template>
  <div class="page--search">

    <router-view></router-view>

    <div class="search-container">
      <header>
        <div class="header-inner">
          <img src="../../assets/images/icons/search-lift-white.svg" class="search-icon" alt="Zoeken"/>
          <h3 class="search-title">Waar wil je naar zoeken?</h3>
          <div class="search-wrapper">
            <input type="text" class="search-bar" placeholder="Bijvoorbeeld 'zorg'" v-model="keyword">
            <button type="submit" class="search-submit">Zoeken</button>
          </div>
        </div>
      </header>
        <section>
          <ul class="categories">
            <li v-for="category in filteredList" :class="normalizedCategory(category.name)">
              <a @click="goToCategory(category.name)" class="mousedown"><span>{{ category.name }}</span></a>
            </li>
          </ul>
          <transition name="fade">
          <div v-if="filteredList.length === 0" class="no-results">
            <small>We hebben helaas niks kunnen vinden...</small>
            <h4 class="no-results-text">Wil je zelf iets zeggen?</h4>
          <router-link :to="{name: 'CreatePost'}" class="btn btn-create-post">Iets zeggen</router-link>
          </div>
          </transition>
        </section>
    </div>
  </div>
</template>
<script src="./Search.vue.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Search.vue.scss"></style>
