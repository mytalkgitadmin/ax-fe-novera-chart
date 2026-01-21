# Types

이 디렉토리에는 TypeScript 타입 정의를 배치합니다.

## 구조 예시

```
types/
├── api.ts
├── user.ts
└── index.ts
```

## 예시

```typescript
// types/user.ts
export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
};

export type UserRole = 'admin' | 'user' | 'guest';
```
