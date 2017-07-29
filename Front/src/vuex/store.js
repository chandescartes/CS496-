import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = {
    state: {
        currentStage: 0,
    },
    mutations: {
        updateStage (state, stage) {
            state.currentStage = stage;
        },
    },
    actions: {
        updateStage ({ commit }, stage) {
            commit('updateStage', stage);
        },
    },
};

export default new Vuex.Store(store);
