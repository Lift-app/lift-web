<template>
  <div class="page--search">

    <transition name="slide-right">
      <router-view></router-view>
    </transition>

    <div class="search-container" :class="filteredList.length === 0 ? 'hide-filteredlist' : ''">
      <header>
        <div class="header-inner">
          <img src="../../assets/images/icons/search-lift-white.svg" class="search-icon" alt="Zoeken"/>
          <h3 class="search-title">Waar wil je naar zoeken?</h3>
          <div class="search-wrapper">
            <input type="text" class="search-bar" placeholder="Bijvoorbeeld 'Liefde'" v-model="keyword" @keyup="doSearch">
            <button type="submit" class="search-submit" @click="doSearch">Zoeken</button>
          </div>
        </div>
      </header>
      <section>
        <p class="choose-categories-text">Of kies een van de categorieën:</p>
        <ul>
         <transition-group name="scale" mode="out-in" class="categories">
           <li v-for="category in filteredList" :class="normalizedCategory(category.name)" :key="category.id">
             <a @click="goToCategory(category.name)" class="category mousedown"><span>{{ category.name }}</span></a>
           </li>
         </transition-group>
        </ul>
      </section>
    </div>

    <section class="search-results" :class="filteredList.length === 0 ? 'expanded' : ''">
        <div class="card-group">
          <transition name="scale" mode="out-in">
            <div class="no-results">
              <p v-if="results.length === 0 || !results">Geen zoekresultaten gevonden.</p>
              <h3 v-if="results.length >= 1">Zoekresultaten</h3>
            </div>
          </transition>
          <transition name="scale" mode="out-in">
            <div class="card-group">
              <card v-for="result in results" :key="result.id" :post="result"></card>
            </div>
          </transition>
        </div>
    </section>
  </div>
</template>
<script src="./Search.vue.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Search.vue.scss"></style>
