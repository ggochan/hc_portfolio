<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div
    class="bg-surface flex min-h-screen flex-col items-center justify-center px-4"
  >
    <!-- 404 숫자 -->
    <div class="relative">
      <h1
        class="animate-fade-in text-primary text-8xl font-bold select-none sm:text-9xl"
      >
        404
      </h1>
    </div>

    <!-- 메시지 -->
    <div class="animate-fade-in-delay mt-4 text-center">
      <h2 class="text-secondary-dark text-xl font-semibold sm:text-2xl">
        페이지를 찾을 수 없습니다
      </h2>
      <p class="text-gray mt-2 text-sm sm:text-base">
        요청하신 페이지가 존재하지 않습니다.
      </p>
    </div>

    <!-- 홈으로 버튼 -->
    <button
      @click="router.push('/')"
      class="animate-fade-in-delay-2 hover:bg-primary bg-surface text-secondary-dark mt-8 cursor-pointer rounded-full px-8 py-3 font-medium transition-all duration-300 hover:scale-105 hover:text-white hover:shadow-lg"
    >
      홈으로 돌아가기
    </button>
  </div>
</template>

<style scoped>
/* 페이드 인 애니메이션 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

.animate-fade-in-delay {
  opacity: 0;
  animation: fadeIn 0.6s ease-out 0.2s forwards;
}

.animate-fade-in-delay-2 {
  opacity: 0;
  animation: fadeIn 0.6s ease-out 0.4s forwards;
}
</style>
