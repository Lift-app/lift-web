<template>
  <div id="app">
    <div class="view">
      <router-view></router-view>
    </div>

    <nav class="navigation">
      <router-link :to="{ name: 'Home' }" exact id="feed-nav">Home</router-link>
      <a href="#" id="interests-nav">Interesses</a>
      <router-link :to="{name: 'CreatePost'}" id="add_post-nav">Iets zeggen</router-link>
      <a href="#" id="search-nav">Zoeken</a>
      <router-link :to="{name: 'Login'}" id="profile-nav">Account</router-link>
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
        if (!config.isLoggedIn()) {
          router.push({name: 'Login'})
        }
      }
    },
    mounted() {
      // TODO: put this back on
      // this.checkLogin()
    }
  }

</script>

<!-- Import the global styles from ./global_styles folder -->
<style src="./assets/styles/app.scss" lang="scss"></style>
