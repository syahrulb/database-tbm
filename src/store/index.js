import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token : null,
    user : null
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    isAuthenticated(state) {
      return state.token !== null
    }
  },
  modules: {
  },
})
