import Vue from 'vue'
import Vuex from 'vuex'
import listDatabase from '@/data/listDatabase'
import database from './modules/database'
import tableDatabase from './modules/tableDatabase'
import axios from '@/axios/auth'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      email: null,
    },
    token : null,
    listDatabase :{},
  },
  mutations: {
    'set_listDatabase'(state, data) {
      state.listDatabase = data;
    },
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.email = data;
      localStorage.setItem('email', data);
    },
    SET_TOKEN(state, token){
      state.token = token;
      localStorage.setItem('token', token);
    },
    'redeclare_login'(state) {
      if (state.token == null) {
        state.token = localStorage.getItem('token');
        state.user.email = localStorage.getItem('email');
        state.user.loggedIn = true;
      }
    },
    'clear_auth'(state) {
      state.token = null;
      state.user.loggedIn = false;
      state.user.email = null;
      localStorage.removeItem("token");
      localStorage.removeItem("email");
    },
  },
  actions: {
    initListDatabase: ({
      commit
    }) => {
      commit('set_listDatabase', listDatabase);
    },
    tryAutoLogin({
      commit
    }) {
      const token = localStorage.getItem('token');
      if (!token) {
        return
      } else {
        commit('redeclare_login');
      }
    },
    login({
      commit
    }, authData) {
      return new Promise((resolve, reject) => {
        axios.post('accounts:signInWithPassword?key=AIzaSyCZTTEcH8Avq3kxt4xod96Hwe_jSXqtemI', authData)
          .then(res => {
            commit('SET_LOGGED_IN', true);
            commit("SET_USER", res.data.email);
            commit("SET_TOKEN", res.data.idToken);
            resolve(res)
          })
          .catch(error => {
            reject(error);
          })
      });
    },
    logout({
      commit
    }) {
      commit('clear_auth');
    },
    
  },
  getters: {
    isAuthenticated(state) {
      return state.user.loggedIn;
    },
    checkEmtyListDatabase(state){
      return Object.keys(state.listDatabase).length === 0
    },
    getListDatabase(state){
      return state.listDatabase
    },
    user(state) {
      return state.user
    },
    getToken(state){
      return state.token
    }
  },
  modules: {
    database,
    tableDatabase
  },
})
