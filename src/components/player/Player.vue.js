export default {
  name: 'player',
  props: {
    data: {}
  },
  data() {
    return {
      id: {
        'Progress': '.progress-bar',
        'Duration': '.max-time',
        'Pause':    '.button-pause',
        'Play':     '.button-play',
        'Audio':    'audio'
      },
      el: {},
    }
  },
  methods: {
    _pop(object) {
      let key = Object.keys(object).pop()
      return {
        key: key,
        value: object[key],
        remainder: (delete object[key], object)
      }
    },
    _controls(accumulator, container, object) {
      let item = this._pop(object)
      accumulator[item.key] = container.querySelector(item.value)
      return Object.keys(object).length
        ? this._controls.apply(null, [accumulator, container, item.remainder])
        : accumulator
    },
    _container(node) {
      return node.classList.contains('player')
        ? node
        : this._container(node.parentElement)
    },
    _meta(event) {
      return this._controls({}, this._container(event.currentTarget || event), JSON.parse(JSON.stringify(this.id)))
    },
    _duration(controls) {
      return Math.floor(controls.Audio.duration)
    },
    _current(controls) {
      return Math.floor(controls.Audio.currentTime)
    },
    _timestamp(number) {
      let mod = number % 60
      return `${Math.floor(number / 60)}:${mod < 10 ? `0${mod}` : mod}`
    },
    _switch(controls) {
      controls.Audio.paused ? controls.Audio.play() : controls.Audio.pause()
      controls.Pause.classList.toggle('active')
      controls.Play.classList.toggle('active')
    },
    haltAction(event) {
      event.stopImmediatePropagation();
    },
    initState(event) {
      let controls = this._meta(event)
      let current  = this._current(controls)
      let duration = this._duration(controls)
      controls.Duration.innerHTML = this._timestamp(duration)
      controls.Progress.value     = current
      controls.Progress.max       = duration
    },
    switchState(event) {
      let controls = this._meta(event)
      this._switch(controls)
    },
    updateState(event) {
      let controls = this._meta(event)
      let current  = this._current(controls)
      let duration = this._duration(controls)
      controls.Duration.innerHTML = this._timestamp(duration)
      controls.Progress.value     = current
    },
    resetState(event) {
      let controls = this._meta(event)
      let duration = this._duration(controls)
      controls.Play.classList.add('active')
      controls.Pause.classList.remove('active')
      controls.Duration.innerHTML = this._timestamp(duration)
    },
    progressBarUpdate(event) {
      let controls = this._meta(event)
      controls.Audio.currentTime = controls.Progress.value
    }
  }
}
