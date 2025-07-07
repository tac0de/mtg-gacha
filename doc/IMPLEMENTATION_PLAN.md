# MTG Gacha 프로젝트 구현 계획

## 1. 프로젝트 구조 및 폴더 트리
```
/mtg-gacha
├── apps/
│   ├── web/                # Next.js 14 (React 18, TypeScript)
│   └── mobile/             # Capacitor 5 (iOS/Android 래퍼)
├── services/
│   └── gacha-engine/       # Node.js 20 (Express, Gacha 마이크로서비스)
├── packages/
│   ├── shared-ui/          # 공용 UI 컴포넌트
│   ├── shared-lib/         # 공용 비즈니스 로직/유틸
│   └── types/              # 공용 타입 정의
├── database/
│   ├── migrations/         # Supabase 마이그레이션
│   └── seeds/              # 초기 데이터
└── infra/
    ├── docker/             # Docker, Compose
    ├── github-actions/     # CI/CD 워크플로
    └── terraform/          # 인프라 IaC
```

## 2. 기술 스택 및 계층 구조
- **프론트엔드**: Next.js 14, React 18, TypeScript, Tailwind CSS, React Query, shadcn-ui, Headless UI
- **모바일**: Capacitor 5 (웹 코드 래핑)
- **백엔드**: Node.js 20, Express, Supabase(PostgreSQL 15, Auth, Edge Functions), Redis
- **공통**: ESLint, Prettier, Husky, Zod(스키마), Sentry(로깅)
- **CI/CD**: GitHub Actions, Vercel(웹), Fly.io(백엔드), Supabase(데이터)

### 계층 분리
- presentation → service → repository → infra
- 도메인별 Feature 디렉터리(예: gacha, user, payment, inventory, store, admin)
- 공용 코드는 packages/shared-*

## 3. 역할 분담 및 개발 흐름
- **프론트엔드**: UI/UX, 상태 관리, API 연동, 모바일 래핑
- **백엔드**: RESTful API, Gacha 엔진, 인증/권한, 외부 서비스 연동
- **공통/인프라**: 타입/유틸, CI/CD, 배포, 모니터링, IaC
- **문서화**: 코드/아키텍처/운영 문서, API 스펙, 온보딩 가이드

## 4. 공통 모듈 및 유틸리티 설계
- **공용 타입**: packages/types
- **공용 유틸/비즈니스 로직**: packages/shared-lib
- **공용 UI 컴포넌트**: packages/shared-ui
- **API 클라이언트/훅**: 각 앱에서 공용 모듈 import
- **데이터 검증**: Zod 스키마, 공용 유효성 검사 함수

## 5. 외부 서비스 연동 전략
- **결제**: Stripe(웹), Apple/Google IAP(모바일), Toss(한국)
- **인증**: Supabase Auth(JWT, 소셜 로그인), 2FA 옵션
- **이메일**: SendGrid(트랜잭션 메일)
- **카드 메타데이터**: Wizards of the Coast API
- **모니터링/로깅**: Sentry, Grafana, PostHog
- **CDN/배포**: Cloudflare, Vercel, Fly.io

## 6. 개발 및 배포 표준
- **TypeScript 명시적 타입, 단일 책임 원칙**
- **절대경로 import, Circular Dependency 금지**
- **에러 처리: try-catch, Sentry 로깅, UI/시스템 메시지 분리**
- **상태 관리: React Query/Context, Redux/MobX 금지**
- **테스트 가능성, 코드 포맷 자동화(ESLint, Prettier, Husky)**
- **API 응답 구조: status/result/error 명확**
- **Zod 등으로 데이터 검증**

## 7. 일정 및 역할 온보딩
- **1단계**: 폴더/환경 초기화, 공통 모듈 설계, CI/CD 구축
- **2단계**: 핵심 도메인(가챠, 인증, 결제, 컬렉션) 기능 개발
- **3단계**: 외부 연동, 성능/보안/테스트, 운영 자동화
- **온보딩**: 신규 개발자용 README, 코드/아키텍처 다이어그램, 환경설정 가이드 제공

---

> 본 문서는 MTG Gacha 프로젝트의 구조, 역할, 기술, 연동 전략을 명확히 하여 모든 개발자가 일관된 기준으로 개발할 수 있도록 합니다. 