<template>
  <div class="page--register-choose-categories">
    <div class="inner">
      <header>
        <h3 class="title">Welke interesses lijken jou leuk?</h3>
        <h4 class="subtitle">Je kunt er meerdere selecteren…</h4>
      </header>
      <section>
        <ul class="categories">
          <li v-for="category in categories" :class="normalizedCategory(category.name)">
            <span v-on:click="myFilter" v-bind:class="{ active: isActive }" class="category mousedown"><span>{{ category.name }}</span></span>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
<script src="./ChooseCategories.vue.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./ChooseCategories.vue.scss"></style>
