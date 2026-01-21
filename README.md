# 📢 Social Media Campaign Dashboard

소셜 미디어 캠페인 분석 대시보드

## 🎨 미리보기

제공하신 디자인을 기반으로 제작된 현대적인 캠페인 대시보드입니다.

![Dashboard Screenshot](./docs/dashboard-preview.png)

## 📊 주요 기능

### 핵심 메트릭 (KPI)
- 👍 **Total Likes** - 총 좋아요 수
- 💬 **Total Comments** - 총 댓글 수
- 📊 **Total Shares** - 총 공유 수
- ⚡ **Engagement** - 참여율

### 플랫폼 지원
- **Tiktok** - 틱톡 캠페인 데이터
- **Instagram** - 인스타그램 캠페인 데이터
- **Facebook** - 페이스북 캠페인 데이터

### 데이터 시각화
- 🗺️ **Campaign Reach Map** - 국가별 캠페인 도달 범위 (세계 지도)
- 👥 **Influencer Table** - 인플루언서 목록 및 팔로워 수
- 📊 **Audience Age & Gender** - 연령 및 성별 분포 (양방향 바 차트)
- 🎯 **Follower Interest** - 팔로워 관심사 분석 (레이더 차트)

### UI/UX 특징
- 🎨 밝은 테마의 모던한 디자인
- 📱 반응형 레이아웃 (모바일/태블릿/데스크톱)
- 🔄 플랫폼별 실시간 데이터 필터링
- 🎭 부드러운 애니메이션과 호버 효과
- 🔍 인터랙티브 차트 (호버 시 상세 정보 표시)

## 🛠️ 기술 스택

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Charts**: Recharts, Nivo
- **Styling**: CSS (Global Styles)
- **Code Quality**: ESLint, Prettier, Husky

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 대시보드를 확인하세요.

### 3. 빌드

```bash
npm run build
npm run start
```

## 📝 프로젝트 구조

```
src/
├── app/
│   ├── globals.css         # 글로벌 스타일
│   ├── layout.tsx          # 레이아웃 설정
│   └── page.tsx            # 메인 대시보드
├── components/
│   ├── Sidebar.tsx         # 사이드바 네비게이션
│   └── charts/
│       ├── CampaignMapChart.tsx           # 세계 지도 차트
│       ├── InfluencerTable.tsx            # 인플루언서 테이블
│       ├── BidirectionalBarChart.tsx      # 양방향 바 차트
│       └── RadarChart.tsx                 # 레이더 차트
├── lib/
│   └── campaign-data.ts    # 샘플 데이터 생성
└── types/
    └── campaign-data.ts    # 타입 정의
```

## 🎯 주요 컴포넌트

### 1. Sidebar (사이드바)
왼쪽 고정 사이드바로 네비게이션을 제공합니다.

- **User Profile**: 사용자 프로필 (아바타, 이름, 이메일)
- **Search**: 검색 입력 필드
- **Navigation Menu**: 
  - 🏠 Home
  - 📢 Campaign (현재 활성)
  - 💳 Payments
  - ⭐ Influencer
  - ⚙️ Settings
  - 👥 Team
- **Pro Access**: 업그레이드 프로모션 버튼

### 2. Campaign Header
캠페인 정보를 표시하는 헤더 섹션입니다.

- **뒤로가기 버튼**: 이전 페이지로 이동
- **캠페인 아이콘**: 캠페인 로고/아이콘
- **캠페인 정보**: 
  - 이름 (Blue Chips Chicago)
  - 설명 (Diam nullam quis nunc et pretium augue.)
- **메타 정보**: 
  - Status: Active/Inactive 상태
  - Created on: 생성일
- **메뉴 버튼**: 추가 옵션

### 3. Platform Tabs
플랫폼 간 전환 탭입니다.

- Tiktok, Instagram, Facebook 탭
- 선택한 플랫폼에 따라 모든 데이터 동적 변경
- 활성 탭 시각적 표시 (파란색 하단 보더)

### 4. KPI Cards
4개의 핵심 지표 카드입니다.

