import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'all',
      component: HomeView,
    },
    {
      path: '/pending',
      name: 'pending',
      component: () => import('../views/PendingView.vue'),
    },
    {
      path: '/deleted',
      name: 'deleted',
      component: () => import('../views/DeletedView.vue'),
    },
    {
      path: '/completed',
      name: 'completed',
      component: () => import('../views/CompletedView.vue'),
    },
  ],
})

export default router
