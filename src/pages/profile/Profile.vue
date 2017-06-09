<template>
  <div class="page--profile">
    <nav>
      <button @click="goBack" class="btn btn-back" aria-label="Naar vorige pagina"><img src="../../assets/images/icons/arrow-left-lift.svg" alt="Terug"> <span>Terug</span></button>
      <button class="edit" aria-label="rapporteren"><span>Bewerken</span><img src="https://placehold.it/25x25" alt="Bericht rapporteren" class="edit-icon"/></button>
    </nav>
    <section class="profile-content">
      <div class="profile-name">
        <avatar class="on-profile-page" :user="user"></avatar>
        <h1>{{ user.username }}</h1>
      </div>
      <p :v-if="user.profile.bio" class="bio">{{ user.profile.bio }}</p>

      <button @click="editInfo = true" v-if="isOwnProfile && !editInfo">
        <span>Wijzigen</span>
      </button>
      <button @click="editInfo = false" v-else-if="isOwnProfile && editInfo">
        <span>Annuleren</span>
      </button>

      <div v-if="isOwnProfile && editInfo">
        <input type="text" v-model="changeUser.username" placeholder="Gebruikersnaam">
        <input type="email" v-model="changeUser.email" placeholder="E-mail adres">

        <input type="text" v-model="changeUser.profile.first_name" placeholder="Voornaam">
        <input type="text" v-model="changeUser.profile.last_name" placeholder="Achternaam">
        <textarea placeholder="Over mij" v-model="changeUser.profile.bio"></textarea>

        <button @click="updateUserInfo"><span>Opslaan</span></button>
      </div>

      <div v-if="!isOwnProfile">
        <button @click="unfollowUser" v-if="user.following"><span>Ontvolgen</span></button>
        <button @click="followUser" v-else><span>Volg</span></button>
      </div>

      <hr>
      <ul class="profile-followers">
        <li class="follows">Volgt: {{ user.following_count }}</li>
        <li class="followers">Volgers: {{ user.follower_count }}</li>
      </ul>

      <h3>Interesses</h3>
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

      <hr>

      <h3>Jou berichten...</h3>


      <router-link :to="{name: 'Logout'}" v-if="isOwnProfile">Uitloggen</router-link>
    </section>
  </div>
</template>

<script src="./Profile.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Profile.vue.scss"></style>
