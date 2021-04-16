import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users: [],
        details: []
    },
    mutations: {
        setUsers: (state, payload) => {
            state.users = payload;
        },
    },
    actions: {
        setUserAction: (state, payload) => {
            state.commit('setUsers', payload);
        },
    },
    modules: {
    },
    getters: {
        getListOfUsers: (state) => state.users,
    },
});