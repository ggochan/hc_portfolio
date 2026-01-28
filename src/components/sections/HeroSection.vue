<script setup lang="ts"></script>
<template>
  <section
    class="bg-surface-point @container relative min-h-70 md:min-h-screen"
  >
    <!-- 왼쪽 상단 텍스트 -->
    <div
      class="absolute top-8 left-8 z-10 md:top-12 md:left-14 lg:top-16 lg:left-20"
    >
      <p class="text-xl text-white md:text-2xl lg:text-3xl">
        PORTFOLIO WEBSITE
      </p>
      <h1 class="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
        FRONTEND DEVELOPER
      </h1>
    </div>
    <!-- GO 원 + . 컨테이너 -->
    <!-- prettier-ignore -->
    <div class="absolute top-3/5 sm:top-1/2  left-auto -translate-y-1/2 right-10 sm:right-20 ">
      <!-- 원 + GO -->
      <div
        class="bg-primary flex aspect-square items-center justify-center rounded-full 
        size-[30cqw]
        md:size-[50vh] 
        lg:size-[60vh]"
      >
        <span
          class="text-surface-point absolute  font-semibold  
          text-[clamp(15px,8cqw,45px)] right-[13%] bottom-[10%]
          md:text-[clamp(20px,10vh,96px)] md:right-[13%] md:bottom-[10%]
          lg:text-[clamp(20px,10vh,96px)] lg:right-[14%] lg:bottom-[10%]"
        >
          HC
        </span>
      </div>

      <!-- . (원 바깥 오른쪽 하단) -->
      <span
        class="text-primary absolute font-bold 
          text-[clamp(15px,8cqw,60px)] right-[4%] bottom-[3%]
          md:text-[clamp(20px,10vh,96px)] md:right-[6%] md:bottom-[5%]
          lg:text-[clamp(20px,10vh,96px)] lg:right-[9%] lg:bottom-[5%]"
      >
        .
      </span>
    </div>
  </section>
</template>
<style lang="scss" scoped></style>
