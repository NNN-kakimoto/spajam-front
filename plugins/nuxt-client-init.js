export default ({ store }) => {
  for (const key in store._actions) {
    if (key.match(/nuxtClientInit/)) {
      store.dispatch(key)
    }
  }
}
