import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js App',
  description: 'Next.js application with TypeScript',
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
