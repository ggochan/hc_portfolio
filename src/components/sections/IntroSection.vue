<script setup lang="ts">
import { useDayjs } from '@/composable/useDayjs'
import { IntroData, CategoryData } from '../data/introdata'

const { formatPeriod } = useDayjs()
</script>
<template>
  <!--자기소개 섹션-->
  <section
    class="h-auto bg-white p-8 pb-8 md:p-14 md:pb-0 lg:p-20 lg:pb-0 xl:grid xl:grid-cols-3 xl:grid-rows-1 xl:gap-x-8"
  >
    <!-- 소개&내용 -->
    <div>
      <p
        class="text-primary text-lg font-medium whitespace-pre-line md:text-xl lg:text-2xl"
      >
        {{ IntroData.title }}
      </p>
      <p
        class="sm:text-md mt-3 text-sm font-light text-black md:mt-6 lg:text-base"
        v-html="IntroData.content"
      ></p>
    </div>
    <!-- 카테고리 -->
    <div
      class="pt-6 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 lg:col-span-2 lg:pt-10 xl:pt-0"
    >
      <!-- 카테고리 Title -->
      <div
        v-for="(categoryItem, cidx) in CategoryData"
        :key="cidx"
        class="flex flex-col items-start overflow-hidden pb-2 last:pb-0 md:pb-0 md:last:-translate-y-16"
      >
        <span
          class="border-custom-border-default sm:text-md min-w-20 border-l-4 ps-2 text-sm font-normal tracking-wider text-balance md:min-w-23 lg:min-w-27 lg:text-lg xl:min-w-30"
        >
          {{ categoryItem.title }}
        </span>
        <div class="bg-custom-border-default mt-1 h-px w-full" />
        <!-- 카테고리 Content -->
        <ul class="pt-2">
          <li
            v-for="(inforItem, iIdx) in categoryItem.infor"
            :key="iIdx"
            class="flex w-full items-baseline pb-2"
          >
            <span class="text-primary text-2xl md:text-3xl">•</span>
            <span
              class="ms-3 min-w-40 -translate-y-0.5 text-sm md:min-w-35 md:text-sm lg:min-w-40 lg:text-base"
            >
              {{ inforItem.name }}
            </span>
            <div class="flex flex-col md:ms-0">
              <span
                class="line-clamp-3 -translate-y-0.5 text-xs md:text-sm lg:text-base"
              >
                {{ inforItem.content.join(', ') }}
              </span>
              <template v-if="inforItem.period">
                <span
                  v-for="(periodItem, pIdx) in inforItem.period"
                  :key="pIdx"
                  class="text-gray line-clamp-2 text-xs md:text-sm"
                >
                  {{ formatPeriod(periodItem) }}
                </span>
              </template>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped></style>
