<template>
  <div id="app">
    <div class="view">
      <router-view></router-view>
    </div>

    <nav class="navigation">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Login' }">Login</router-link>
    </nav>
  </div>
</template>

<script>

import config from '@/config/config'
import router from '@/router'

export default {
  name: 'lift',
  data() {
    return {
      active: 'home'
    }
  },
  methods: {

    checkLogin() {
      if(!config.isLoggedIn()) {
        router.push({name: 'Login'})
      }
    }
  },
  mounted() {
    this.checkLogin()
  }
}

</script>

<!-- Import the global styles from ./global_styles folder -->
<style src="./assets/styles/app.scss" lang="scss"></style>
