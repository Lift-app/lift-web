export default {
  name: 'player',
  props: {
    url: {}
  },
  mounted() {
    this.$ = {
      id: { 'TAudio': 'audio'
          , 'BPlay': '.button-play'
          , 'BPause': '.button-pause'
          , 'PBar': '.progress-bar'
          , 'CTime': '.current-time'
          , 'MTime': '.max-time'
      },
      fn: {
        timestamp: (number) => {
          let mod = number % 60
          return `${Math.floor(number / 60)}:${mod < 10 ? `0${mod}` : mod}`
        },
      },
      el: {},
    }
  },
  methods: {
    haltAction(event) {
      // Using the Player doesn't open the card
      event.stopImmediatePropagation();
    },
    switchState(event) {
      // Pop a {key:value} pair off of a object. The return object
      // consists of the key and value pair, as well as the remainder.
      const pop = (object) => {
        let key = Object.keys(object).pop()
        return {
          key: key,
          value: object[key],
          remainder: (delete object[key], object)
        }
      }

      const controls = (accumulator, container, object) => {
        let item = pop(object)
        accumulator[item.key] = container.querySelector(item.value)
        return Object.keys(object).length
          ? controls.apply(null
            , [ accumulator
              , container
              , item.remainder])
          : accumulator
      }

      // Determine the relevant audio container and controls by recursively
      // looking for our parent.
      const container = (node) => {
          return node.classList.contains('player')
            ? node
            : container(node.parentElement)
      }

      Object.assign( this.$.el
                   , controls( {}
                             , container(event.target)
                             , this.$.id))

      this.$.el.TAudio.paused
        ? this.$.el.TAudio.play()
        : this.$.el.TAudio.pause()

      this.$.el.BPause.classList.toggle('active')
      this.$.el.BPlay.classList.toggle('active')
    },
    updateState(_event) {
      const CTime = Math.floor(this.$.el.TAudio.currentTime),
            MTime = Math.floor(this.$.el.TAudio.duration)

      console.log(CTime, MTime)

      this.$.el.CTime.innerHTML = this.$.fn.timestamp(CTime)
      this.$.el.MTime.innerHTML = this.$.fn.timestamp(MTime)
      this.$.el.PBar.value      = CTime

      // Move this to a initState.
      this.$.el.PBar.max        = MTime
      this.$.el.PBar.min        = 0
      this.$.el.PBar.step       = 1
    },
    resetState(_event) {
      const MTime = Math.floor(this.$.el.TAudio.duration)

      this.$.el.BPlay.classList.add('active')
      this.$.el.BPause.classList.remove('active')
      this.$.el.MTime.innerHTML = this.$.fn.timestamp(MTime)
    },
    progressBarUpdate(_event) {
      this.$.el.TAudio.currentTime = this.$.el.PBar.value
    }
  }
}
