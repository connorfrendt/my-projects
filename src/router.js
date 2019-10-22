import VueRouter from 'vue-router';
import Games from './components/header/games/Games.vue';
import Home from './components/home/Home.vue';

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/games', component: Games },
        { path: '*', redirect: '/' }
    ]
});