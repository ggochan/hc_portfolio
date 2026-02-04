import { createRouter, createWebHistory } from 'vue-router'
import { staticRoutes } from './pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //scroll 유지
  scrollBehavior(_to, _from, _savedPosition) {
    // if (savedPosition) return savedPosition
    return { top: 0 }
  },
  routes: [...staticRoutes],
})

// 각 router 정보 제어
router.beforeEach((to, from, next) => {
  const nearestWithTitle = [...to.matched].reverse().find((r) => r.meta?.title)

  const previousWithMeta = [...from.matched]
    .reverse()
    .find((r) => r.meta?.metaTags)

  // Title 설정
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title as string
  } else if (previousWithMeta) {
    document.title = previousWithMeta.meta.title as string
  }

  next()
})

export default router
