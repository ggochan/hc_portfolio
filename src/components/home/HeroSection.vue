<script setup lang="ts"></script>
<template>
  <section class="bg-surface-point relative min-h-80 md:min-h-125 lg:min-h-225">
    <!-- 왼쪽 상단 텍스트 -->
    <div
      class="absolute top-8 left-8 z-10 md:top-12 md:left-14 lg:top-16 lg:left-20"
    >
      <h1 class="text-xl text-white md:text-2xl lg:text-3xl">
        PORTFOLIO WEBSITE
      </h1>
      <h2 class="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
        FRONTEND DEVELOPER
      </h2>
    </div>
    <!-- GO 원 + . 컨테이너 -->
    <!-- prettier-ignore -->
    <div class="absolute top-3/5 lg:top-4/7  left-auto -translate-y-1/2 right-10 md:right-14 lg:right-20 ">
      <!-- 원 + GO -->
      <div
        class="bg-primary flex aspect-square items-center justify-center rounded-full 
        size-[30cqw]
        md:size-[35cqw] 
        lg:size-[50vh]"
      >
        <span
          class="text-surface-point absolute  font-semibold  
          text-[clamp(15px,8cqw,45px)] right-[13%] bottom-[10%]
          md:text-[clamp(20px,10cqw,55px)] md:right-[14%] md:bottom-[12%]
          lg:text-[clamp(30px,12cqw,96px)] lg:right-[14%] lg:bottom-[10%]"
        >
          GO
        </span>
      </div>

      <!-- . (원 바깥 오른쪽 하단) -->
      <span
        class="text-primary absolute font-bold 
          text-[clamp(15px,8cqw,60px)] right-[2%] bottom-[2%]
          md:text-[clamp(20px,14cqw,70px)] md:right-[5%] md:bottom-[5%]
          lg:text-[clamp(2qw,20cqw,80px)] lg:right-[10%] lg:bottom-[6%]"
      >
        .
      </span>
    </div>
  </section>
</template>
<style lang="scss" scoped></style>
