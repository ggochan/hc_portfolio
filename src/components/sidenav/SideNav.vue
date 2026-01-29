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
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <nav class="fixed top-1/6 right-8 z-50 hidden -translate-y-1/2 lg:block">
    <ul class="flex flex-col gap-1">
      <li v-for="section in sections" :key="section.id" class="ms-auto">
        <button
          @click="scrollTo(section.id)"
          class="group flex items-center gap-2"
        >
          <span
            class="text-sm transition-colors"
            :class="
              activeSection === section.id
                ? 'text-gray font-medium'
                : 'text-gray-400 group-hover:text-gray-600'
            "
          >
            {{ section.label }}
          </span>
          <div
            class="h-8 rounded transition-all"
            :class="
              activeSection === section.id
                ? 'bg-gray w-1'
                : 'bg-custom-border-default group-hover:bg-gray w-0.5'
            "
          />
        </button>
      </li>
    </ul>
  </nav>
</template>
