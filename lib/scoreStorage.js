export default class {
  constructor(key) {
    this.key = key
    this.data = 0
  }
  init() {
    this.data = localStorage.getItem(this.key) || 0
  }
  save() {
    localStorage.setItem(this.key, JSON.stringify(this.data))
  }
  regist(payload) {
    this.data = payload
    this.save()
  }
  remove(payload) {
    // this.data = payload
    this.data = 0
    this.save()
  }
}
