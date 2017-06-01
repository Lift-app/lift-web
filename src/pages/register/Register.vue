<template>
  <div class="page--register">

    <router-view></router-view>

    <div class="inner">
      <img src="../../assets/images/logo/white.svg" alt="Lift logo" title="Lift - Dé online gemeenschap voor Wajongers">
      <h3 class="slogan">Account aanmaken...</h3>
      <form class="register-form" autocomplete="off">
        <div class="form-fields">
        <label> Wat is je e-mailadres?
          <input autocomplete="off" type="email" name="email" placeholder="jou@emailadres.nl"/>
        </label>
        <label> Wat wordt je gebruikersnaam?
          <input autocomplete="off" type="text" name="username" placeholder="Bijvoorbeeld: Peter1994"/>
        </label>
        <label> Vul hier een wachtwoord in…
          <input autocomplete="off" type="password" name="password" placeholder="Vertel deze tegen niemand!"/>
        </label>
        </div>
        <button class="btn btn-register-next" v-if="">Doorgaan</button>
      </form>
    </div>
  </div>
</template>
<script src="./Register.vue.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Register.vue.scss"></style>
