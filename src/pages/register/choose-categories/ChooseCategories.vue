<template>
  <div class="page--register-choose-categories">

    <transition name="slide-right">
      <router-view></router-view>
    </transition>

    <div class="inner">
      <header>
        <h3 class="title">Welke interesses lijken jou leuk?</h3>
        <h4 class="subtitle">Je kunt er meerdere selecteren…</h4>
      </header>
      <section>
        <ul class="categories">
          <li v-for="(category, index) in categories" :class="normalizedCategory(category.name)" :key="category.id">
            <span
                    class="category mousedown"
                    @click="updateActiveCategory(category, index)"
                    :class="category.active ? 'active' : ''">
              <span>{{ category.name }}</span>
            </span>
          </li>
        </ul>
      </section>
      <div class="results">
        <h4 class="results-title">Geselecteerd door jou:</h4>
        <ul class="results-list">
          <li class="results-item" v-if="filteredList.length === 0"><i>Niets geselecteerd...</i></li>
          <li class="results-item" transition="fade" v-for="category in filteredList">{{category.name}}<span class="has-next">,&nbsp;</span></li>
        </ul>
      </div>
      <router-link class="btn btn-register-next" :to="{name: 'AccountCreated'}">Doorgaan</router-link>
    </div>
  </div>
</template>
<script src="./ChooseCategories.vue.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./ChooseCategories.vue.scss"></style>
