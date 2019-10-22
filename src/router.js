import VueRouter from 'vue-router';
import Games from './components/header/games/Games.vue';

export default new VueRouter({
    routes: [
        { path: '/games', component: Games }
    ]
});