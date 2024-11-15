import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VideoDetailView from '@/views/VideoDetailView.vue'
import LaterView from '@/views/LaterView.vue'
import ChannleView from '@/views/ChannleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:video_id',
      name: 'detail',
      component: VideoDetailView
    },
    {
      path: '/later',
      name: 'later',
      component: LaterView
    },
    {
      path: '/channle',
      name: 'channle',
      component: ChannleView
    },
  ],
})

export default router
