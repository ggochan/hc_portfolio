import type { Project } from '@/types/Project'

export const ProjectData: Project[] = [
  {
    index: 1,
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
    more: {
      summary: [
        '앱을 통해 IoT 콘센트를 결제 · 제어하고, 매장과 관리자가 이를 관리하는 구조의 플랫폼으로 <br>외주 개발로 진행되던 서비스를 인수받아 내부 요구사항에 맞게 확장 • 운영한 프로젝트 입니다. ',
      ],
      config: [
        '총 5종의 사용자 앱 / 매장 관리 앱 / 관리자 대시보드 웹으로 구성',
        '웹 Vue 2 + Vuex + JavaScript / 앱 Android(Java), iOS(Swift) Native 기반',
        'Element-UI 라이브러리를 이용한 UI/UX 구성',
        'IoT 플러그와 BLE 통신을 통해 결제 후 전력 제공',
        'Azure 클라우드 기반 Spring Boot 백엔드 서버',
      ],
      role: [
        '외주 개발 산출물 및 전체 구조 파악',
        '사용자 앱 · 매장 앱 · 관리자 웹의 프론트엔드 / 앱 개발 및 기능 확장',
        '해외 서비스 확장을 위한 앱 · 웹 추가 개발 및 배포\n(인도네시아, 베트남, 일본, 인도 등)',
        'FW / HW / 백엔드와 협업하며 BLE 통신 및 결제 흐름 연동',
      ],
      point: [
        {
          title: 'BLE 기반 IoT 플러그 제어',
          content: [
            'QR을 통해 BLE 통신을 진행하고 사용자 앱 결제 후 IoT 플러그 제어',
          ],
        },
        {
          title: '다중 사용자 구조 설계',
          content: ['사용자 / 매장 / 관리자 역할 분리 및 기능 구성'],
        },
        {
          title: '해외 PG 연동 결제 구현',
          content: [
            '국가별 해외 PG사 연동을 통한 결제 기능 개발 및 서비스 확장',
          ],
        },
      ],
      gallery: {
        adminWeb: {
          desktop: [
            {
              src: 'images/c_project/c_admin_dashboard/c_admin_dashboard_0.webp',
              alt: '0',
            },
            {
              src: '/images/c_project/c_admin_dashboard/c_admin_dashboard_1.webp',
              alt: '1',
            },
            {
              src: '/images/c_project/c_admin_dashboard/c_admin_dashboard_2.webp',
              alt: '2',
            },
            {
              src: '/images/c_project/c_admin_dashboard/c_admin_dashboard_3.webp',
              alt: '3',
            },
          ],
        },
        userApp: {
          android: [
            {
              src: '/images/c_project/c_user_android/c_user_android_0.webp',
              alt: '0',
            },
            {
              src: '/images/c_project/c_user_android/c_user_android_1.webp',
              alt: '1',
            },
            {
              src: '/images/c_project/c_user_android/c_user_android_2.webp',
              alt: '2',
            },
            {
              src: '/images/c_project/c_user_android/c_user_android_3.webp',
              alt: '3',
            },
            {
              src: '/images/c_project/c_user_android/c_user_android_4.webp',
              alt: '4',
            },
          ],
          ios: [
            {
              src: '/images/c_project/c_user_ios/c_user_ios_0.webp',
              alt: '0',
            },
            {
              src: '/images/c_project/c_user_ios/c_user_ios_1.webp',
              alt: '1',
            },
            {
              src: '/images/c_project/c_user_ios/c_user_ios_2.webp',
              alt: '2',
            },
          ],
        },
        storeApp: {
          android: [
            {
              src: '/images/c_project/c_store_android/c_store_android_0.webp',
              alt: '0',
            },
            {
              src: '/images/c_project/c_store_android/c_store_android_1.webp',
              alt: '1',
            },
            {
              src: '/images/c_project/c_store_android/c_store_android_2.webp',
              alt: '2',
            },
          ],
          ios: [
            {
              src: '/images/c_project/c_store_ios/c_store_ios_0.webp',
              alt: '0',
            },
            {
              src: '/images/c_project/c_store_ios/c_store_ios_1.webp',
              alt: '1',
            },
            {
              src: '/images/c_project/c_store_ios/c_store_ios_2.webp',
              alt: '2',
            },
          ],
        },
      },
    },
  },
  {
    index: 2,
    type: 2,
    status: 0,
    title: '제어 유닛(HCU) 검수 윈도우 프로그램 개발',
    content: 'TCP / IP 통신 프로토콜 기반 HCU 보드 검수 프로그램 개발',
    period: { startDate: '2022-12', endDate: '2023-02' },
    task: ['Window Application'],
    personnel: 2,
    skills: {
      language: ['WPF(C#)'],
      dev: [''],
      tools: ['Visual Studio'],
    },
    more: {
      summary: [
        '제어 유닛(HCU)과 TCP / IP 통신을 통해 장비 데이터를 수집·검증하는 Windows 클라이언트 프로그램',
      ],
      config: [
        'Windows 클라이언트 (C#, WPF)',
        '설정 파일 기반 환경 구성 및 로그 저장 (txt)',
        'Excel 연동 및 입력 / 결과 저장',
        '제어 유닛(HCU) 연동 (TCP/IP 통신)',
        '백엔드 서버 (추후 확장)',
      ],
      role: [
        'C# WPF 기반 Windows 클라이언트 단독 개발',
        '설정 파일(txt) 기반 환경 설정 및 관리 / 로그 저장 기능 구현',
        'Excel 데이터(MAC, 인증서, 라이선스) 로드 및 검증 로직 구현',
        '제어 유닛(HCU)과 TCP / IP 통신을 통한 실시간 데이터 수집 구현',
        '검증 입력 / 결과 Excel 저장 기능 구현',
      ],
      point: [
        {
          title: 'txt 설정 파일 기반으로 동적 조회/수정/삭제 가능한 구조 설계',
        },
        {
          title:
            'Excel 데이터를 기반으로 파일 경로 인증서 · 인증키 · 라이선스 파일 비교 검증 로직 구현',
        },
        {
          title:
            '파일 비교 검증 → 장비(HCP 보드) 통신 → 오차 범위 검증의 단계적 플로우 설계',
        },
        {
          title:
            'TCP/IP 통신 중 진행 상태를 실시간으로 사용자에게 피드백하도록 UI 반응 처리',
        },
        {
          title: '모든 검증 결과 및 로그를 기록하여 추적 가능성 확보',
        },
      ],
      gallery: {
        windowApp: {
          window: [
            {
              src: '/images/hcu_project/hcu_0.webp',
              alt: '0',
            },
            {
              src: '/images/hcu_project/hcu_1.webp',
              alt: '1',
            },
          ],
        },
      },
    },
  },
  {
    index: 3,
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
      language: ['Vue 3', 'TypeScript', 'Java', 'Swift'],
      dev: ['Docker', 'GitHub'],
      tools: ['VS Code', 'Android Studio', 'XCode'],
    },
    more: {
      summary: [
        '기존 충전 서비스 프로젝트를 기반으로 Vue 3 도입, EV 충전, Wi-SUN 무선 통신으로 개선된 프로젝트로써, 기존 구조를 전체적으로 개선하며 서비스 확장을 경험한 프로젝트입니다.',
      ],
      config: [
        '총 4종의 사용자 앱 / 매장 관리 웹 / 관리자 대시보드 웹으로 구성',
        '웹 Vue 3 + Pinia + TypeScript / 앱 Android(Java), iOS(Swift) Native 기반',
        'IoT 전기차용 플러그와 Wi-SUN 무선 통신을 이용해 전력 제공 후 후불 결제',
        '전기차 개방형 통신 규약(OCPP) 인증',
        'Azure 클라우드 기반 Spring Boot 백엔드 서버',
      ],
      role: [
        'Vue 3 + Vuetify 기반 웹 UI/UX 전반 개선 및 화면 구조 재설계',
        '프론트엔드 · 앱(Android / iOS) 개발 담당으로 클라이언트 영역 전반 구현',
        '클라이언트 – 서버 간 제어 · 결제 요청 흐름 연동 및 동작 검증',
      ],
      point: [
        {
          title: 'Vue 2 → Vue 3 마이그레이션 및 Composition API 기반 구조 전환',
        },
        {
          title:
            '웹 · 앱 전반 UI / UX 개선 및 사용자 시나리오 중심 화면 흐름 재정비',
        },
        {
          title: 'BLE 직접 통신에서 Wi-SUN 무선 통신 기반 구조로 전환',
        },
        {
          title: '선불 결제 방식에서 사용량 기반 후불 결제 흐름 설계 및 구현',
        },
        {
          title:
            'EV 충전 서비스 대응을 위한 OCPP 인증 연동 및 서비스 확장 경험',
        },
      ],
      gallery: {
        adminWeb: {
          desktop: [
            {
              src: '/images/v_project/v_admin_dashboard/pc/v_admin_dashboard_pc_0.webp',
              alt: '0',
            },
            {
              src: '/images/v_project/v_admin_dashboard/pc/v_admin_dashboard_pc_1.webp',
              alt: '1',
            },
            {
              src: '/images/v_project/v_admin_dashboard/pc/v_admin_dashboard_pc_2.webp',
              alt: '2',
            },
            {
              src: '/images/v_project/v_admin_dashboard/pc/v_admin_dashboard_pc_3.webp',
              alt: '3',
            },
            {
              src: '/images/v_project/v_admin_dashboard/pc/v_admin_dashboard_pc_4.webp',
              alt: '4',
            },
          ],
          mobile: [
            {
              src: '/images/v_project/v_admin_dashboard/mobile/v_admin_dashboard_mobile_0.webp',
              alt: '0',
            },
            {
              src: '/images/v_project/v_admin_dashboard/mobile/v_admin_dashboard_mobile_1.webp',
              alt: '1',
            },
            {
              src: '/images/v_project/v_admin_dashboard/mobile/v_admin_dashboard_mobile_2.webp',
              alt: '2',
            },
            {
              src: '/images/v_project/v_admin_dashboard/mobile/v_admin_dashboard_mobile_3.webp',
              alt: '3',
            },
            {
              src: '/images/v_project/v_admin_dashboard/mobile/v_admin_dashboard_mobile_4.webp',
              alt: '4',
            },
          ],
        },
        storeWeb: {
          desktop: [
            {
              src: '/images/v_project/v_store_dashboard/pc/v_store_dashboard_pc_0.webp',
              alt: '0',
            },
            {
              src: '/images/v_project/v_store_dashboard/pc/v_store_dashboard_pc_1.webp',
              alt: '1',
            },
            {
              src: '/images/v_project/v_store_dashboard/pc/v_store_dashboard_pc_2.webp',
              alt: '2',
            },
            {
              src: '/images/v_project/v_store_dashboard/pc/v_store_dashboard_pc_3.webp',
              alt: '3',
            },
            {
              src: '/images/v_project/v_store_dashboard/pc/v_store_dashboard_pc_4.webp',
              alt: '4',
            },
          ],
          mobile: [
            {
              src: '/images/v_project/v_store_dashboard/mobile/v_store_dashboard_mobile_0.webp',
              alt: '0',
            },
            {
              src: '/images/v_project/v_store_dashboard/mobile/v_store_dashboard_mobile_1.webp',
              alt: '1',
            },
            {
              src: '/images/v_project/v_store_dashboard/mobile/v_store_dashboard_mobile_2.webp',
              alt: '2',
            },
          ],
        },
        userApp: {
          android: [
            {
              src: '/images/v_project/v_user_android/v_user_android_0.webp',
              alt: '0',
            },
            {
              src: '/images/v_project/v_user_android/v_user_android_1.webp',
              alt: '1',
            },
            {
              src: '/images/v_project/v_user_android/v_user_android_2.webp',
              alt: '2',
            },
            {
              src: '/images/v_project/v_user_android/v_user_android_3.webp',
              alt: '3',
            },
            {
              src: '/images/v_project/v_user_android/v_user_android_4.webp',
              alt: '4',
            },
          ],
          ios: [
            {
              src: '/images/v_project/v_user_ios/v_user_ios_0.webp',
              alt: '0',
            },
            {
              src: '/images/v_project/v_user_ios/v_user_ios_1.webp',
              alt: '1',
            },
            {
              src: '/images/v_project/v_user_ios/v_user_ios_2.webp',
              alt: '2',
            },
            {
              src: '/images/v_project/v_user_ios/v_user_ios_3.webp',
              alt: '3',
            },
            {
              src: '/images/v_project/v_user_ios/v_user_ios_4.webp',
              alt: '4',
            },
          ],
        },
      },
    },
  },
  {
    index: 4,
    type: 2,
    status: 0,
    title: '가스미터 검수 윈도우 프로그램 개발',
    content: 'TCP / IP 통신 프로토콜 기반 가스미터 기기 검수 프로그램 개발',
    period: { startDate: '2024-10', endDate: '2024-12' },
    task: ['Window Application'],
    personnel: 2,
    skills: {
      language: ['WPF(C#)'],
      dev: [''],
      tools: ['Visual Studio'],
    },
    more: {
      summary: [
        '수치를 검증하는 추가 기기와 TCP / IP 통신을 통해 장비 데이터를 수집·검증하는 Windows 클라이언트 프로그램',
      ],
      config: [
        'Windows 클라이언트 (C#, WPF)',
        '설정 파일 기반 환경 구성 및 로그 / 결과 저장 (txt)',
        '리모컨 + 기기 연동(TCP/IP 통신)',
      ],
      role: [
        'C# WPF 기반 Windows 클라이언트 개발',
        '설정 파일(txt) 기반 환경 설정 및 관리 / 로그 저장',
        '통신 포트 및 통신 속도 조절 설정 기능',
        '리모컨 조절에 따른 실시간 데이터 수집',
      ],
      point: [
        {
          title:
            'txt 설정 파일 기반으로 동적 조회 / 수정 / 삭제 가능한 구조 설계',
        },
        {
          title: '설정 파일(txt) 기반 환경 설정 및 관리 / 로그 저장 기능 구현',
        },
        {
          title: '기기와 TCP / IP 통신을 통한 실시간 데이터 수집 구현',
        },
      ],
      gallery: {
        windowApp: {
          window: [
            {
              src: '/images/inspact_project/inspact_0.webp',
              alt: '0',
            },
          ],
        },
      },
    },
  },
  {
    index: 5,
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
    more: {
      summary: [
        '현지화에 맞춘 IoT 플러그와 플랫폼으로 BLE/LTE 통신을 모두 제공하며, 실제 제품화에 초점을 둔 프로젝트',
      ],
      config: [
        '총 4종의 사용자 앱 / 매장 관리 웹 / 관리자 대시보드 웹으로 구성',
        '웹 Vue 3 + Pinia + TypeScript / 앱 Android(Java), iOS(Swift) Native 기반',
        '선불 결제 방식으로 사용자 통신망 환경에 따라 BLE/LTE로 기기제어',
        'BLE를 통한 기기 LTE 정보 세팅',
        'Azure 클라우드 기반 Spring Boot 백엔드 서버',
      ],
      role: [
        'WEB 환경 모바일 블루투스 구현',
        'BLE를 통한 LTE 정보 세팅 기능 구현',
        '통신망 환경에 따라 BLE / LTE 통신 제어 변경',
      ],
      point: [
        {
          title: 'Web 환경에서 Android, iOS 블루투스 검증',
        },
        {
          title: 'BLE를 통신을 이용한 LTE 설정값 세팅 검증',
        },
        {
          title: 'LTE 통신 상태에 따라 BLE로 통신 요청하는 로직 검증',
        },
      ],
    },
  },
  {
    index: 6,
    type: 1,
    status: 0,
    title: '브릿지 서버&모니터링 대시보드 웹 개발',
    content:
      '다수 업체의 데이터 수집과 메인 서버로 전송하는 브릿지 서버 및 모니터링 대시보드 개발',
    period: { startDate: '2025-06', endDate: '2025-10' },
    task: ['FrontEnd'],
    personnel: 3,
    skills: {
      language: ['Vue 3', 'TypeScript'],
      dev: ['Docker', 'GitHub'],
      tools: ['VS Code'],
    },
    more: {
      summary: [
        '다수 업체로부터 수집되는 데이터를 중간 브릿지 서버를 통해 메인 서버로 전달되는 구조로써, 데이터 흐름을 시각적으로 확인하고 관리하기 위한 모니터링 웹 대시보드를 개발한 프로젝트',
      ],
      config: [
        'Vue 3 + Tailwind CSS + Pinia 기반 대시보드 웹',
        'C 계열 기반 업체 수집 서버',
        'Spring Boot 메인 서버',
      ],
      role: [
        'Vue 3 기반 모니터링 웹 대시보드 설계 및 개발 담당',
        'Tailwind CSS를 활용한 데이터 중심 UI 구현',
        'JSON 스키마 기반 동적 테이블 구조 설계 및 업체 확장 대응',
        'Tanstack Table을 이용한 SSP 구조 데이터 테이블 구현',
      ],
      point: [
        {
          title:
            '업체 → 브릿지 서버 → 메인 서버로 이어지는 데이터 흐름을 시각화한 모니터링 화면 구성',
        },
        {
          title:
            'JSON 스키마 변경만으로 테이블 컬럼이 자동 생성되는 유연한 UI 구조',
        },
        {
          title:
            '대량 · 로우 레벨 데이터 특성을 고려한 SSP 테이블 렌더링 및 화면 구성',
        },
      ],
      gallery: {
        web: {
          desktop: [
            {
              src: '/images/bridge_project/pc/bridge_pc_0.webp',
              alt: '0',
            },
            {
              src: '/images/bridge_project/pc/bridge_pc_1.webp',
              alt: '1',
            },
            {
              src: '/images/bridge_project/pc/bridge_pc_2.webp',
              alt: '2',
            },
            {
              src: '/images/bridge_project/pc/bridge_pc_3.webp',
              alt: '3',
            },
          ],
          mobile: [
            {
              src: '/images/bridge_project/mobile/bridge_mobile_0.webp',
              alt: '0',
            },
            {
              src: '/images/bridge_project/mobile/bridge_mobile_1.webp',
              alt: '1',
            },
          ],
        },
      },
    },
  },
]
