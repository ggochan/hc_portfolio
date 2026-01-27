<script setup lang="ts">
import type { CategoryItem } from '@/types/Category'

const IntroData = {
  title: '안녕하세요,\n프론트엔드 개발자 고해찬입니다.',
  content:
    '여러 경험을 통해, 이제 <span class="text-primary font-medium">\'웹의 깊이\'</span>에 집중하고자 하는 3년 차 프론트 엔드 개발자입니다.<br><br>3년간 한 회사에서 Vue 2/3, Android(Java), iOS(Swift), C# WPF 개발을 담당하며 <span class="text-primary font-medium">설계부터 배포까지 전 과정을 경험</span>했습니다. 하지만 여러 기술을 다루다 보니 특정 영역에서 깊이 있는 전문성을 쌓아야 한다는 필요성을 느꼈고, 웹 프론트엔드에 집중하기로 결정했습니다.<br><br>현재는 <span class="text-primary font-medium">Vue 3</span> 기반으로 개발하고 있으며, <span class="text-primary font-medium">React/React Native</span> 학습을 통해 프론트엔드 전문성을 먼저 확보한 후, 장기적으로는 서버 개발까지 아우르는 풀스택 개발자로 성장하고자 합니다.',
}

const CategoryData: Record<string, CategoryItem[]> = {
  education: [
    {
      name: '한국 폴리텍 대학',
      content: '컴퓨터정보과',
      period: [
        { startDate: new Date('2018-03'), endDate: new Date('2020-02') },
      ],
    },
    {
      name: '우송대학교',
      content: '컴퓨터 정보 보안과',
      period: [
        { startDate: new Date('2020-03'), endDate: new Date('2022-02') },
      ],
    },
    {
      name: '비트교육센터',
      content: '닷넷 초급과정 수료',
      period: [
        { startDate: new Date('2020-07'), endDate: new Date('2020-08') },
        { startDate: new Date('2020-12'), endDate: new Date('2021-02') },
      ],
    },
  ],
}
</script>
<template>
  <!--자기소개 섹션-->
  <section class="bg-surface grid h-auto p-20 sm:grid-cols-3 sm:gap-x-8">
    <div>
      <p
        class="text-primary text-xl font-medium whitespace-pre-line md:text-2xl lg:text-3xl"
      >
        {{ IntroData.title }}
      </p>
      <p
        class="mt-6 text-base font-light text-black"
        v-html="IntroData.content"
      ></p>
    </div>
    <div class="sm:col-span-2 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-8">
      <div>
        <ul>
          <li v-for="(item, index) in CategoryData.education" :key="index">
            <span class="text-primary text-2xl">•</span>
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li v-for="(item, index) in CategoryData.education" :key="index">
            <span class="text-primary text-2xl">•</span>
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li v-for="(item, index) in CategoryData.education" :key="index">
            <span class="text-primary text-2xl">•</span>
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li v-for="(item, index) in CategoryData.education" :key="index">
            <span class="text-primary text-2xl">•</span>
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped></style>
