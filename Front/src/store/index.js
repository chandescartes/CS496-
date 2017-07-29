import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = {
    state: {
        currentLesson: 0,
        lessons: [
            { title: 'Welcome', timeLeft: '15', route: '/' },
            { title: 'Staff Notation', timeLeft: '12', route: '/lesson1' },
            { title: 'Pitch', timeLeft: '09', route: '/lesson1' },
            { title: 'Duration', timeLeft: '06', route: '/lesson1' },
            { title: 'Beat', timeLeft: '03', route: '/lesson1' },
        ],
    },
    getters: {
        getCurrentLesson: state => state.lessons[state.currentLesson],
    },
    mutations: {
        updateLesson (state, lesson) {
            state.currentLesson = lesson;
        },
    },
    actions: {
        updateLesson ({ commit }, lesson) {
            commit('updateLesson', lesson);
        },
    },
};

export default new Vuex.Store(store);
