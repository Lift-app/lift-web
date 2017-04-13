<template>
  <div id="app">
    <img src="./assets/images/logo.svg">
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'lift',
  data: () => {
    return {
      userStatus: 1
    }
  }
}
</script>

<!-- Import the global styles from ./global_styles folder -->
<style src="./assets/styles/app.scss" lang="scss"></style>
