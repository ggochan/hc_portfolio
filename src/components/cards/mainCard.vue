<script setup lang="ts">
import type { Project } from '@/types/Project'
import { useDayjs } from '@/composable/useDayjs'
import { projectTypeConfig } from '../data/projectType'

const { formatProjectPeriod } = useDayjs()

const props = defineProps<{
  project: Project
}>()

const typeLabel = computed(() => {
  return (
    projectTypeConfig[props.project.type as keyof typeof projectTypeConfig] ??
    projectTypeConfig[1]
  )
})
</script>
<template>
  <div
    class="border-custom-border-default hover:border-primary flex flex-col rounded-lg border bg-white p-3 transition-all duration-300 hover:-translate-x-0.5 hover:shadow-lg md:p-4"
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
      class="text-gray border-custom-border-default my-5 border-l-2 ps-2 text-xs md:text-sm"
    >
      {{ props.project.content }}
    </span>
    <div
      class="text-gray flex flex-col gap-y-2.5 pb-5 text-xs md:text-sm lg:gap-y-3.5"
    >
      <div class="flex">
        <span class="min-w-20">담당업무</span>
        <span>{{ props.project.task.join(', ') }}</span>
      </div>
      <div class="flex">
        <span class="min-w-20">참여인원</span>
        <span>{{ `${props.project.personnel} 명` }}</span>
      </div>
      <div class="flex items-start">
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
        class="text-gray hover:text-primary cursor-pointer text-xs transition-colors md:text-sm"
      >
        <span>More</span>
        <span class="ms-1.5">→</span>
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
