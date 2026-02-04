# HC Portfolio

개인 포트폴리오 웹사이트

## 🔗 Demo

https://hc-portfolio-two.vercel.app/home

## 🛠 Tech Stack

| 분류      | 기술                    |
| --------- | ----------------------- |
| Framework | Vue 3 (Composition API) |
| Language  | TypeScript              |
| Styling   | Tailwind CSS v4, SCSS   |
| Build     | Vite                    |
| Utilities | VueUse, Day.js          |

## 📁 Project Structure

```
src/
├── assets/                 # SVG, 이미지 등 정적 파일
├── components/
│   ├── common/             # 공통 재사용 컴포넌트
│   ├── home/               # Home 페이지 섹션
│   │   ├── project/        # 프로젝트 관련 컴포넌트
│   │   └── ...Section.vue
│   └── layout/             # 레이아웃 컴포넌트
│       ├── nav/            # 네비게이션
│       └── footer/         # 푸터
├── composable/             # Vue Composables
├── data/                   # 정적 데이터
├── layouts/                # 페이지 레이아웃
├── router/                 # 라우터 설정
├── types/                  # TypeScript 타입 정의
└── views/                  # 페이지 뷰
```

## 📄 Pages

| 섹션     | 설명     |
| -------- | -------- |
| #home    | 인트로   |
| #about   | 자기소개 |
| #project | 프로젝트 |
| #contact | 연락처   |
