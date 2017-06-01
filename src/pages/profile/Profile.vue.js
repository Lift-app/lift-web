import store from '@/store'
import router from '@/router'
import Avatar from '@/components/avatar/Avatar'
import { mapActions } from 'vuex'

export default {
  name: 'profile',
  data() {
    return {
      user: {
        profile: {},
        interests: []
      },
      changeUser: {
        profile: {}
      },
      changeInterests: [],
      isOwnProfile: false,
      loading: false,
      editInfo: false,
      categories: []
    }
  },

  methods: {
    ...mapActions({
      actionGetCurrentUser: 'getCurrentUser',
      actionGetUser: 'getUser',
      actionGetCategories: 'getCategories',
      actionUpdateUser: 'updateUser',
      actionFollowUser: 'followUser',
      actionUnfollowUser: 'unfollowUser'
    }),

    loadUser() {
      this.loading = true
      this.actionGetUser(this.$route.params.username)
        .then(() => {
          this.user = store.state.profile
          this.actionGetCurrentUser()
            .then(() => {
              this.isOwnProfile = store.state.user.id === store.state.profile.id
              if (this.isOwnProfile) {
                this.prepareChanges()
              }
            })

          this.loading = false
        })
        .catch(() => {
          router.push({name: '404'})
        })
    },

    prepareChanges() {
      this.changeUser = store.state.user

      if (this.changeUser.interests.length) {
        this.changeInterests = this.changeUser.interests.map(interest => interest.id)
      }
    },

    followUser() {
      this.actionFollowUser(this.user.id)
    },

    unfollowUser() {
      this.actionUnfollowUser(this.user.id)
    },

    updateUserInfo() {
      const {username, email, password, profile} = this.changeUser
      const changes = {
        username: username,
        email: email,
        password: password,
        profile_info: Object.keys(profile).length === 0  ? undefined : this.formatProfile(profile)
      }

      this.actionUpdateUser(changes)
        .then(() => {
          localStorage.username = username
          router.push({name: 'Profile', params: {username: username}})
        })
    },

    formatProfile(profile) {
      return Object.entries(profile).reduce((acc, [key, value]) => {
        if (value) {
          acc.push({
            field: key,
            value: value,
            public: true
          })
        }

        return acc
      }, [])
    },

    isInterested(category) {
      return this.user.interests.findIndex(interest => interest.id === category.id) !== -1
    }
  },

  mounted() {
    this.actionGetCategories()
      .then(() => this.categories = store.state.categories)
    this.loadUser()
  },

  components: {
    Avatar
  }
}
