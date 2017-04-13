<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<!-- Import the global styles from ./global_styles folder -->
<style src="./global_styles/app.scss" lang="scss"></style>
