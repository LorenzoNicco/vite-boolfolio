import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: AppIndex
        },
        {
            path: '/show/:slug',
            name: 'show',
            component: AppShow
        }
    ]
});

export { router };