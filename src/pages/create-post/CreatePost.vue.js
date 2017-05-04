import store from '@/store'
import router from '@/router'
import Modal from '@/components/modal/Modal'
import { mapActions } from 'vuex'
import config from '@/config/config'

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
      stream: [],
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

      let call_data = new FormData()

      call_data.append('type', 'text')
      call_data.append('user_id', 1)
      call_data.append('category_id', this.category)
      call_data.append('body', this.body)

      if (this.post_type === 'voice') {
        call_data.set('type', 'audio')
        call_data.delete('body')
        call_data.set('audio', this.audioBlob, "audio.ogg")
      }

      // make the call
      this.placePost(call_data)
        .then(() => {
          this.$toasted.success('Wohoo! Het bericht is geplaatst!')
          router.push({name: 'Home'});
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

        // check for browsersupport for mimeType
        // let mimeType = 'audio/ogg'

        let mimeType
        if (MediaRecorder.isTypeSupported('audio/ogg')) {
          mimeType = 'audio/ogg'
        } else if (MediaRecorder.isTypeSupported('audio/webm')) {
          mimeType = 'audio/webm'
        } else if (MediaRecorder.isTypeSupported('audio/wav')) {
          mimeType = 'audio/wav'
        } else {
          mimeType = 'audio/ogg'
          console.log('not supported')
        }

        // check for browser support for getUserMedia
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia
        navigator.getUserMedia({
          audio: true,
          video: false
        }, (stream) => { // success
          this.stream = stream

          this.audioRecorder = new MediaRecorder(this.stream, {
            mimeType: mimeType,
            audioBitsPerSecond : 96000
          })

          this.audioRecorder.start()

          if (config.debug) {console.log('Media recorder started')}

          this.audioRecorder.ondataavailable = (event) => {
            this.recordingData.push(event.data)
          }
          this.audioRecorder.onstop = (event) => {

            this.audioBlob = new Blob(this.recordingData, {type: mimeType})
            this.dataUrl = window.URL.createObjectURL(this.audioBlob)
            this.firstRecord = false
            this.isPlaying = false

          }

        }, (error) => { // error
          console.log(JSON.stringify(error))
        })
      }
      else {
        this.stopRecording()
      }
    },

    stopRecording() {
      let track = this.stream.getTracks()[0];
      track.stop();
      this.audioRecorder.stop()
    },

    togglePlay() {

      let audioElement = document.getElementById("audio")
      if (this.isPlaying) {
        if (config.debug) {console.log('pause')}
        audioElement.pause()
      } else {
        if (config.debug) {console.log('play')}
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
