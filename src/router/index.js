import { createRouter, createWebHistory } from 'vue-router'

import { findWorkBySlug } from '@/data/works'
import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import WorkDetailView from '@/views/WorkDetailView.vue'

/**
 * 路由設定
 * meta.title 同時決定瀏覽器分頁標題與是否出現在頁面切換清單
 * meta.isFullBleed 為 true 時不顯示左側側欄
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
  {
    path: '/work/:slug',
    name: 'work-detail',
    component: WorkDetailView,
    meta: { isFullBleed: true },
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // 換頁一律回到頂端，上一頁則還原原本位置
  scrollBehavior: (to, from, savedPosition) => savedPosition ?? { top: 0 },
})

/**
 * 取得該路由的顯示標題
 * @param {import('vue-router').RouteLocationNormalized} to
 * @returns {string | undefined}
 */
const resolveTitle = (to) => {
  if (to.name === 'work-detail') {
    return findWorkBySlug(to.params.slug)?.title
  }

  return to.meta?.title
}

// 進入頁面後同步瀏覽器分頁標題
router.afterEach((to) => {
  const title = resolveTitle(to)
  document.title = title ? `${title} | cxl` : 'cxl'
})
