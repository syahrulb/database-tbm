import Vue from 'vue'
import Vuex from 'vuex'
import database from './modules/database'
import listDatabase from '@/data/listDatabase'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token : null,
    user : null,
    listDatabase :{}
  },
  mutations: {
    'set_listDatabase'(state, data) {
      state.listDatabase = data;
    },
  },
  actions: {
    initListDatabase: ({
      commit
    }) => {
      commit('set_listDatabase', listDatabase);
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.token !== null
    },
    checkEmtyListDatabase(state){
      return Object.keys(state.listDatabase).length === 0
    },
    getListDatabae(state){
      return state.listDatabase
    }
  },
  modules: {
    database
  },
})
