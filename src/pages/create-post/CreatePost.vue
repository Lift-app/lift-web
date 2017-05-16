<template>
  <div>
    <div class="page--create-post">

      <div v-if="post_type === 'choose'" class="create-type-picker">
        <h1>Ik wil iets zeggen...</h1>
        <h3>Maak hieronder een keuze hoe je iets wilt zeggen</h3>
        <button class="btn has_icon create-text-post" @click="setPostType('text')">Mijn bericht typen</button>
        <button class="btn has_icon create-voice-post" @click="setPostType('voice')">Mijn bericht inspreken</button>
      </div>

      <div class="create-text-post" v-if="post_type === 'text'">
        <header>
          <nav>
            <a class="btn-back" @click="setPostType('choose')" aria-label="Terug naar: Type bericht kiezen"><img src="../../assets/images/icons/arrow-left-lift.svg" alt="Terug"> <span>Terug</span></a>
            <img src="../../assets/images/icons/info-lift.svg" alt="Informatie over dit scherm"
                 title="Informatie over dit scherm" class="info-icon">
          </nav>
          <img src="../../assets/images/icons/pencil-lift-white.svg" alt="Jouw bericht typen" class="header-icon">
          <h2 class="title">Ik wil iets zeggen...</h2>
        </header>

        <div class="inner">

          <textarea id="body" name="body" v-model="body" @focus="focusInput" @blur="blurInput"
                    placeholder="Typ hier jouw bericht..."></textarea>

          <label for="categories">
            <v-select label="name" v-model="category" :options="categories" :searchable="false" placeholder="Plaatsen in..."></v-select>
          </label>

          <div class="anonymity anonymity-container">
            <label class="anonymity anonymity-check" for="anonymous">
              <input type="checkbox" name="anonymous" v-model="anonymous" aria-label="Ik wil anoniem blijven">
              Ik wil anoniem blijven.
            </label>
            <small>
              Als je kiest om anoniem te blijven, zullen je naam en profielfoto niet bij het bericht komen te staan.
            </small>
          </div>

          <button class="btn medium has_icon btn-orange btn-cancel" @click="post_type = 'choose'">Annuleren</button>
          <button class="btn medium has_icon btn-green btn-create" @click="createPost">Plaatsen</button>

          <modal :show.sync="showTextModal" v-show="showTextModal" :modal-data="modalTextData">
            <p>Weet je zeker dat je dit wilt plaatsen?
              Houdt er rekening mee dat iedereen je bericht kan lezen wanneer je deze plaatst.
              Zorg ervoor dat je geen persoonlijke, gevoelige informatie deelt.
              Meer hierover vind je</p> <a href="#">hier</a>
          </modal>
        </div>

      </div>


      <div class="create-voice-post" v-if="post_type === 'voice'">

        <header>
          <nav>
            <a class="btn-back" @click="setPostType('choose')" aria-label="Terug naar: Type bericht kiezen">&lang;
              Terug</a>
            <img src="../../assets/images/icons/info-lift.svg" alt="Informatie over dit scherm"
                 title="Informatie over dit scherm" class="info-icon">
          </nav>
          <img src="../../assets/images/icons/microphone-lift-white.svg" alt="Jouw bericht typen" class="header-icon">
          <h2 class="title">Ik wil iets inspreken...</h2>
        </header>

        <div class="inner">
          <div class="block record-block">
            <h4>Neem een stembericht op door hieronder op de microfoon te klikken.</h4>

            <button class="btn record-button" @click="toggleRecording">
              <span v-show="!isRecording && firstRecord" class="notRecording record-action"><img
                      src="./../../assets/images/icons/microphone-lift-blue.svg" alt="Start opname">
                <small>Start</small>
              </span>
              <span v-show="!isRecording && !firstRecord" class="reRecording record-action"><img
                      src="./../../assets/images/icons/reload-lift-blue.svg" alt="Herstart opname">
                <small>Opnieuw</small>
              </span>
              <span v-show="isRecording" class="isRecording record-action"><img
                      src="./../../assets/images/icons/stop-lift-blue.svg" alt="Stop opname">
                <small>Stop</small>
              </span>

              <i v-show="isRecording" class="record-animation"></i>

              <div class="svg-container" :class="isRecording ? 'animate' : ''">
                <svg version="1.1" viewBox="0 0 240 240"
                     preserveAspectRatio="xMinYMin meet" class="svg-content">
                  <circle class="circle" cx="120" cy="120" r="117"/>
                </svg>
              </div>
            </button>

            <h5 class="recording-time" v-if="!isRecording">Je kunt maximaal 2 minuten inspreken.</h5>
            <h4 class="recording-active" v-if="isRecording">Aan het opnemen!</h4>

            <button class="btn recording-controls btn-play-recording" @click="togglePlay"
                    v-if="dataUrl.length > 0 && !isPlaying">
              <img src="../../assets/images/icons/play-lift.svg" alt="Afspelen" title="Afspelen">
            </button>

            <button class="btn recording-controls btn-pause-recording" @click="togglePlay"
                    v-if="dataUrl.length > 0 && isPlaying">
              <img src="../../assets/images/icons/pause-lift.svg" alt="Pauzeren" title="Pauzeren">
            </button>


            <audio id="audio" preload="auto" :src="dataUrl"></audio>

          </div>

          <label for="categories">
            <v-select label="name" v-model="category" :options="categories" :searchable="false" placeholder="Plaatsen in..."></v-select>
          </label>

          <div class="anonymity anonymity-container">
            <label class="anonymity anonymity-check" for="anonymous">
              <input type="checkbox" name="anonymous" v-model="anonymous" aria-label="Ik wil anoniem blijven">
              Ik wil anoniem blijven.
            </label>
            <small>
              Als je kiest om anoniem te blijven, zullen je naam en profielfoto niet bij het bericht komen te staan.
            </small>
          </div>

          <button class="btn medium has_icon btn-orange btn-cancel" @click="post_type = 'choose'">Annuleren</button>
          <button class="btn medium has_icon btn-green btn-create" @click="createPost">Plaatsen</button>

          <modal :show.sync="showVoiceModal" v-show="showVoiceModal" :modal-data="modalVoiceData">
            <p>Weet je zeker dat je dit wilt plaatsen?
              Houdt er rekening mee dat iedereen je bericht kan lezen wanneer je deze plaatst.
              Zorg ervoor dat je geen persoonlijke, gevoelige informatie deelt.
              Meer hierover vind je</p> <a href="#">hier</a>
          </modal>
        </div>

      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script src="./CreatePost.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./CreatePost.vue.scss"></style>
