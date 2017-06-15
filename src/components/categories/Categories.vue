<template>
  <section class="cat-section">
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
</template>

<script src="./Categories.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./Categories.vue.scss"></style>
