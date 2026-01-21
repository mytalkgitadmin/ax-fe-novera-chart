import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Novera 음원 데이터 대시보드',
  description: '플랫폼별 음원 스트리밍 데이터 분석 및 시각화',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
