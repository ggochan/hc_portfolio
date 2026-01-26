import { createRouter, createWebHistory } from 'vue-router'
import { staticRoutes } from './pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //scroll 유지
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
  routes: [...staticRoutes],
})

// 각 router 정보 제어
router.beforeEach((to, from, next) => {
  const nearestWithTitle = [...to.matched].reverse().find((r) => r.meta?.title)
  const nearestWithMeta = [...to.matched]
    .reverse()
    .find((r) => r.meta?.metaTags)
  const previousWithMeta = [...from.matched]
    .reverse()
    .find((r) => r.meta?.metaTags)

  // Title 설정
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title as string
  } else if (previousWithMeta) {
    document.title = previousWithMeta.meta.title as string
  }

  // 기존 meta tag 삭제
  document.querySelectorAll('[data-vue-router-controlled]').forEach((el) => {
    el.parentNode?.removeChild(el)
  })

  // 새로운 meta tag 삽입
  if (nearestWithMeta?.meta?.metaTags) {
    ;(nearestWithMeta.meta.metaTags as Record<string, string>[]).forEach(
      (tagDef) => {
        const tag = document.createElement('meta')
        Object.entries(tagDef).forEach(([key, value]) => {
          tag.setAttribute(key, value)
        })
        tag.setAttribute('data-vue-router-controlled', '')
        document.head.appendChild(tag)
      },
    )
  }

  next()
})

export default router
