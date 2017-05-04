<template>
  <div id="app">
    <div class="view">
      <router-view></router-view>
    </div>
    <navigation></navigation>
  </div>
</template>

<script>

  import config from '@/config/config'
  import router from '@/router'
  import Navigation from '@/components/navigation/Navigation'

  export default {
    name: 'lift',
    data() {
      return {
        active: 'home'
      }
    },
    methods: {

      checkLogin() {
        if (!config.isLoggedIn()) {
          router.push({name: 'Login'})
        }
      }
    },
    mounted() {
      // TODO: put this back on
      // this.checkLogin()
    },
    components: {
      Navigation
    }
  }

</script>

<!-- Import the global styles from ./global_styles folder -->
<style src="./assets/styles/app.scss" lang="scss"></style>
