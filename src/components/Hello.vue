<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/login" class="link">Go to Login</router-link>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Lift!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
