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
      editInterests: false,
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

    normalizedCategory(name) {
      return name.toLowerCase().replace(/\s/g, '-')
    },

    goToCategory(category) {
      const lowercaseCategory = category.toLowerCase()
      router.push({
        name: 'CategoryPosts',
        params: {
          category: lowercaseCategory,
          backRoute: this.$route
        }
      })
    },

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

    goBack() {
      let backRoute = this.$route.params.backRoute
      if (backRoute) {
        router.push({
          name: backRoute.name,
          params: backRoute.params
        })
      } else {
        router.push({name: 'VoorJou'})
      }
    },

    prepareChanges() {
      this.changeUser = store.state.user

      if (this.changeUser.interests.length) {
        this.changeInterests = this.changeUser.interests.map(interest => interest.id)
        console.log(this.changeInterests)
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
        password: password
      }

      this.actionUpdateUser(changes)
        .then(() => {
          localStorage.username = username
          router.push({name: 'Profile', params: {username: username}})
          this.loadUser()
          this.editInfo = false
        })
    },

    updateInterests() {
      const changes = {
        categories: this.changeInterests.length === 0 ? undefined : this.changeInterests
      }

      if (changes.categories) {
        this.actionUpdateUser(changes)
          .then(() => {
            this.loadUser()
            this.editInterests = false
          })
      } else {
        this.$toasted.error('Je moet minimaal één categorie interessant vinden!')
        return
      }
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

    addInterest(categoryId) {
      this.changeInterests.push(categoryId)
    },

    removeInterest(categoryId) {
      const index = this.changeInterests.indexOf(categoryId)

      if (index !== -1) {
        this.changeInterests.splice(index, 1)
      }
    },

    isInterested(categoryId) {
      return this.changeInterests.includes(categoryId)
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
