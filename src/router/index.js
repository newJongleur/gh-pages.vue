import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router' // history和Hash

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL), //history 关键字：createWebHistory
  history: createWebHashHistory(import.meta.env.BASE_URL),//hash 关键字：createWebHashHistory
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/:cathchAll(.*)',
      name: '404',
      component: () => import('../views/404View.vue')
    }
  ]
})

export default router
