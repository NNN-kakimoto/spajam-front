export default class {
  constructor(key) {
    this.key = key
    this.data = 0
  }
  init() {
    this.data = localStorage.getItem(this.key) || 0
  }
  save() {
    localStorage.setItem(this.key, parseInt(this.data))
  }
  regist(payload) {
    this.data = parseInt(payload)
    this.save()
  }
  remove() {
    // this.data = payload
    this.data = 0
    this.save()
  }
}
