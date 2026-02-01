<script setup lang="ts">
import type { Project } from '@/types/Project'
import { useDayjs } from '@/composable/useDayjs'
import ProjectTypeLabel from '../labels/ProjectTypeLabel.vue'

const { formatProjectPeriod } = useDayjs()

const props = defineProps<{
  isOpen: boolean
  project: Project
}>()

const emit = defineEmits<{
  close: []
}>()

// ESC 키로 모달 닫기
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    emit('close')
  }
}
const tabLabels: Record<string, string> = {
  web: '웹',
  userApp: '유저 앱',
  storeApp: '매장 앱',
  windowApp: '윈도우 앱',
}

const subTabLabels: Record<string, string> = {
  desktop: 'PC',
  mobile: 'Mobile',
  ios: 'iOS',
  android: 'Android',
  window: 'Window',
}

// 메인 탭
const activeTab = ref<string | null>('')

// 데이터가 있는 매인 탭 목록 저장
const availableTabs = computed<{ key: string; label: string }[]>(() => {
  const gallery = props.project.gallery
  if (!gallery) return []

  return Object.keys(gallery)
    .filter((key) => {
      const value = gallery[key as keyof typeof gallery]
      return value && Object.keys(value).length > 0
    })
    .map((key) => ({
      key, // 'web', 'userApp' 등 (내부용)
      label: tabLabels[key] ?? key, // '웹', '유저 앱' 등 (표시용)
    }))
})

// 메인 탭 값이 바뀌는지 확인
watch(
  availableTabs,
  (tabs) => {
    activeTab.value = tabs[0]?.key ?? ''
  },
  { immediate: true },
)

// 서브 탭
const activeSubTab = ref<string | null>('')

// 데이터가 있는 서브 탭 목록 저장
const availableSubTabs = computed<{ key: string; label: string }[]>(() => {
  if (!activeTab.value || !props.project.gallery) return []

  const tabData = props.project.gallery[
    activeTab.value as keyof typeof props.project.gallery
  ] as Record<string, unknown[]> | undefined

  if (!tabData) return []

  return Object.keys(tabData)
    .filter((key) => {
      const value = tabData[key]
      return value && value.length > 0
    })
    .map((key) => ({
      key,
      label: subTabLabels[key] ?? key,
    }))
})

// 서브 탭 값이 바뀌는지 확인
watch(
  availableSubTabs,
  (subTabs) => {
    activeSubTab.value = subTabs[0]?.key ?? ''
  },
  { immediate: true },
)

// 현재 선택된 탭/서브탭의 이미지 목록
const currentImages = computed(() => {
  if (!activeTab.value || !activeSubTab.value || !props.project.gallery)
    return []

  const tabData = props.project.gallery[
    activeTab.value as keyof typeof props.project.gallery
  ] as Record<string, { src: string; alt: string }[]> | undefined

  if (!tabData) return []

  console.log(tabData[activeSubTab.value] ?? [])
  return tabData[activeSubTab.value] ?? []
})

// 가로형(desktop) 여부 판단
const isHorizontal = computed(() => {
  return activeSubTab.value === 'desktop' || activeSubTab.value === 'window'
})
</script>
<template>
  <!-- 모달로 포커싱 -->
  <Teleport to="body">
    <!-- Vue 내장 컴포넌트로 애니메이션 적용 -->
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <!-- 배경 오버레이 -->
        <div class="absolute inset-0 bg-black/50" @click="emit('close')" />

        <!-- 모달 -->
        <div
          class="z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-y-auto rounded-lg bg-white p-6 shadow-xl"
        >
          <div class="flex flex-row justify-between">
            <!--타입 레이블-->
            <ProjectTypeLabel :type="project.type" />
            <!-- 닫기 -->
            <button
              class="text-gray hover:text-primary cursor-pointer text-xl md:text-2xl"
              @click="emit('close')"
            >
              &times;
            </button>
          </div>
          <!-- 모달 내용 -->
          <h2 class="mt-2 text-base font-medium md:text-lg">
            {{ project.title }}
          </h2>
          <span class="text-gray text-sm md:text-base">
            {{ formatProjectPeriod(project.period, project.status) }}
          </span>
          <div class="mt-2 flex gap-1">
            <button
              v-for="tab in availableTabs"
              :key="tab.key"
              class="px-2.5 py-1.5"
              :class="
                activeTab === tab.key
                  ? 'text-primary border-primary border-b-2'
                  : 'text-gray hover:text-primary-light border-b-2 border-transparent'
              "
              @click="activeTab = tab.key"
            >
              {{ tab.label }}
            </button>
          </div>

          <div
            class="bg-surface-input inline-flex rounded-lg rounded-t-none p-2"
          >
            <button
              v-for="sub in availableSubTabs"
              :key="sub.key"
              class="rounded-md px-3 py-1 text-sm"
              :class="
                activeSubTab === sub.key
                  ? 'bg-white text-black shadow-sm'
                  : 'text-gray'
              "
              @click="activeSubTab = sub.key"
            >
              {{ sub.label }}
            </button>
          </div>

          <!-- 이미지 갤러리 -->
          <div
            v-if="currentImages.length"
            class="mt-4 flex gap-3 overflow-x-auto pb-2"
          >
            <img
              v-for="(image, idx) in currentImages"
              :key="idx"
              :src="image.src"
              :alt="image.alt"
              class="border-custom-border-default rounded-lg border object-cover"
              :class="
                isHorizontal ? 'h-32 w-auto md:h-48' : 'h-40 w-auto md:h-64'
              "
            />
          </div>
          <div v-else class="px-1 py-2">
            이미지 없이 기능 위주로 구현된 프로젝트입니다.
          </div>
          <p class="text-gray">{{ project.content }}</p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<style lang="scss" scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
