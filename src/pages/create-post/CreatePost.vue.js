import store from '@/store'
import Modal from '@/components/modal/Modal'
import { mapActions } from 'vuex'

export default {
  name: 'createPost',
  data () {
    return {
      body: undefined,
      category: 0,
      anonymity: false,
      categories: [],
      post_type: 'choose',
      firstRecord: true,
      isRecording: false,
      isPlaying: false,
      audioRecorder: null,
      recordingData: [],
      dataUrl: '',

      showTextModal: false,
      showVoiceModal: false,
      modalTextData: {
        id: 1,
        type: 'default ask-modal',
        title: 'Vraag stellen?',
        submit: true,
        submitText: 'Bericht plaatsen',
        cancel: true,
        cancelText: 'Annuleren'
      },
      modalVoiceData: {
        id: 2,
        type: 'default ask-modal',
        title: 'Stembericht plaatsen?',
        submit: true,
        submitText: 'Bericht plaatsen',
        cancel: true,
        cancelText: 'Annuleren'
      }
    }
  },
  computed: {

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
          // add a choose a category option
          this.categories.unshift({name: 'Plaatsen in...', id: 0, disabled: true})
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

      let call_data = {
        type: 'text',
        user_id: 1,
        category_id: this.category,
        body: this.body
      }

      if (this.post_type === 'voice') {
        call_data.type = 'audio'
        delete call_data.body
        call_data.audio = this.audioBlob
      }

      console.log(call_data)
      console.log(this.audioBlob)

      // make the call
      this.placePost(call_data)
        .then(() => {
          console.log('success')
        })
        .catch((error) => {
          console.log(error.response.data.errors)
        })
    },

    toggleRecording() {
      this.isRecording = !this.isRecording

      if (this.isRecording) {
        this.recordingData = []
        this.dataUrl = ''

        // check for browsersupport for mimeType
        let mimeType
        if (MediaRecorder.isTypeSupported('audio/ogg')) {
          mimeType = 'audio/ogg'
        } else if (MediaRecorder.isTypeSupported('audio/webm')) {
          mimeType = 'audio/webm'
        } else if (MediaRecorder.isTypeSupported('audio/wav')) {
          mimeType = 'audio/wav'
        } else {
          console.log('not supported')
        }
        console.log(mimeType)

        // check for browser support for getUserMedia
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia
        navigator.getUserMedia({
          audio: true,
          video: false
        }, (stream) => { // success
          this.stream = stream

          this.audioRecorder = new MediaRecorder(stream, {
            mimeType: mimeType,
            audioBitsPerSecond : 96000
          })

          this.audioRecorder.start()

          console.log('Media recorder started')

          this.audioRecorder.ondataavailable = (event) => {
            this.recordingData.push(event.data)
          }
          this.audioRecorder.onstop = (event) => {
            this.audioBlob = new Blob(this.recordingData, { type: 'audio/ogg'})
            this.dataUrl = window.URL.createObjectURL(this.audioBlob)
            this.firstRecord = false
            this.isPlaying = false
          }

        }, (error) => { // error
          console.log(JSON.stringify(error))
        })
      }
      else {
        this.audioRecorder.stop()
      }
    },

    togglePlay() {

      let audioElement = document.getElementById("audio")
      if (this.isPlaying) {
        console.log('pause')
        audioElement.pause()
      } else {
        console.log('play')
        audioElement.play()
      }
        this.isPlaying = !this.isPlaying
    },

    // set the post type to given name, and clean this.post if type is different then current type
    setPostType(type) {
      if(type !== this.post_type) {this.post = {}}
      this.post_type = type
    },

    // Focus and blur functions to hide the navbar
    focusInput(e) {
       e.srcElement.classList.add('focussed')
      document.querySelector('#app').classList.add('input-focussed')
    },

    blurInput(e) {
       e.srcElement.classList.remove('focussed')
      document.querySelector('#app').classList.remove('input-focussed')
    }
  },

  components: {
    Modal
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