<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import MainCard from '../cards/MainCard.vue'
import DropDownFilter from '../common/DropDownFilter.vue'
import { ProjectData } from '../../data/mainData'

// 필터 상태
const filterOptions = ['All', 'Main', 'Sub', 'Personal'] as const
type FilterType = (typeof filterOptions)[number]

const selectedFilter = ref<FilterType>('All')
const isFilterOpen = ref(false)
const filterRef = ref<HTMLElement | null>(null)

// 외부 클릭 시 드롭다운 닫기
onClickOutside(filterRef, () => {
  isFilterOpen.value = false
})

// 필터링된 프로젝트
const filteredProjects = computed<typeof ProjectData>(() => {
  switch (selectedFilter.value) {
    case 'All':
      return ProjectData
    case 'Main':
      return ProjectData.filter((p) => p.type === 1)
    case 'Sub':
      return ProjectData.filter((p) => p.type === 2)
    case 'Personal':
      return ProjectData.filter((p) => p.type === 3)
  }
})

const toggleFilter = () => {
  isFilterOpen.value = !isFilterOpen.value
}
</script>
<template>
  <section class="bg-surface h-auto p-8 md:p-14 lg:p-20">
    <p
      class="text-primary text-xl font-medium tracking-wider md:text-2xl lg:text-3xl"
    >
      Project
    </p>

    <div class="px-0 pt-1 lg:px-10 lg:pt-2.5 xl:px-20">
      <div
        class="gird-cols-1 grid justify-center gap-2.5 sm:grid-cols-[repeat(auto-fit,minmax(300px,320px))] lg:grid-cols-[repeat(auto-fit,minmax(300px,330px))] xl:grid-cols-3"
      >
        <div class="col-span-full -mb-2.5 flex justify-end pe-2.5">
          <div ref="filterRef" class="relative">
            <button
              @click="toggleFilter"
              class="text-gray hover:text-primary cursor-pointer transition-colors"
            >
              <svg
                class="h-6 w-6 md:h-8 md:w-8"
                viewBox="0 0 24 26"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.125 8.4H1.875C1.57663 8.4 1.29048 8.27357 1.0795 8.04853C0.868526 7.82348 0.75 7.51826 0.75 7.2C0.75 6.88174 0.868526 6.57652 1.0795 6.35147C1.29048 6.12643 1.57663 6 1.875 6H22.125C22.4234 6 22.7095 6.12643 22.9205 6.35147C23.1315 6.57652 23.25 6.88174 23.25 7.2C23.25 7.51826 23.1315 7.82348 22.9205 8.04853C22.7095 8.27357 22.4234 8.4 22.125 8.4ZM18.375 14H5.625C5.32663 14 5.04048 13.8736 4.8295 13.6485C4.61853 13.4235 4.5 13.1183 4.5 12.8C4.5 12.4817 4.61853 12.1765 4.8295 11.9515C5.04048 11.7264 5.32663 11.6 5.625 11.6H18.375C18.6734 11.6 18.9595 11.7264 19.1705 11.9515C19.3815 12.1765 19.5 12.4817 19.5 12.8C19.5 13.1183 19.3815 13.4235 19.1705 13.6485C18.9595 13.8736 18.6734 14 18.375 14ZM13.875 19.6H10.125C9.82663 19.6 9.54048 19.4736 9.3295 19.2485C9.11853 19.0235 9 18.7183 9 18.4C9 18.0817 9.11853 17.7765 9.3295 17.5515C9.54048 17.3264 9.82663 17.2 10.125 17.2H13.875C14.1734 17.2 14.4595 17.3264 14.6705 17.5515C14.8815 17.7765 15 18.0817 15 18.4C15 18.7183 14.8815 19.0235 14.6705 19.2485C14.4595 19.4736 14.1734 19.6 13.875 19.6Z"
                />
              </svg>
            </button>
            <!-- 필터 드롭다운 -->
            <DropDownFilter
              v-show="isFilterOpen"
              v-model="selectedFilter"
              :options="filterOptions"
              @update:model-value="isFilterOpen = false"
            />
          </div>
        </div>
        <MainCard
          v-for="(project, pIdx) in filteredProjects"
          :key="pIdx"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped></style>
