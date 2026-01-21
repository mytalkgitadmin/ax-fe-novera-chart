# Lib

이 디렉토리에는 유틸리티 함수, 헬퍼 함수, API 클라이언트 등을 배치합니다.

## 구조 예시

```
lib/
├── api/
│   ├── client.ts
│   └── endpoints.ts
├── utils/
│   ├── format.ts
│   └── validation.ts
└── constants.ts
```

## 예시

```typescript
// lib/utils/format.ts
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('ko-KR');
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  }).format(amount);
};
```
