import Vue from 'vue';
import { sync } from 'vuex-router-sync';

import App from './App';
import store from './store';
import router from './router';

sync(store, router);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App },
});
