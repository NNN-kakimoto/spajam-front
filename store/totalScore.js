import LocalStorage from '~/lib/totalScoreStorage'

const storageScore = new LocalStorage('totalScore')

export const state = () => ({
  data: 0
})

export const mutations = {
  dataUpdate(state, payload) {
    state.data = payload
  }
}

export const actions = {
  nuxtClientInit({ commit }) {
    storageScore.init()
    commit('dataUpdate', storageScore.data)
  },
  regist({ commit }, payload) {
    storageScore.regist(payload)
    commit('dataUpdate', storageScore.data)
  },
  remove({ commit }, payload) {
    storageScore.remove(payload)
    commit('dataUpdate', storageScore.data)
  }
}