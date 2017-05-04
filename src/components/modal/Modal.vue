<template>

  <div class="modal" :class="modalData.type">
    <div class="modal-mask" @click="hideModal">
      <div class="modal-container" transition="modal">
        <header>
          <h2 class="modal-title">{{modalData.title}}</h2>
        </header>

        <section class="modal-content">
          <slot></slot>
        </section>

        <footer>
          <button @click="hideModal" v-if="modalData.cancel" class="btn modal-button btn-cancel">{{modalData.cancelText}}</button>
          <button @click="submitModal" v-if="modalData.submit" class="btn modal-button btn-submit">{{modalData.submitText}}</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script src="./Modal.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./Modal.vue.scss"></style>
