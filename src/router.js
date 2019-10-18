import VueRouter from 'vue-router';
import Games from './components/Games.vue';

export default new VueRouter({
    routes: [
        { path: '/games', component: Games }
    ]
});