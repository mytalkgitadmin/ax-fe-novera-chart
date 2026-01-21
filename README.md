# Frontend Scaffold (Next.js)

Next.js + TypeScript 프로젝트를 위한 프론트엔드 스캐폴드 템플릿입니다.

## 📋 포함된 도구

### 프레임워크 & 라이브러리

- **Next.js 15.1.6** - React 프레임워크 (App Router)
- **React 19.0.0** - UI 라이브러리
- **TypeScript 5.9.3** - 타입 안정성

### 코드 품질

- **ESLint 9.39.2** - 코드 린팅 (Flat Config + Next.js Config)
- **Prettier 3.4.2** - 코드 포매팅

### Git 워크플로우

- **Husky 9.1.7** - Git hooks 관리
- **Commitizen + cz-customizable** - 인터랙티브 커밋 메시지 작성
- **Commitlint** - 커밋 메시지 규칙 검증

### ESLint 플러그인

- `eslint-config-next` - Next.js 최적화 규칙
- `eslint-plugin-react` - React 린팅
- `eslint-plugin-react-hooks` - React Hooks 규칙
- `eslint-plugin-import` - import/export 구문 검증
- `eslint-plugin-simple-import-sort` - import 자동 정렬
- `eslint-plugin-prettier` - Prettier 통합

## 🚀 시작하기

### 1. 프로젝트 복사

```bash
# 이 템플릿을 새 프로젝트로 복사
cp -r frontend-scaffold my-new-project
cd my-new-project

# Git 초기화 (선택사항)
rm -rf .git
git init
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 환경 변수 설정

```bash
# .env.local 파일 생성
cat > .env.local << 'EOF'
NEXT_PUBLIC_API_URL=http://localhost:3000/api
API_SECRET_KEY=your-secret-key
EOF
```

### 4. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 5. package.json 수정

프로젝트에 맞게 `package.json`의 다음 필드를 수정하세요:

```json
{
  "name": "your-project-name",
  "version": "1.0.0",
  "description": "Your project description"
}
```

## 📜 사용 가능한 스크립트

```bash
# 개발 서버
npm run dev           # 개발 서버 실행 (http://localhost:3000)

# 빌드
npm run build         # 프로덕션 빌드
npm run start         # 프로덕션 서버 실행

# 코드 린팅
npm run lint          # Next.js ESLint 실행
npm run lint:fix      # ESLint 자동 수정

# 코드 포매팅
npm run format        # Prettier로 코드 포매팅
npm run format:check  # 포매팅 검사만 수행

# 타입 체크
npm run type-check    # TypeScript 타입 검증

# 커밋
npm run commit        # Commitizen으로 인터랙티브 커밋

# Jira 연동
npm run jira:create   # Jira 이슈 생성
```

## 🔧 Git Hooks

Husky를 통해 다음 Git hooks가 자동으로 실행됩니다:

### Pre-commit

- `npm run lint` - 코드 린팅
- `npm run type-check` - 타입 체크

### Commit-msg

- Commitlint - 커밋 메시지 규칙 검증
- Jira 티켓 번호 검증 (설정된 경우)

### Prepare-commit-msg

- 커밋 메시지 템플릿 자동 적용

## 📝 커밋 메시지 규칙

이 프로젝트는 [Conventional Commits](https://www.conventionalcommits.org/) 규칙을 따릅니다.

### 커밋 타입

- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 코드 포매팅 (기능 변경 없음)
- `refactor`: 리팩토링
- `test`: 테스트 추가/수정
- `chore`: 빌드/설정 변경

### 커밋 예시

```bash
# Commitizen 사용 (권장)
npm run commit

# 또는 직접 작성
git commit -m "feat: 사용자 로그인 기능 추가"
git commit -m "fix: 로그인 버튼 클릭 이벤트 수정"
```

## 📁 프로젝트 구조

```
frontend-scaffold/
├── public/              # 정적 파일 (이미지, 폰트 등)
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── layout.tsx  # 루트 레이아웃
│   │   ├── page.tsx    # 홈 페이지
│   │   └── globals.css # 전역 스타일
│   ├── components/     # 재사용 가능한 컴포넌트
│   ├── lib/           # 유틸리티 함수, API 클라이언트
│   ├── types/         # TypeScript 타입 정의
│   └── styles/        # 추가 스타일 파일
├── .husky/            # Git hooks
├── scripts/           # 빌드/배포 스크립트
├── next.config.ts     # Next.js 설정
├── tsconfig.json      # TypeScript 설정
├── eslint.config.mjs  # ESLint 설정
└── package.json       # 프로젝트 메타데이터
```

## 🎯 Next.js App Router

이 템플릿은 Next.js 15의 App Router를 사용합니다.

### 주요 특징

- **파일 기반 라우팅**: `src/app` 디렉토리 구조가 URL 경로가 됩니다.
- **서버 컴포넌트**: 기본적으로 모든 컴포넌트는 서버 컴포넌트입니다.
- **레이아웃**: `layout.tsx`로 중첩 레이아웃을 구성할 수 있습니다.

### 페이지 생성 예시

```bash
# /about 페이지 생성
mkdir -p src/app/about
cat > src/app/about/page.tsx << 'EOF'
const AboutPage = () => {
  return <div>About Page</div>;
};

