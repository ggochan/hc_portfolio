import type { Project } from '@/types/Project'

export const ProjectData: Project[] = [
  {
    type: 1,
    status: 0,
    title:
      'IoT 콘센트를 이용한 클라우드 서버 기반의 전기 에너지(e-Energy) Sales PlatForm 개발',
    content:
      'IoT 콘센트와 클라우드 플랫폼을 통하여 전기에너지를 재판매 한 후, 사업주가 수익을 창출할 수 있는 O2O 서비스 기반의 비즈니스 모델 개발',
    period: { startDate: '2022-07', endDate: '2023-06' },
    task: ['FrontEnd', 'App Application(Android, iOS)'],
    personnel: 5,
    skills: {
      language: ['Vue 2', 'JavaScript', 'Java', 'Swift'],
      dev: ['Docker', 'GitHub'],
      tools: ['VS Code', 'Android Studio', 'XCode'],
    },
  },
  {
    type: 2,
    status: 0,
    title: 'HCU 검수 프로그램 개발',
    content: 'TCP/IP 통신 프로토콜 기반 HCU 보드 검수 프로그램 개발',
    period: { startDate: '2022-12', endDate: '2023-02' },
    task: ['Window Application'],
    personnel: 2,
    skills: {
      language: ['WPF(C#)'],
      dev: [''],
      tools: ['Visual Studio'],
    },
  },
  {
    type: 1,
    status: 0,
    title:
      'OCPP 기반 Wi-SUN 무선 게이트웨이를 활용한 과금형 콘센트 통합관리 시스템 개발',
    content:
      'OCPP 기반 Wi-SUN 무선 게이트웨이, 과금형 콘센트와 클라우드 통합 관리 시스템을 통해 전기차 충전 서비스 개발 및 실증 ',
    period: { startDate: '2023-07', endDate: '2025-07' },
    task: ['FrontEnd', 'App Application(Android, iOS)'],
    personnel: 5,
    skills: {
      language: ['Vue 3', 'JavaScript', 'Java', 'Swift'],
      dev: ['Docker', 'GitHub'],
      tools: ['VS Code', 'Android Studio', 'XCode'],
    },
  },
  {
    type: 2,
    status: 0,
    title: '가스미터 검수 프로그램 개발',
    content: 'TCP/IP 통신 프로토콜 기반 가스미터 기기 검수 프로그램 개발',
    period: { startDate: '2024-10', endDate: '2024-12' },
    task: ['Window Application'],
    personnel: 2,
    skills: {
      language: ['WPF(C#)'],
      dev: [''],
      tools: ['Visual Studio'],
    },
  },
  {
    type: 1,
    status: 2,
    title:
      'IoT 과금형 콘센트를 활용한 e-Energy 유료서비스 O2O 플랫폼(인도네시아 실증)',
    content:
      'IoT 콘센트를 활용한 e_Energy 유료서비스 플랫폼 해외 구축 사업을 통해 제품 현지화 후 글로벌 제품을 확보하기 위한 실증(PoC) 및 시범서비스 수행',
    period: { startDate: '2025-04', endDate: '2025-10' },
    task: ['FrontEnd', 'App Application(Android, iOS)'],
    personnel: 5,
    skills: {
      language: ['Vue 3', 'TypeScript', 'Java'],
      dev: ['Docker', 'GitHub'],
      tools: ['VS Code', 'Android Studio'],
    },
  },
  {
    type: 1,
    status: 0,
    title: '브릿지 서버&모니터링 대시보드 웹 개발',
    content:
      '다수 업체 데이터의 브릿지 서버 경유 메인 서버 수집 구조 및 모니터링 시스템 개발',
    period: { startDate: '2025-06', endDate: '2025-10' },
    task: ['FrontEnd'],
    personnel: 3,
    skills: {
      language: ['Vue 3', 'TypeScript'],
      dev: ['Docker', 'GitHub'],
      tools: ['VS Code'],
    },
  },
]
