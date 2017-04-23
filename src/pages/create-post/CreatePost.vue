<template>
  <div class="page--create-post">

    <div v-if="post_type === 'choose'" class="create-type-picker">
      <h1>Ik wil wat zeggen...</h1>

      <button class="button" @click="setPostType('text')">Bericht typen</button>
      <button class="button" @click="setPostType('voice')">Bericht inspreken</button>
    </div>

    <div class="create-voice-post" v-if="post_type === 'voice'">
      <button class="back" @click="setPostType('choose')">< Terug</button>
      Voice post

    </div>

    <div class="create-text-post" v-if="post_type === 'text'">
      <button class="back" @click="setPostType('choose')">< Terug</button>
      <label for="postTextBody">Stel een vraag
        <input type="text" id="postTextBody" v-model="post.body">
      </label>
      <button @click="makePost">Post maken</button>

    </div>

  </div>
</template>

<script src="./CreatePost.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./CreatePost.vue.scss"></style>
