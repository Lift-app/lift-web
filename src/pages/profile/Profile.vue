<template>
  <div class="page--profile">
    <avatar :user="user"></avatar>
    <h1>{{ user.username }}</h1>
    <p :v-if="user.profile.bio" class="bio">{{ user.profile.bio }}</p>

    <button @click="editInfo = true" v-if="isOwnProfile && !editInfo">
      <span>Wijzigen</span>
    </button>
    <button @click="editInfo = false" v-else-if="isOwnProfile && editInfo">
      <span>Annuleren</span>
    </button>

    <div v-if="isOwnProfile && editInfo">
      <input type="text" v-model="changeUser.username" placeholder="Gebruikersnaam"></input>
      <input type="email" v-model="changeUser.email" placeholder="E-mail adres"></input>

      <input type="text" v-model="changeUser.profile.first_name" placeholder="Voornaam"></input>
      <input type="text" v-model="changeUser.profile.last_name" placeholder="Achternaam"></input>
      <textarea placeholder="Over mij" v-model="changeUser.profile.bio"></textarea>

      <button @click="updateUserInfo"><span>Opslaan</span></button>
    </div>

    <div v-if="!isOwnProfile">
      <button @click="unfollowUser" v-if="user.following"><span>Ontvolgen</span></button>
      <button @click="followUser" v-else><span>Volg</span></button>
    </div>

    <p>Volgt: {{ user.following_count }}</p>
    <p>Volgers: {{ user.follower_count }}</p>

    <h2>Interesses</h2>
    <button @click="editInterests = true" v-if="isOwnProfile && !editInterests">
      <span>Wijzigen</span>
    </button>
    <button @click="editInterests = false" v-else-if="isOwnProfile && editInterests">
      <span>Annuleren</span>
    </button>

    <div v-if="isOwnProfile && editInterests">
      <ul v-for="category in categories">
        <div
          v-if="isInterested(category.id)"
          :id="category.name"
          @click="removeInterest(category.id)">
          *{{ category.name }}*
        </div>
        <div
          v-else
          :id="category.name"
          @click="addInterest(category.id)">
          {{ category.name }}
        </div>
      </ul>
      <button @click="updateInterests"><span>Opslaan</span></button>
    </div>
    <ul v-for="interest in user.interests" v-else>
      <li>{{ interest.name }}</li>
    </ul>

    <a href="/logout" v-if="isOwnProfile">Uitloggen</a>
  </div>
</template>

<script src="./Profile.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Profile.vue.scss"></style>
