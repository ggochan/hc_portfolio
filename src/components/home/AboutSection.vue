<script setup lang="ts">
import { useDayjs } from '@/composable/useDayjs'
import { AboutData, CategoryData } from '@/data/aboutData'

const { formatPeriod } = useDayjs()
</script>
<template>
  <!--자기소개 섹션-->
  <section class="h-auto bg-white p-8 pb-8 md:p-14 md:pb-0 lg:p-20 lg:pb-0">
    <!-- 소개 타이틀 -->
    <h1
      class="text-primary text-xl font-medium whitespace-pre-line md:text-2xl lg:text-3xl"
    >
      {{ AboutData.title }}
    </h1>
    <div class="mt-3 md:mt-6 xl:grid xl:grid-cols-3 xl:grid-rows-1 xl:gap-x-20">
      <!-- 소개 내용 -->
      <div class="">
        <p
          class="sm:text-md text-sm font-light text-black lg:text-base"
          v-html="AboutData.content"
        ></p>
      </div>
      <!-- 카테고리 -->
      <div
        class="pt-6 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 lg:col-span-2 lg:pt-6 xl:pt-0"
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

          <!-- 카테고리 Content -->
          <ul class="pt-2">
            <li
              v-for="(inforItem, iIdx) in categoryItem.infor"
              :key="iIdx"
              class="flex w-full items-baseline p-2"
            >
              <span class="text-primary text-2xl md:text-3xl">•</span>
              <span
                class="ms-2 min-w-40 -translate-y-0.5 text-sm md:min-w-35 md:text-sm lg:min-w-40 lg:text-base"
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
    </div>
  </section>
</template>
<style lang="scss" scoped></style>
