<template>
  <div id="app">
    <div class="view">
      <router-view></router-view>
    </div>
    <navigation></navigation>
  </div>
</template>

<script>

  import Navigation from '@/components/navigation/Navigation'

  export default {
    name: 'lift',
    data() {
      return {
        active: 'home'
      }
    },
    components: {
      Navigation
    }
  }

</script>

<!-- Import the global styles from styles folder -->
<style src="./assets/styles/app.scss" lang="scss"></style>
