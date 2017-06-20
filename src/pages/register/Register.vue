<template>
  <div class="page--register">

    <transition name="slide-right">
      <router-view></router-view>
    </transition>

    <div class="inner">
      <img src="../../assets/images/logo/white.svg" alt="Lift logo" title="Lift - Dé online gemeenschap voor Wajongers">
      <h3 class="slogan">Account aanmaken...</h3>
      <div class="register-form">
        <div class="form-fields">
        <label> Wat is je e-mailadres?
          <input type="email" v-model='email' autocomplete="off" name="email" placeholder="jouw@emailadres.nl"/>
        </label>
        <label> Wat wordt je gebruikersnaam?
          <input type="text" v-model='username' autocomplete="off" name="username" placeholder="Bijvoorbeeld: Peter1994"/>
        </label>
        <label> Vul hier een wachtwoord in…
          <input type="password" v-model='password' autocomplete="off" name="password" placeholder="Vertel deze tegen niemand!"/>
        </label>
        </div>
        <button type="submit" @click="createAccount" class="btn btn-register-next">Doorgaan</button>
      </div>
    </div>
  </div>
</template>
<script src="./Register.vue.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Register.vue.scss"></style>
