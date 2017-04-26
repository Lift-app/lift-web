import store from '@/store'
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

      isRecording: false,
      audioRecorder: null,
      recordingData: [],
      dataUrl: ''
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

    makePost() {
      this.placePost({
        user_id: 1,
        category_id: this.post.category,
        body: this.post.body
      })
        .then(() => {

        })
        .catch((error) => {
          console.log(error.response.data.errors)
        })
    },

    toggleRecording() {
      this.isRecording = !this.isRecording;

      if (this.isRecording) {

        // check for browsersupport for mimeType
        let mimeType;
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
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        navigator.getUserMedia({
          audio: true,
          video: false
        }, (stream) => { // success
          this.stream = stream;

          this.audioRecorder = new MediaRecorder(stream, {
            mimeType: mimeType,
            audioBitsPerSecond : 96000
          })

          this.audioRecorder.start();

          console.log('Media recorder started');

          this.audioRecorder.ondataavailable = (event) => {
            this.recordingData.push(event.data)
          }
          this.audioRecorder.onstop = (event) => {
            let blob = new Blob(this.recordingData, { type: 'audio/webm'});
            this.dataUrl = window.URL.createObjectURL(blob);
          }

        }, (error) => { // error
          console.log(JSON.stringify(error));
        });
      }
      else {
        this.audioRecorder.stop();
      }
    },

    removeRecording() {
      this.isRecording = false;
      this.recordingData = [];
      this.dataUrl = '';
    },
    togglePlay() {
      console.log('play')
      let audioElement = document.getElementById("audio");
      if (audioElement.paused === false) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
    },

    // set the post type to given name, and clean this.post if type is different then current type
    setPostType(type) {
      if(type !== this.post_type) {this.post = {}}
      this.post_type = type
    }
  },
  created() {
    this.getCategories()
  }
}