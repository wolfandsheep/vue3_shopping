import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', component: () => import('@/views/Layout/index.vue'),
      children: [
        { path: '/home', component: () => import('@/views/Home/index.vue') },
        { path: '/category/:id', component: () => import('@/views/Category/index.vue') },
      ],
      redirect: '/home'
    }, 
    {
      path: '/login', component: () => import('@/views/Login/index.vue')
    }
  ]
})

export default router
