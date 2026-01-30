<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const sections = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'project', label: 'PROJECT' },
  { id: 'contact', label: 'CONTECT' },
]

const activeSection = ref('home')
let observer: IntersectionObserver | null = null
let ignoreObserver = false

const scrollTo = (id: string) => {
  ignoreObserver = true
  activeSection.value = id
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  setTimeout(() => {
    ignoreObserver = false
  }, 1000)
}

// 스크롤이 페이지 끝에 도달하면 마지막 섹션 활성화
const handleScroll = () => {
  if (ignoreObserver) return

  const scrollBottom = window.scrollY + window.innerHeight
  const pageHeight = document.documentElement.scrollHeight

  if (pageHeight - scrollBottom < 50) {
    activeSection.value = 'contact'
  }
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (ignoreObserver) return

      for (const entry of entries) {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          activeSection.value = entry.target.id
          break
        }
      }
    },
    { threshold: 0.5 },
  )

  sections.forEach(({ id }) => {
    const el = document.getElementById(id)
    if (el) observer?.observe(el)
  })

  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  observer?.disconnect()
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="fixed top-1/6 right-8 z-50 hidden -translate-y-1/2 lg:block">
    <ul class="flex flex-col gap-1">
      <li v-for="section in sections" :key="section.id" class="ms-auto">
        <button
          @click="scrollTo(section.id)"
          class="group flex cursor-pointer items-center gap-2"
        >
          <span
            class="text-sm transition-colors"
            :class="
              activeSection === section.id
                ? 'text-gray font-light'
                : 'font-light text-gray-400 group-hover:text-gray-600'
            "
          >
            {{ section.label }}
          </span>
          <div
            class="h-8 rounded transition-all"
            :class="
              activeSection === section.id
                ? 'bg-gray w-0.5'
                : 'bg-custom-border-default group-hover:bg-gray w-0.5'
            "
          />
        </button>
      </li>
    </ul>
  </nav>
</template>
