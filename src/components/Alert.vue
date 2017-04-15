<template>
  <div class="alert" v-if="alertVisibility == 'visible'">
    <p>
      {{ alertMessage }}
      {{ alertStatus }}
    </p>
  </div>
</template>

<script type="text/javascript">
  import * as actions from '../store/actions'

  export default {
    props: ['message'],
    vuex: {
      getters: {
        alertVisibility: state => state.Alert.alert.visibility,
        alertMessage: state => state.Alert.alert.message,
        alertStatus: state => state.Alert.alert.status
      },
      actions
    }
  }
</script>

<style lang="scss">
  .alert {
    border: 1px solid red;
    padding: 10px;
  }
</style>
