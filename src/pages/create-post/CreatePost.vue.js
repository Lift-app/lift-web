import store from '@/store'
import router from '@/router'
import Modal from '@/components/modal/Modal'
import { mapActions } from 'vuex'
import config from '@/config/config'
import vSelect from 'vue-select'

export default {
  name: 'createPost',
  data () {
    return {
      body: '',
      category: 0,
      anonymous: false,
      categories: [],
      post_type: 'choose',
      firstRecord: true,
      isRecording: false,
      stream: [],
      isPlaying: false,
      audioRecorder: null,
      recordingData: [],
      dataUrl: '',
      audioType: 'ogg',

      showTextModal: false,
      showVoiceModal: false,
      modalTextData: {
        id: 1,
        type: 'default ask-modal',
        title: 'Bericht plaatsen?',
        submit: true,
        submitText: 'Bericht plaatsen',
        cancel: true,
        cancelText: 'Annuleren'
      },
      modalVoiceData: {
        id: 2,
        type: 'default ask-modal',
        title: 'Bericht plaatsen?',
        submit: true,
        submitText: 'Bericht plaatsen',
        cancel: true,
        cancelText: 'Annuleren'
      }
    }
  },
  methods: {
    ...mapActions({
      fetchCategories: 'getCategories',
      placePost: 'placePost'
    }),

    getCategories() {
      this.fetchCategories()
        .then(() => {
          this.categories = store.state.categories
        })
    },

    createPost() {
      if (this.post_type === 'text') {
        this.showTextModal = true
      } else if (this.post_type === 'voice') {
        this.showVoiceModal = true
      }
      // todo: check if valid
    },

    sendPost() {
      let formData = new FormData()

      formData.append('type', 'text')
      formData.append('user_id', 1)
      formData.append('category_id', this.category.id)
      formData.append('body', this.body)
      formData.append('anonymous', this.anonymous)

      if (this.post_type === 'voice') {
        formData.set('type', 'audio')
        formData.delete('body')
        formData.set('audio', this.audioBlob, `audio.${this.audioType}`)
      }

      // make the call
      this.placePost(formData)
        .then((postId) => {
          this.$toasted.success('Wohoo! Het bericht is geplaatst!')
          router.push({name: 'Post', params: {id: postId}})
        })
        .catch((error) => {
          this.$toasted.error('Er ging wat mis. Probeer opnieuw!')
          console.log(error)
        })
    },

    toggleRecording() {
      this.isRecording = !this.isRecording

      if (this.isRecording) {
        this.recordingData = []
        this.dataUrl = ''

        if (MediaRecorder.isTypeSupported('audio/ogg')) {
          this.audioType = 'ogg'
        } else if (MediaRecorder.isTypeSupported('audio/webm')) {
          this.audioType = 'webm'
        } else {
          this.$toasted.error('Audio opnemen wordt niet ondersteund in deze browser!')
          return
        }
        const mimeType = `audio/${this.audioType}`

        // check for browser support for getUserMedia
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia
        navigator.getUserMedia({
          audio: true,
          video: false
        }, (stream) => { // success
          this.stream = stream

          this.audioRecorder = new MediaRecorder(this.stream, {
            mimeType: mimeType,
            audioBitsPerSecond: 96000
          })

          this.audioRecorder.start()

          if (config.debug) console.log('Media recorder started')

          this.audioRecorder.ondataavailable = (event) => {
            this.recordingData.push(event.data)
          }

          this.audioRecorder.onstop = (event) => {
            this.audioBlob = new Blob(this.recordingData, {type: mimeType})
            this.dataUrl = window.URL.createObjectURL(this.audioBlob)
            this.firstRecord = false
            this.isPlaying = false
          }
        }, (error) => {
          this.$toasted.error('Er ging wat mis. Probeer opnieuw!')
          console.log(error)
        })
      } else {
        this.stopRecording()
      }
    },

    stopRecording() {
      let track = this.stream.getTracks()[0]
      track.stop()
      this.audioRecorder.stop()
    },

    togglePlay() {
      let audioElement = document.getElementById('audio')
      if (this.isPlaying) {
        if (config.debug) { console.log('pause') }
        audioElement.pause()
      } else {
        if (config.debug) { console.log('play') }
        audioElement.play()
      }
      this.isPlaying = !this.isPlaying
    },

    // set the post type to given name, and clean this.post if type is different then current type
    setPostType(type) {
      if (type !== this.post_type) { this.post = {} }
      this.post_type = type
    },

    // Focus and blur functions to hide the navbar
    focusInput(e) {
      e.target.classList.add('focussed')
      document.querySelector('#app').classList.add('nav-hidden')
    },

    blurInput(e) {
      e.target.classList.remove('focussed')
      document.querySelector('#app').classList.remove('nav-hidden')
    }
  },

  components: {
    Modal,
    vSelect
  },

  created() {
    this.getCategories()

    this.$on('hideModal', () => {
      this.showTextModal = false
      this.showVoiceModal = false
    })
    this.$on('submitModal', (data) => {
      this.showTextModal = false
      this.showVoiceModal = false
      this.sendPost()
    })
  }
}
