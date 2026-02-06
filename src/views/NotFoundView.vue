<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div
    class="bg-surface flex min-h-screen flex-col items-center justify-center px-4"
  >
    <!-- 404 숫자 -->
    <Transition appear name="fade-up">
      <div class="relative">
        <h1 class="text-primary text-8xl font-bold select-none sm:text-9xl">
          404
        </h1>
      </div>
    </Transition>

    <!-- 메시지 -->
    <Transition appear name="fade-up-delay">
      <div class="mt-4 text-center">
        <h2 class="text-secondary-dark text-xl font-semibold sm:text-2xl">
          페이지를 찾을 수 없습니다
        </h2>
        <p class="text-gray mt-2 text-sm sm:text-base">
          요청하신 페이지가 존재하지 않습니다.
        </p>
      </div>
    </Transition>

    <!-- 홈으로 버튼 -->
    <Transition appear name="fade-up-delay-2">
      <button
        @click="router.push('/')"
        class="hover:bg-primary bg-surface text-secondary-dark mt-8 cursor-pointer rounded-full px-8 py-3 font-medium transition-all duration-300 hover:scale-105 hover:text-white hover:shadow-lg"
      >
        홈으로 돌아가기
      </button>
    </Transition>
  </div>
</template>

<style scoped>
/* 기본 fade-up */
.fade-up-enter-active {
  transition: all 0.6s ease-out;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

/* 0.2초 딜레이 */
.fade-up-delay-enter-active {
  transition: all 0.6s ease-out 0.2s;
}
.fade-up-delay-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

/* 0.4초 딜레이 */
.fade-up-delay-2-enter-active {
  transition: all 0.6s ease-out 0.4s;
}
.fade-up-delay-2-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
