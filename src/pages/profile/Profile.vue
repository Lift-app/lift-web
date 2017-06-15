<template>
  <div class="page--profile">
    <nav>
      <button @click="goBack" class="btn btn-back" aria-label="Naar vorige pagina"><img src="../../assets/images/icons/arrow-left-lift.svg" alt="Terug"> <span>Terug</span></button>
      <!--<button class="edit" aria-label="rapporteren"><span>Bewerken</span><img src="../../assets/images/icons/gear-lift.svg" alt="Account instellingen" class="edit-icon"/></button>-->
    </nav>
    <section class="profile-content">
      <div class="profile-content-inner">
      <div class="profile-name">
        <avatar class="on-profile-page" :user="user"></avatar>
        <h2>{{ user.username }}</h2>
      </div>
      <p v-if="user.profile.bio" class="bio">{{ user.profile.bio }}</p>
      <p v-else class="bio no-bio"><span class="capitalize">{{ user.username }}</span> heeft nog geen profiel omschrijving geschreven...</p>

        <div class="change-section">
          <button class="btn small btn-edit-content" @click="editInfo = true" v-if="isOwnProfile && !editInfo">
            <span>Wijzigen</span>
          </button>
          <button class="btn small btn-edit-content" @click="editInfo = false" v-else-if="isOwnProfile && editInfo">
            <span>Annuleren</span>
          </button>
        </div>

      <div class="change-section-active" v-if="isOwnProfile && editInfo">
        <input type="text" v-model="changeUser.username" placeholder="Gebruikersnaam">
        <input type="email" v-model="changeUser.email" placeholder="E-mailadres">
        <input type="text" v-model="changeUser.profile.first_name" placeholder="Voornaam">
        <input type="text" v-model="changeUser.profile.last_name" placeholder="Achternaam">
        <textarea placeholder="Over mij" v-model="changeUser.profile.bio"></textarea>

        <button class="btn small save-changes" @click="updateUserInfo"><span>Opslaan</span></button>
      </div>

      <div class="follow" v-if="!isOwnProfile">
        <button class="btn btn-follow" @click="unfollowUser" v-if="user.following"><img src="../../assets/images/icons/minus-icon-lift.svg" alt="Volgen"> <span>Ontvolgen</span></button>
        <button class="btn btn-follow" @click="followUser" v-else><img src="../../assets/images/icons/plus-icon-lift.svg" alt="Volgen"> <span>Volgen</span></button>
      </div>

      <hr>

      <ul class="profile-followers">
        <li class="follows">Volgt: {{ user.following_count }}</li>
        <li class="followers">Volgers: {{ user.follower_count }}</li>
      </ul>

      <h3>Interesses</h3>
      <div class="change-section">
      <button class="btn small btn-edit-content" @click="editInterests = true" v-if="isOwnProfile && !editInterests">
        <span>Wijzigen</span>
      </button>
      <button class="btn small btn-edit-content" @click="editInterests = false" v-else-if="isOwnProfile && editInterests">
        <span>Annuleren</span>
      </button>
      </div>

      <section class="cat-section">

        <ul class="categories" v-if="!editInterests">
          <li v-for="interest in user.interests">
            <span class="category-item" :class="normalizedCategory(interest.name)">
              <span class="category mousedown">
                <span>{{ interest.name }}</span>
              </span>
            </span>
          </li>
        </ul>

        <div v-if="isOwnProfile && editInterests">
          <ul class="categories">
            <li v-for="category in categories">
              <span v-if="isInterested(category.id)"
                    :id="category.name"
                    @click="removeInterest(category.id)"
                    :class="normalizedCategory(category.name)"
                    class="active category-item">
                <span class="category mousedown">
                  <span>{{ category.name }}</span>
                </span>
              </span>
              <span v-else
                    class="category-item"
                    :id="category.name"
                    @click="addInterest(category.id)"
                    :class="normalizedCategory(category.name)">
                <span class="category mousedown">
                  <span>{{ category.name }}</span>
                </span>
              </span>
            </li>
          </ul>
          <div class="save-changes-container">
            <button class="btn small save-changes" @click="updateInterests"><span>Opslaan</span></button>
          </div>
        </div>
      </section>

      <!--<hr>-->

      <!--<h3>Jou berichten...</h3>-->

      <hr>

        <div class="signout-section">
          <router-link class="btn small btn-sign-out" :to="{name: 'Logout'}" v-if="isOwnProfile">Uitloggen</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script src="./Profile.vue.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./Profile.vue.scss"></style>
