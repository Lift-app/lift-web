<template>
  <div class="page--register">
    <div class="inner">
      <img src="../../assets/images/logo/white.svg" alt="Lift logo" title="Lift - Dé online gemeenschap voor Wajongers">
      <p>We hebben iets meer gegevens van je nodig…</p>
      <form class="register-form">
        <label> Wat is je e-mailadres?
          <input type="email" name="email" placeholder="jou@emailadres.nl"/>
        </label>
        <label> Wat wordt je gebruikersnaam?
          <input type="text" name="username" placeholder="Bijvoorbeeld: Peter1994"/>
        </label>
        <label> Vul hier een wachtwoord in…
          <input type="password" name="password" placeholder="Vertel deze tegen niemand!"/>
        </label>

        <button class="btn btn-register-next" v-if="">Doorgaan</button>
      </form>
    </div>
  </div>
</template>
<script src="./Register.vue.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Register.vue.scss"></style>
