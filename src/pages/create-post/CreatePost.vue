<template>
  <div>
    <div class="page--create-post">

      <div v-if="post_type === 'choose'" class="create-type-picker">
        <h1>Ik wil wat zeggen...</h1>

        <button class="button" @click="setPostType('text')">Bericht typen</button>
        <button class="button" @click="setPostType('voice')">Bericht inspreken</button>
      </div>

      <div class="create-text-post" v-if="post_type === 'text'">
        <button class="back" @click="setPostType('choose')" aria-label="Terug naar: Type bericht kiezen">< Terug</button>

        <br>

        <label for="body">Ik wil wat zeggen...
          <textarea id="body" name="body" v-model="body" placeholder="Typ hier je bericht..."></textarea>
        </label>

        <br>

        <label for="categories">Categorie
          <select name="categories" id="categories" v-model="category">
            <option v-for="category in categories" :value="category.id" :disabled="category.disabled">{{ category.name }}</option>
          </select>
        </label>

        <label for="anonymity">Ik wil anoniem blijven
          <input type="checkbox" name="anonymity" id="anonymity" v-model="anonymity" aria-label="Ik wil anoniem blijven">
        </label>

        <div class="anonymity" v-if="anonymity">
          <p>Als je kiest om anoniem te blijven, zal je naam en profielfoto niet bij het bericht komen te staan.</p>
        </div>

        <br><br>
        <button class="button" @click="makePost">Post maken</button>

      </div>

      <div class="create-voice-post" v-if="post_type === 'voice'">
        <button class="back" @click="setPostType('choose')" aria-label="Terug naar: Type bericht kiezen">< Terug</button>
        <br><br>

        <button class="button red-button" @click="toggleRecording">
          <span v-show="!isRecording">Start recording</span>
          <span v-show="isRecording">Stop recording</span>
        </button>
        <button class="button green-button" @click="togglePlay" v-if="dataUrl.length > 0">
          <i class="play icon"></i> Play recording
        </button>
        <button class="remove-recording" @click="removeRecording">
          <i class="remove icon"></i> Delete recording
        </button>

        <audio id="audio" preload="auto" :src="dataUrl" controls></audio>

        Voice post

      </div>

    </div>

    <router-view></router-view>
  </div>
</template>

<script src="./CreatePost.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./CreatePost.vue.scss"></style>
