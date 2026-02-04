<script setup lang="ts">
import { projectTypeConfig } from '@/data/projectType'

const props = defineProps<{
  type: number
}>()

const typeLabel = computed<{ text: string; bg: string }>(() => {
  return (
    projectTypeConfig[props.type as keyof typeof projectTypeConfig] ??
    projectTypeConfig[1]
  )
})
</script>
<template>
  <label
    :class="typeLabel.bg"
    class="line-clamp-3 w-fit rounded-lg px-3 py-1 text-sm text-white md:text-base"
  >
    {{ typeLabel.text }}
  </label>
</template>
<style lang="scss" scoped></style>
