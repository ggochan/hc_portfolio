<script setup lang="ts">
import type { Project } from '@/types/Project'
import { useDayjs } from '@/composable/useDayjs'

const { formatProjectPeriod } = useDayjs()

const props = defineProps<{
  project: Project
}>()

const typeLabel = computed(() => {
  const isMain = props.project.type === 1
  return {
    text: isMain ? 'Main' : 'Side',
    bg: isMain ? 'bg-primary' : 'bg-primary-light',
  }
})
</script>
<template>
  <div
    class="border-custom-border-default flex flex-col rounded-lg border p-3 md:p-4"
  >
    <label
      :class="typeLabel.bg"
      class="line-clamp-3 w-fit rounded-lg px-3 py-1 text-sm text-white md:text-base"
    >
      {{ typeLabel.text }}
    </label>
    <span class="line-clamp-2 pt-2 text-sm md:text-base">
      {{ props.project.title }}
    </span>
    <span class="text-gray text-xs md:text-sm">
      {{ formatProjectPeriod(props.project.period, props.project.status) }}
    </span>
    <span
      class="text-gray border-custom-border-default my-3 border-l-2 ps-2 text-xs md:text-sm"
    >
      {{ props.project.content }}
    </span>
    <div class="text-gray flex-col py-3 text-xs md:text-sm">
      <div class="flex">
        <span class="min-w-20">담당업무</span>
        <span>{{ props.project.task.join(', ') }}</span>
      </div>
      <div class="mt-2 flex">
        <span class="min-w-20">참여인원</span>
        <span>{{ `${props.project.personnel} 명` }}</span>
      </div>
      <div class="mt-2 flex items-start">
        <span class="min-w-20">개발환경</span>
        <div class="flex flex-col">
          <span v-for="(item, sIdx) in props.project.skills" :key="sIdx">
            {{ item.join(', ') }}
          </span>
        </div>
      </div>
    </div>
    <div class="mt-auto flex justify-end">
      <button
        class="text-gray text-xs transition-colors hover:text-gray-700 md:text-sm"
      >
        More →
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
