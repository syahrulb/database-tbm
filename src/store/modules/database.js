import restoCatering from '@/data/restoCatering'
const state = {
    database: null,
    field_umum    : [],
    field_data    : [],
    kategory : null
}
const mutations = {
    'set_fielDatabase'(state, data) {
        state.field_umum = data.umum;
        state.field_data = data.data;
    },
    'set_nameDatabase'(state, nama) {
        state.database = nama + '.json';
        state.kategory = nama;
    },
}
const actions = {
    initDatabase: ({
        commit
    }) => {
        commit('set_fielDatabase', restoCatering);
        commit('set_nameDatabase', 'resto');
    },
}
const getters = {
    field_umum(state){
        return state.field_umum;
    },
    field_data(state) {
        return state.field_data;
    },
    database(state){
        return state.database;
    },
    kategory(state) {
        return state.kategory;
    }
}
export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true,
}