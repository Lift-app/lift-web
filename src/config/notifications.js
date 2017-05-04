import Vue from 'vue'
import Toasted from 'vue-toasted'

const toastOptions = {
  position: 'bottom-right',
  duration: 5000,
  className: 'lift'
}

Vue.use(Toasted, toastOptions)
