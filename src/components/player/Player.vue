<template>
  <div class="player" @click="haltAction">
    <div class="controls">
      <span class="buttons">
        <a role="button" class="button-play active" @click="switchState">
          <svg width="10px" height="12px" viewBox="0 0 10 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g class="play" id="speak-question-content-recording-copy" transform="translate(-96.000000, -213.000000)" fill="#FFFFFF">
                      <path d="M105.65625,218.28125 C105.885418,218.468751 106,218.708332 106,219 C106,219.291668 105.885418,219.531249 105.65625,219.71875 L96.96875,224.90625 C96.8437494,224.96875 96.7291672,225 96.625,225 C96.4583325,225 96.3125006,224.937501 96.1875,224.8125 C96.0624994,224.687499 96,224.541667 96,224.375 L96,213.625 C96,213.458333 96.0624994,213.312501 96.1875,213.1875 C96.3125006,213.062499 96.4583325,213 96.625,213 C96.7500006,213 96.8645828,213.03125 96.96875,213.09375 L105.65625,218.28125 Z" id="ion-play---Ionicons"></path>
                  </g>
              </g>
          </svg>
        </a>
        <a role="button" class="button-pause" @click="switchState">
          <svg width="8px" height="12px" viewBox="0 0 8 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g class="pause" id="speak-question-content-recording-copy" transform="translate(-81.000000, -213.000000)" fill="#FFFFFF">
                      <path d="M84,224.625 C84,224.875001 83.8750012,225 83.625,225 L81.375,225 C81.1249988,225 81,224.875001 81,224.625 L81,213.375 C81,213.124999 81.1249988,213 81.375,213 L83.625,213 C83.8750012,213 84,213.124999 84,213.375 L84,224.625 Z M88.625,213 C88.8750012,213 89,213.124999 89,213.375 L89,224.625 C89,224.875001 88.8750012,225 88.625,225 L86.375,225 C86.1249988,225 86,224.875001 86,224.625 L86,213.375 C86,213.124999 86.1249988,213 86.375,213 L88.625,213 Z" id="ion-pause---Ionicons"></path>
                  </g>
              </g>
          </svg>
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
        <span class="max-time">0:00</span>
      </span>
    </div>
    <audio @timeupdate="updateState" @canplay="initState" @ended="resetState" :src="data.body">
    </audio>
  </div>
</template>
<script src="./Player.vue.js"></script>
<style lang="scss" src="./Player.vue.scss"></style>
