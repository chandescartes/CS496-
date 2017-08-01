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
                { title: '음을 표시하는 법', timeLeft: '15', route: '/lesson1' },
                { title: '음의 높이', timeLeft: '14', route: '/lesson2' },
                { title: '음의 길이', timeLeft: '12', route: '/lesson3' },
                { title: '박자', timeLeft: '10', route: '/lesson4' },
                { title: '음계', timeLeft: '08', route: '/lesson5' },
                { title: '템포', timeLeft: '06', route: '/lesson6' },
                { title: '셈여림', timeLeft: '04', route: '/lesson7' },
                { title: '다른 음악 기호들', timeLeft: '02', route: '/lesson8' },
                // { title: 'Melody & Harmony', timeLeft: '03', route: '/lesson9' },
            ],
            eng: [
                { title: 'Welcome', timeLeft: '15', route: '/' },
                { title: 'Staff Notation', timeLeft: '15', route: '/lesson1' },
                { title: 'Pitch', timeLeft: '14', route: '/lesson2' },
                { title: 'Duration', timeLeft: '12', route: '/lesson3' },
                { title: 'Beat', timeLeft: '10', route: '/lesson4' },
                { title: 'Scale', timeLeft: '08', route: '/lesson5' },
                { title: 'Tempo', timeLeft: '06', route: '/lesson6' },
                { title: 'Dynamics', timeLeft: '04', route: '/lesson7' },
                { title: 'Other Notation', timeLeft: '02', route: '/lesson8' },
                // { title: 'Melody & Harmony', timeLeft: '03', route: '/lesson9' },
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
            localStorage.setItem('currentLesson', lesson);
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
