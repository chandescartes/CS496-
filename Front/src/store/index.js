import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = {
    state: {
        currentLesson: 0,
        language: 'kor',
        lessons: {
            kor: [
                { title: '환영합니다', timeLeft: '15', route: '/' },
                { title: '음을 표시하는 법', timeLeft: '12', route: '/lesson1' },
                { title: '음의 높이', timeLeft: '09', route: '/lesson1' },
                { title: '음의 길이', timeLeft: '06', route: '/lesson1' },
                { title: '박자', timeLeft: '03', route: '/lesson1' },
            ],
            eng: [
                { title: 'Welcome', timeLeft: '15', route: '/' },
                { title: 'Staff Notation', timeLeft: '12', route: '/lesson1' },
                { title: 'Pitch', timeLeft: '09', route: '/lesson1' },
                { title: 'Duration', timeLeft: '06', route: '/lesson1' },
                { title: 'Beat', timeLeft: '03', route: '/lesson1' },
            ],
        },
    },
    getters: {
        getCurrentLesson: state => state.lessons[state.language][state.currentLesson],
        getLessons: state => state.lessons[state.language],
    },
    mutations: {
        updateLesson (state, lesson) {
            state.currentLesson = lesson;
        },
        updateLocale (state, language) {
            state.language = language;
        },
    },
    actions: {
        updateLesson ({ commit }, lesson) {
            commit('updateLesson', lesson);
        },
        updateLocale ({ commit }, language) {
            commit('updateLocale', language);
        },
    },
};

export default new Vuex.Store(store);
