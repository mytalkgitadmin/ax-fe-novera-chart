# Components

이 디렉토리에는 재사용 가능한 React 컴포넌트들을 배치합니다.

## 구조 예시

```
components/
├── Button/
│   ├── Button.tsx
│   ├── Button.module.css
│   └── index.ts
├── Header/
│   ├── Header.tsx
│   └── index.ts
└── ...
```

## 컴포넌트 작성 규칙

1. **Named Export 사용**: 모든 컴포넌트는 Named Export로 작성합니다.
2. **화살표 함수 사용**: 함수 컴포넌트는 화살표 함수로 작성합니다.
3. **타입 정의**: Props는 TypeScript 타입으로 명시합니다.

## 예시

```typescript
// components/Button/Button.tsx
type ButtonProps = {
  label: string;
  onClick: () => void;
};

export const Button = ({ label, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{label}</button>;
};
```
