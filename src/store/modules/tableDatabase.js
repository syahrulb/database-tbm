import restoCatering from '@/data/restoCatering'
import penginapan from '@/data/penginapan'
import alat from '@/data/alat'
import kendaraan from '@/data/kendaraan'
import percetakan from '@/data/percetakan'
import alatmedis from '@/data/medis'
import axios from '@/axios'

const state = {
    database: null,
    kategory : null,
    field_umum: [],
    field_data: [],
    data : []
}
const mutations = {
    'set_nameDatabase'(state, nama) {
        state.database = nama + '.json';
        state.kategory = nama;
    },
    'set_fielDatabase'(state, data) {
        state.field_umum = data.umum.map(function (item) {
            return {
                text: item.label,
                value: item.name
            };
        });
        state.field_data = data.data;
        state.field_umum.push({
            text: 'aksi', value: 'data-table-expand'
        })
    },
    'set_fieldData_umum'(state, datas) {
        if (datas) {
            for (const item of Object.values(datas)){
                state.data.push(item);
            }
        }
    },
}
const actions = {
    initDatabase: ({
        commit
    }, judul) => {
        commit('set_nameDatabase', judul);
        if (judul == 'resto') {
            commit('set_fielDatabase', restoCatering);
        }
        else if (judul == 'penginapan') {
            commit('set_fielDatabase', penginapan);
        }
        else if (judul == 'alat') {
            commit('set_fielDatabase', alat);
        }
        else if (judul == 'kendaraan') {
            commit('set_fielDatabase', kendaraan);
        }
        else if (judul == 'percetakan') {
            commit('set_fielDatabase', percetakan);
        }
        else if (judul == 'alatmedis') {
            commit('set_fielDatabase', alatmedis);
        }   
    },
    redeclareData: ({commit})=>{
        return new Promise((resolve, reject) => {
            axios.get(state.database)
                .then(res => {
                    resolve(res);
                    commit('set_fieldData_umum',res.data);
                })
                .catch(error => {
                    reject(error);
                })
        });
    }

}
const getters = {
    field_umum(state) {
        return state.field_umum;
    },
    field_data(state) {
        return state.field_data;
    },
    database(state) {
        return state.database;
    },
    kategory(state) {
        return state.kategory;
    },
    get_data_umum(state){
        return state.data;
    }
}
export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true,
}