import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/sherlock',
            name: 'sherlock',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/SherlockView.vue')
        },
        {
            path: '/register',
            name: 'register',
            //importing view component
            component: () => import('../views/Register.vue')
        }

    ]
})

export default router
