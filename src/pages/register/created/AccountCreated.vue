a<template>
  <div class="page--register-created">
    <div class="inner">
      <section>
        <img class="success-icon" src="./checkmark-lift.svg" alt="Account aangemaakt!">
        <h3 class="title">Account aangemaakt!</h3>
        <h4 class="subtitle">Klik hieronder op de knop om naar je
          persoonlijke pagina te gaan</h4>
        <router-link class="btn btn-created" :to="{name: 'VoorJou'}">Naar mijn pagina</router-link>
      </section>
    </div>
  </div>
</template>
<script src="./AccountCreated.vue.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./AccountCreated.vue.scss"></style>

