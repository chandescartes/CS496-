import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/components/Welcome';
import Lesson1 from '@/components/Lesson1';
import PianoToSheet from '@/components/PianoToSheet';
import Piano from '@/components/Piano';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', component: Welcome },
        { path: '/lesson1', component: Lesson1 },
        { path: '/pts', component: PianoToSheet },
        { path: '/piano', component: Piano },
    ],
});
