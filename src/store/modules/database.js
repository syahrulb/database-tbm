import restoCatering from '@/data/restoCatering'
import penginapan from '@/data/penginapan'
import alat from '@/data/alat'
import kendaraan from '@/data/kendaraan'
import percetakan from '@/data/percetakan'
import alatmedis from '@/data/medis'
import axios from '@/axios'

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
    changeDatabase({commit},kategory) {
        commit('set_nameDatabase', kategory);
        if (kategory== 'resto'){
            commit('set_fielDatabase', restoCatering);
        }
        else if (kategory == 'penginapan') {
            commit('set_fielDatabase', penginapan);
        }
        else if (kategory == 'alat') {
            commit('set_fielDatabase', alat);
        }
        else if (kategory == 'kendaraan') {
            commit('set_fielDatabase', kendaraan);
        }
        else if (kategory == 'percetakan') {
            commit('set_fielDatabase', percetakan);
        }
        else if (kategory == 'alatmedis') {
            commit('set_fielDatabase', alatmedis);
        }    
    },
     SimpanToFirebase({
            getters,
            // rootGetters
        }, data) {
        return new Promise((resolve, reject) => {
            console.log(data);
            axios.post(getters.database , data)
                .then(res => {
                    resolve({
                        id : res,
                        value : {
                            data :{
                                results :{
                                    message : 'Data berhasil tersimpan'
                                }
                            }
                        }
                    })
                })
                .catch(error => {
                    reject({error,
                        response :{
                            data: {
                                results : {
                                    message : 'Data belum tersimpan'
                                }
                            }
                        }
                    });
                })
        });
    }
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