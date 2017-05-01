<template>
  <div>
    <div class="page--create-post">

      <div v-if="post_type === 'choose'" class="create-type-picker">
        <h1>Ik wil iets zeggen...</h1>
        <h3>Maak hieronder een keuze hoe je iets wilt zeggen</h3>
        <button class="btn has_icon" @click="setPostType('text')">Mijn bericht typen</button>
        <button class="btn has_icon" @click="setPostType('voice')">Mijn bericht inspreken</button>
      </div>

      <div class="create-text-post" v-if="post_type === 'text'">
       <header>
          <nav>
              <a class="btn-back" @click="setPostType('choose')" aria-label="Terug naar: Type bericht kiezen">&lang; Terug</a>
              <img src="../../assets/images/icons/info-lift.svg" alt="Informatie over dit scherm" title="Informatie over dit scherm" class="info-icon">
          </nav>
          <img src="../../assets/images/icons/pencil-lift-white.svg" alt="Jouw bericht typen" class="header-icon">
          <h2 class="title">Ik wil iets zeggen...</h2>
       </header>

      <div class="inner">
       
        <textarea id="body" name="body" v-model="body" @focus="focusInput" @blur="blurInput" placeholder="Typ hier jouw bericht..."></textarea>

        <label for="categories">
          <select name="categories" id="categories" v-model="category">
            <option v-for="category in categories" :value="category.id" :disabled="category.disabled">{{ category.name }}</option>
          </select>
        </label>
        
        <div class="anonymity anonymity-container">
        <label class="anonymity anonymity-check" for="anonymity">
          <input type="checkbox" name="anonymity" v-model="anonymity" aria-label="Ik wil anoniem blijven">
          Ik wil anoniem blijven.
        </label>
          <small>Als je kiest om anoniem te blijven, zullen je naam en profielfoto niet bij het bericht komen te staan.</small>
        </div>
        
        <button class="btn medium has_icon btn-orange btn-cancel" @click="post_type = 'choose'">Annuleren</button>
        <button class="btn medium has_icon btn-green btn-create" @click="makePost">Plaatsen</button>
        </div>

      </div>



      <div class="create-voice-post" v-if="post_type === 'voice'">
       
       <header>
          <nav>
              <a class="btn-back" @click="setPostType('choose')" aria-label="Terug naar: Type bericht kiezen">&lang; Terug</a>
              <img src="../../assets/images/icons/info-lift.svg" alt="Informatie over dit scherm" title="Informatie over dit scherm" class="info-icon">
          </nav>
          <img src="../../assets/images/icons/microphone-lift-white.svg" alt="Jouw bericht typen" class="header-icon">
          <h2 class="title">Ik wil iets inspreken...</h2>
       </header>

      <div class="inner">
        <div class="block record-block">
          <h5>Neem een stembericht op door hieronder op de microfoon te klikken.</h5>

          <button class="btn record-button" @click="toggleRecording">
            <span v-show="!isRecording && firstRecord" class="notRecording"><img src="./../../assets/images/icons/microphone-lift-blue.svg" alt="Start opname"></span>
            <span v-show="!isRecording && !firstRecord" class="reRecording"><img src="./../../assets/images/icons/reload-lift-blue.svg" alt="Herstart opname"></span>
            <span v-show="isRecording" class="isRecording"><img src="./../../assets/images/icons/stop-lift-blue.svg" alt="Stop opname"></span>
            <i v-show="isRecording" class="record-animation"></i>
          </button>

          <h5 v-if="!isRecording">Je kunt maximaal 2 minuten inspreken.</h5>
          <h6 class="recording" v-if="isRecording">Aan het opnemen!</h6>

          <button class="btn green-button" @click="togglePlay" v-if="dataUrl.length > 0">
            <i class="play icon"></i> Play recording
          </button>


          <audio id="audio" preload="auto" :src="dataUrl"></audio>

       <label for="categories">
          <select name="categories" id="categories" v-model="category">
            <option v-for="category in categories" :value="category.id" :disabled="category.disabled">{{ category.name }}</option>
          </select>
        </label>
        
        <div class="anonymity anonymity-container">
        <label class="anonymity anonymity-check" for="anonymity">
          <input type="checkbox" name="anonymity" v-model="anonymity" aria-label="Ik wil anoniem blijven">
          Ik wil anoniem blijven.
        </label>
          <small>Als je kiest om anoniem te blijven, zullen je naam en profielfoto niet bij het bericht komen te staan.</small>
        </div>
        
        <button class="btn medium has_icon btn-orange btn-cancel" @click="post_type = 'choose'">Annuleren</button>
        <button class="btn medium has_icon btn-green btn-create" @click="makePost">Plaatsen</button>
        </div>

      </div>

    </div>

    <router-view></router-view>
  </div>
</template>

<script src="./CreatePost.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./CreatePost.vue.scss"></style>