export default AboutPage;
EOF
```

## ⚙️ TypeScript 설정

### 주요 설정

- **Target**: ES2020
- **JSX**: preserve (Next.js가 자동으로 처리)
- **Module**: ESNext
- **Strict Mode**: 활성화
- **Path Mapping**: `@/*`로 절대 경로 import 가능

### 절대 경로 Import 예시

```typescript
// 상대 경로 대신
import { Button } from '../../../components/Button';

// 절대 경로 사용
import { Button } from '@/components/Button';
```

### 엄격한 타입 체크 옵션

- `noUnusedLocals` - 사용하지 않는 로컬 변수 금지
- `noUnusedParameters` - 사용하지 않는 매개변수 금지
- `noUncheckedIndexedAccess` - 인덱스 접근 시 undefined 체크 강제
- `noImplicitOverride` - override 키워드 명시 강제
- `noPropertyAccessFromIndexSignature` - 인덱스 시그니처 속성 접근 제한

## 🔍 ESLint 설정

### Flat Config (ESLint 9.x) + Next.js

이 프로젝트는 ESLint 9.x의 Flat Config와 Next.js 최적화 규칙을 사용합니다.

### 주요 규칙

- **Next.js 최적화**: `eslint-config-next` 통합
- **Import 자동 정렬**: React → Next.js → 외부 라이브러리 → 내부 모듈
- **Named Export 우선**: 일반 컴포넌트는 Named Export 사용
- **Default Export 허용**: App Router 파일(`page.tsx`, `layout.tsx` 등)은 Default Export 사용
- **화살표 함수**: 함수 컴포넌트는 화살표 함수로 작성
- **Prettier 통합**: 코드 스타일 자동 수정

### Import 정렬 예시

```typescript
// ✅ 올바른 순서
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/Button';
import { formatDate } from '@/lib/utils';
import './styles.css';
```

## 🎨 Prettier 설정

### 주요 설정

- **printWidth**: 100
- **tabWidth**: 2
- **semi**: true
- **singleQuote**: true
- **trailingComma**: 'all'

## 📦 Jira 연동 (선택사항)

`scripts/jira/` 디렉토리에 Jira 연동 스크립트가 포함되어 있습니다.

### 설정 방법

1. `scripts/jira/jira-create-config.json` 수정
2. Jira API 토큰 설정
3. `npm run jira:create`로 이슈 생성

자세한 내용은 `scripts/jira/README.md`를 참고하세요.

## 🌐 환경 변수

Next.js는 `.env.local` 파일에서 환경 변수를 로드합니다.

### 환경 변수 타입

1. **공개 변수** (클라이언트에서 접근 가능)
   - `NEXT_PUBLIC_` 접두사 필요
   - 브라우저에 노출됨
   - 예: `NEXT_PUBLIC_API_URL`

2. **비공개 변수** (서버에서만 접근 가능)
   - 접두사 없음
   - 서버 컴포넌트와 API Route에서만 사용 가능
   - 예: `DATABASE_URL`, `API_SECRET_KEY`

### 사용 예시

```typescript
// 클라이언트 컴포넌트
'use client';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// 서버 컴포넌트 또는 API Route
const dbUrl = process.env.DATABASE_URL;
```

## 🚀 배포

### Vercel (권장)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### Docker

```bash
# next.config.ts에서 output: 'standalone' 설정 후
npm run build
docker build -t my-app .
docker run -p 3000:3000 my-app
```

## 📄 라이선스

이 프로젝트는 템플릿으로 자유롭게 사용 가능합니다.

## 🤝 기여

이슈나 개선 사항이 있다면 자유롭게 PR을 보내주세요.

---

**Happy Coding! 🚀**
