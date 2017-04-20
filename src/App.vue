<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import config from '@/config/config'
import router from '@/router'

export default {
  name: 'lift',
  components: {
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
