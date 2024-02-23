import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/HomePage.vue';
import ChiSiamo from './pages/ChiSiamo.vue';
import Contatti from './pages/contatti.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
            {
                path: '/',
                name: 'home',
                component: AppHome
            },
            {
                path: '/chisiamo',
                name: 'ChiSiamo',
                component: ChiSiamo
            },
            {
                path: '/contatti',
                name: 'contatti',
                component: Contatti
            },

        ]
    });
export { router };