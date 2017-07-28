import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
<<<<<<< HEAD
    components: {App},
=======
    components: { App },
>>>>>>> 037d01d13a274fb320e19211352fd81ea4a682a1
});
