<script setup lang="ts">
import { useDayjs } from '@/composable/useDayjs'
import type { CategoryData } from '@/types/Category'

const { formatPeriod } = useDayjs()

const IntroData = {
  title: '안녕하세요,\n프론트엔드 개발자 고해찬입니다.',
  content:
    '여러 경험을 통해, 이제 <span class="text-primary font-medium">\'웹의 깊이\'</span>에 집중하고자 하는 3년 차 프론트 엔드 개발자입니다.<br><br>3년간 한 회사에서 Vue 2/3, Android(Java), iOS(Swift), C# WPF 개발을 담당하며 <span class="text-primary font-medium">설계부터 배포까지 전 과정을 경험</span>했습니다. 하지만 여러 기술을 다루다 보니 특정 영역에서 깊이 있는 전문성을 쌓아야 한다는 필요성을 느꼈고, 웹 프론트엔드에 집중하기로 결정했습니다.<br><br>현재는 <span class="text-primary font-medium">Vue 3</span> 기반으로 개발하고 있으며, <span class="text-primary font-medium">React/React Native</span> 학습을 통해 프론트엔드 전문성을 먼저 확보한 후, 장기적으로는 서버 개발까지 아우르는 풀스택 개발자로 성장하고자 합니다.',
}

const CategoryData: Record<string, CategoryData> = {
  education: {
    title: 'Education',
    infor: [
      {
        name: '한국 폴리텍 대학',
        content: ['컴퓨터정보과'],
        period: [
          {
            startDate: '2018-03',
            endDate: '2020-02',
          },
        ],
      },
      {
        name: '우송대학교',
        content: ['컴퓨터 정보 보안과'],
        period: [
          {
            startDate: '2020-03',
            endDate: '2022-02',
          },
        ],
      },
      {
        name: '비트교육센터',
        content: ['닷넷 초급과정 수료'],
        period: [
          { startDate: '2020-07', endDate: '2020-08' },
          { startDate: '2020-12', endDate: '2021-02' },
        ],
      },
    ],
  },
  career: {
    title: 'Career',
    infor: [
      {
        name: '(주) 주빅스',
        content: ['주임 연구원'],
        period: [
          {
            startDate: new Date('2022-07-06'),
            endDate: new Date('2025-10-31'),
          },
        ],
      },
    ],
  },
  licenses: {
    title: 'Licenses',
    infor: [
      {
        name: '정보처리산업기사',
        content: ['정보처리산업기사'],
        period: [{ startDate: null, endDate: new Date('2019-05-22') }],
      },
      {
        name: '정보처리기사',
        content: ['정보처리기사'],
        period: [{ startDate: null, endDate: new Date('2022-06-17') }],
      },
    ],
  },
  skills: {
    title: 'Skills',
    infor: [
      {
        name: 'FrontEnd',
        content: ['Vue 2/3', 'TypeScript'],
        period: null,
      },
      {
        name: 'Application',
        content: ['Android(Java)', 'Swift', 'WPF'],
        period: null,
      },
      {
        name: 'Dev',
        content: ['Docker', 'Vite'],
        period: null,
      },
      {
        name: 'Tools',
        content: [
          'VS Code',
          'Android Studio',
          'XCode',
          'Visual Studio',
          'GitHub',
        ],
        period: null,
      },
    ],
  },
}
</script>
<template>
  <!--자기소개 섹션-->
  <section
    class="bg-surface h-auto p-8 pb-8 md:p-14 md:pb-0 lg:p-20 lg:pb-0 xl:grid xl:grid-cols-3 xl:grid-rows-1 xl:gap-x-8"
  >
    <!-- 소개&내용 -->
    <div>
      <p
        class="text-primary text-lg font-medium whitespace-pre-line sm:text-xl md:text-xl lg:text-2xl"
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
        <div class="flex gap-x-2">
          <div class="bg-gray w-1 self-stretch" />
          <span
            class="sm:text-md min-w-20 text-sm font-normal tracking-wider text-balance md:min-w-23 lg:min-w-27 lg:text-lg xl:min-w-30"
          >
            {{ categoryItem.title }}
          </span>
        </div>
        <div class="bg-gray mt-1 h-px w-full" />
        <!-- 카테고리 content -->
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
