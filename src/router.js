import VueRouter from 'vue-router';
import Resume from './components/header/resume/Resume';
import Games from './components/header/games/Games.vue';
import WoW from './components/header/games/wow/WoW.vue';
import Blogs from './components/header/blogs/Blogs.vue';
import Projects from './components/header/projects/Projects.vue';
import Home from './components/home/Home.vue';

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/resume', component: Resume },
        { path: '/games', component: Games },
        { path: '/games/worldofwarcraft', component: WoW },
        { path: '/blogs', component: Blogs },
        { path: '/projects', component: Projects },
        { path: '*', redirect: '/' }
    ]
});