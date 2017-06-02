<template>
  <div id="app">
    <div class="view" id="view">
      <transition name="slide-right" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <navigation></navigation>
  </div>
</template>

<script>

  import Navigation from '@/components/navigation/Navigation'
  import auth from '@/auth'

  export default {
    name: 'lift',
    beforeMount() {
      if (auth.isLoggedIn()) {
        auth.setAuthHeader()
      }
    },
    components: {
      Navigation
    }
  }

</script>

<!-- Import the global styles from styles folder -->
<style src="./assets/styles/app.scss" lang="scss"></style>
