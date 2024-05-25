import { createRouter, createWebHistory } from 'vue-router'

import TasksPage from '@/modules/tasks/TasksPage.vue'
import HomePage from '@/modules/home/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/task',
      name: 'task',
      component: TasksPage
    }
  ]
})

export default router