| 아이콘 | 메트릭 | 설명 |
|--------|--------|------|
| 👍 | Total Likes | 총 좋아요 수 (350,809) |
| 💬 | Total Comments | 총 댓글 수 (186,072) |
| 📊 | Total Shares | 총 공유 수 (120,043) |
| ⚡ | Engagement | 참여율 (48.07%) |

### 5. Influencer Table
인플루언서 정보 테이블입니다.

- **컬럼**: Name, Projects, Follower
- **기능**: 
  - "+ Add Influencer" 버튼
  - 인플루언서 아바타 표시
  - 팔로워 수 포맷팅 (1,620,201)

### 6. Campaign Reach Map
국가별 캠페인 도달 범위를 세계 지도로 표시합니다.

- **정보 패널**:
  - Campaign Reach: 12개국
  - User Reached: 798,985명
  - Period: 9개월
  - Updated: 2s ago
  - Refresh 버튼
- **지도**: 
  - 국가별 색상 구분 (사용자 수에 따라)
  - 호버 시 국가 정보 표시

### 7. Audience Age & Gender
연령대별 남성/여성 분포를 양방향 바 차트로 표시합니다.

- **연령대**: 15-24, 25-34, 35-44, 45-54, 55-64, +64
- **성별**: Male (파란색), Female (초록색)
- **레전드**: 상단에 성별 표시
- **인터랙티브**: 호버 시 정확한 수치 표시

### 8. Follower Interest
팔로워 관심사를 레이더 차트로 표시합니다.

- **카테고리**: Fashion, Technology, Cosmetics, Watches, Cars, Memes, Others
- **플랫폼**: Tiktok (초록색), Twitter (파란색), Facebook (보라색)
- **범위**: 0-100
- **레전드**: 하단에 플랫폼별 색상 표시

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
git commit -m "feat: 인플루언서 추가 기능 구현"
git commit -m "fix: 세계 지도 렌더링 버그 수정"
```

## 🔧 타입 정의

### SocialPlatform
```typescript
type SocialPlatform = 'tiktok' | 'instagram' | 'facebook';
```

### Campaign
```typescript
interface Campaign {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'inactive' | 'completed';
  createdAt: string;
}
```

### CampaignMetrics
```typescript
interface CampaignMetrics {
  totalLikes: number;
  totalComments: number;
  totalShares: number;
  engagement: number;
}
```

### Influencer
```typescript
interface Influencer {
  id: string;
  name: string;
  avatar: string;
  projects: number;
  followers: number;
}
```

### CountryReach
```typescript
interface CountryReach {
  country: string;
  countryCode: string;
  users: number;
  platform: SocialPlatform;
}
```

### AgeDemographics
```typescript
interface AgeDemographics {
  ageGroup: string;
  male: number;
  female: number;
  platform: SocialPlatform;
}
```

### FollowerInterest
```typescript
interface FollowerInterest {
  category: string;
  tiktok: number;
  twitter: number;
  facebook: number;
}
```

## 🔥 개발 현황

### 완료된 기능
- [x] 사이드바 네비게이션
- [x] 캠페인 헤더
- [x] 플랫폼 탭 전환
- [x] KPI 카드 4개
- [x] 인플루언서 테이블
- [x] 세계 지도 차트 (Nivo GeoMap)
- [x] 양방향 바 차트 (연령/성별)
- [x] 레이더 차트 (관심사)
- [x] 반응형 디자인
- [x] 샘플 데이터 생성
- [x] 타입 안정성 (TypeScript)

### 향후 계획
- [ ] 실제 API 연동
- [ ] 데이터베이스 연동
- [ ] 인플루언서 CRUD 기능
  - [ ] 추가
  - [ ] 수정
  - [ ] 삭제
- [ ] 캠페인 관리 기능
  - [ ] 생성
  - [ ] 수정
  - [ ] 삭제
- [ ] 데이터 내보내기 (CSV, PDF)
- [ ] 실시간 데이터 업데이트
- [ ] 다크 모드
- [ ] 다국어 지원
- [ ] 알림 기능
- [ ] 사용자 인증
- [ ] 권한 관리

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
docker build -t campaign-dashboard .
docker run -p 3000:3000 campaign-dashboard
```

## 📞 문의

프로젝트 관련 문의사항이 있으시면 팀 채널로 연락주세요.

---

Made with ❤️ by AXGATE Team
