import type { Category } from '@/types/Category'

export const IntroData = {
  title: '안녕하세요,\n프론트엔드 개발자 고해찬입니다.',
  content:
    '여러 경험을 통해, 이제 <span class="text-primary font-medium">\'웹의 깊이\'</span>에 집중하고자 하는 3년 차 프론트 엔드 개발자입니다.<br><br>3년간 한 회사에서 Vue 2/3, Android(Java), iOS(Swift), C# WPF 개발을 담당하며 <span class="text-primary font-medium">설계부터 배포까지 전 과정을 경험</span>했습니다. 하지만 여러 기술을 다루다 보니 특정 영역에서 깊이 있는 전문성을 쌓아야 한다는 필요성을 느꼈고, 웹 프론트엔드에 집중하기로 결정했습니다.<br><br>현재는 <span class="text-primary font-medium">Vue, Nuxt</span> 기반으로 개발하며 프론트엔드 전문성을 쌓고 있습니다. 향후 <span class="text-primary font-medium">React & Next, React Native</span> 까지 학습을 통해 전문성을 더욱 확장하고 싶습니다. 장기적으로는 서버 개발까지 아우르는 풀스택 개발자로 성장하고자 합니다.',
}

export const CategoryData: Record<string, Category> = {
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
        content: ['.Net 초, 고급 수료'],
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
        period: [{ endDate: new Date('2019-05-22') }],
      },
      {
        name: '정보처리기사',
        content: ['정보처리기사'],
        period: [{ endDate: new Date('2022-06-17') }],
      },
    ],
  },
  skills: {
    title: 'Skills',
    infor: [
      {
        name: 'FrontEnd',
        content: ['Vue 2/3', 'TypeScript'],
      },
      {
        name: 'Application',
        content: ['Android(Java)', 'Swift', 'WPF'],
      },
      {
        name: 'Dev',
        content: ['Docker', 'Vite'],
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
      },
    ],
  },
}
