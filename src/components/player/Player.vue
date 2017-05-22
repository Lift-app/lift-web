<template>
  <div class="player" @click="haltAction">
    <div class="controls">
      <span class="buttons">
        <a role="button" class="button-play active" @click="switchState">
          <img src="../../assets/images/icons/play-lift.svg">
        </a>
        <a role="button" class="button-pause" @click="switchState">
          <img src="../../assets/images/icons/pause-lift.svg">
        </a>
      </span>
      <span class="progress">
        <input
          @change="progressBarUpdate"
          value="0"
          min="0"
          step="1"
          class="progress-bar"
          type="range">
      </span>
      <span class="time">
        <span class="current-time">0:01</span>
        <span class="max-time">0:05</span>
      </span>
    </div>
    <audio
      @timeupdate="updateState"
      @ended="resetState"
      preload="none"
      :src="url">
    </audio>
  </div>
</template>
<script src="./Player.vue.js"></script>
<style lang="scss" src="./Player.vue.scss"></style>
