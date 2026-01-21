# Public

이 디렉토리에는 정적 파일들을 배치합니다.

Next.js는 `public` 디렉토리의 파일들을 루트 경로(`/`)에서 제공합니다.

## 사용 예시

```
public/
├── favicon.ico
├── images/
│   └── logo.png
└── fonts/
    └── custom-font.woff2
```

## 접근 방법

```typescript
// 이미지 사용
<Image src="/images/logo.png" alt="Logo" width={200} height={50} />

// 또는
<img src="/images/logo.png" alt="Logo" />
```

## 주의사항

- `public` 디렉토리의 파일명은 빌드 시 해시되지 않으므로, 파일명이 변경되지 않으면 캐싱 문제가
  발생할 수 있습니다.
- 동적으로 변경되는 파일은 `public` 대신 CDN을 사용하는 것이 좋습니다.
