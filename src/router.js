import VueRouter from 'vue-router';
import Games from './components/header/games/Games.vue';
import WoW from './components/home/WoW.vue';
import Blogs from './components/header/blogs/Blogs.vue';
import Projects from './components/header/projects/Projects.vue';
import Home from './components/home/Home.vue';

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/games', component: Games },
        { path: '/games/worldofwarcraft', component: WoW },
        { path: '/blogs', component: Blogs },
        { path: '/projects', component: Projects },
        { path: '*', redirect: '/' }
    ]
});