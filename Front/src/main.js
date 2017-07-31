import Vue from 'vue';
import { sync } from 'vuex-router-sync';

import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App';
import store from './store';
import router from './router';

sync(store, router);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App },
});
