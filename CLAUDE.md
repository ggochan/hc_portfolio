# hc-portfolio

Vue 3 + TypeScript 기반 개인 포트폴리오 웹사이트

## 기술 스택

- **프레임워크**: Vue 3 (Composition API)
- **언어**: TypeScript
- **빌드 도구**: Vite 7
- **스타일링**: Tailwind CSS v4
- **상태 관리**: Pinia
- **라우팅**: Vue Router 4
- **유틸리티**: VueUse
- **테스트**: Vitest + jsdom

## 프로젝트 구조

```
src/
├── assets/          # 정적 파일 (이미지, SVG 등)
├── components/      # 재사용 가능한 Vue 컴포넌트
├── views/           # 페이지 컴포넌트
├── router/          # Vue Router 설정
├── App.vue          # 루트 컴포넌트
├── main.ts          # 앱 진입점
└── style.css        # 전역 스타일
tests/               # Vitest 테스트 파일
```

## 주요 명령어

```bash
npm run dev        # 개발 서버 실행 (포트 5173)
npm run build      # 프로덕션 빌드
npm run preview    # 빌드된 앱 미리보기
npm run test       # 테스트 실행 (watch 모드)
npm run test:run   # 테스트 단일 실행
```

## 개발 환경 설정

- Path alias: `@` → `src/`
- Auto Import: vue, vue-router, pinia, @vueuse/core API 자동 임포트 (unplugin-auto-import)
- 타입 정의: `src/auto-imports.d.ts`에 자동 생성

## 코드 컨벤션

- Vue 컴포넌트: `<script setup lang="ts">` 사용
- 스타일: Tailwind CSS 유틸리티 클래스 우선
- 테스트 파일: `tests/**/*.spec.ts` 패턴