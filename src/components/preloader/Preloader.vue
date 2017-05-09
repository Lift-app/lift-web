<template>
  <div class="preloader">
    <svg version="1.1" id="Laag_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="82.8 -21.7 98.8 103.6" style="enable-background:new 82.8 -21.7 98.8 103.6;" xml:space="preserve">
      <style type="text/css">
          .lift-path {
            fill: #fff;
            stroke: #000;
            stroke-width:1;
            stroke-alignment: inner;
            stroke-miterlimit:10;
            stroke-dasharray: 500;
            stroke-dashoffset: 500;
            animation-name: dash, fill;
            animation-duration: 4s, 900ms;
            animation-direction: forward;
            animation--iteration-count: 1;
            animation-delay: 0s, 2.3s;
            animation-timing-function: ease;
            animation-fill-mode: forwards;
          }

          @keyframes dash {
            to {
              stroke-dashoffset: 0;
            }
          }

          @keyframes fill {
            0% {
              fill: #fff;
            }
            100% {
              fill: #000;
              stroke-width: 0;
            }
          }
      </style>
      <g id="Symbols">
          <g id="logo_x2F_black">
              <g id="logo">
                  <g id="hand_x2F_straight-variation-5_x2F_black">
                      <g id="shape">
                          <path id="Combined-Shape" class="lift-path" d="M127.7,59.3l23.1,18.1c8.7,6.8,17.3,1.8,19.1-11.3l10-70c1.8-13-6.5-19.6-18.7-14.6
                              L95.6,8c-11.1,4.5-14.5,12.9-8.3,19.5c10.8,10.2,37.5,0.6,39.9-3.1c3.5-5.4,3.4-4.8,7.2-9.6c3.5-4.5,5.5-9.4,5.9-11l0.1-0.6
                              c0.2-1.1,0.4-2.2,2.3-2.2c3.6,0,5.6,4.1,5.6,8c0,2.4-0.9,5.6-2.8,9.8c-0.7,1.6-0.6,2.8-0.3,3.3c0.2,0.2,0.4,0.4,0.7,0.4h14.4
                              c1.8,0.2,4.9,1.5,4.9,5.3c0,2.5-0.9,3.8-1.8,4.6c0.8,0.8,1.8,2.1,1.8,4.2c0,2.5-1.7,4.1-2.9,4.9c0.6,0.7,1.3,1.9,1.3,3.9
                              c0,2.9-2.5,4.3-4.1,4.9c0.6,1.1,0.7,2.4,0.4,4.2c-0.5,3.1-1.4,4.7-19.5,5.5C137,60.2,132.2,59.8,127.7,59.3z"/>
                      </g>
                  </g>
              </g>
          </g>
      </g>
      </svg>
    <h3 class="preloader-text" v-if="loading">Aan het laden...</h3>
  </div>
</template>

<script src="./Preloader.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./Preloader.vue.scss"></style>
