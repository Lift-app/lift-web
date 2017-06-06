<template>
  <div class="page--register-choose-categories">

    <router-view></router-view>

    <div class="inner">
      <header>
        <h3 class="title">Welke interesses lijken jou leuk?</h3>
        <h4 class="subtitle">Je kunt er meerdere selecteren…</h4>
      </header>
      <section>
        <ul class="categories">
          <li v-for="category in categories" :class="normalizedCategory(category.name)">
            <span class="category mousedown" @click="$event.target.classList.toggle('active')"><span>{{ category.name }}</span></span>
          </li>
        </ul>
      </section>
      <button class="btn btn-register-next">Doorgaan</button>
    </div>
  </div>
</template>
<script src="./ChooseCategories.vue.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./ChooseCategories.vue.scss"></style>
