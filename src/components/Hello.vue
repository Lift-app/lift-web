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

  h1  {
    text-align: center;
    color: rgba(8, 8, 18, 0.92);
    font-weight: bold;
    font-family: 'Source Sans Pro', Arial, sans-serif;
  }

  .link {
    text-align: center;
    display: block;
  }
</style>
