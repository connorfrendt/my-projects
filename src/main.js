import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
import axios from 'axios';

Vue.config.productionTip = false
Vue.use(VueRouter, axios);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')