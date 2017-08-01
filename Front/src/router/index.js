import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/components/Welcome';
import Lesson1 from '@/components/Lesson1';
import Lesson2 from '@/components/Lesson2';
import Lesson3 from '@/components/Lesson3';
import Lesson4 from '@/components/Lesson4';
import Lesson5 from '@/components/Lesson5';
import Lesson6 from '@/components/Lesson6';
import Lesson7 from '@/components/Lesson7';
import Lesson8 from '@/components/Lesson8';



Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', component: Welcome },
        { path: '/lesson1', component: Lesson1 },
        { path: '/lesson2', component: Lesson2 },
        { path: '/lesson3', component: Lesson3 },
        { path: '/lesson4', component: Lesson4 },
        { path: '/lesson5', component: Lesson5 },
        { path: '/lesson6', component: Lesson6 },
        { path: '/lesson7', component: Lesson7 },
        { path: '/lesson8', component: Lesson8 },
    ],
});
