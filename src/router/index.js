import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'

/**
 * 路由設定
 * meta.title 供後續切換頁面標題使用
 */
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: '作品集' },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { title: '個人介紹' },
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// 進入頁面後同步瀏覽器分頁標題
router.afterEach((to) => {
  document.title = to.meta?.title ? `${to.meta.title} | cxl` : 'cxl'
})
