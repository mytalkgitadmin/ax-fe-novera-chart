import type { NextConfig } from 'next';

/**
 * Next.js 설정
 *
 * @see https://nextjs.org/docs/app/api-reference/next-config-js
 */
const nextConfig: NextConfig = {
  // Strict 모드 활성화 (개발 시 잠재적 문제 감지)
  reactStrictMode: true,

  // 이미지 최적화 설정
  images: {
    // 외부 이미지 도메인 허용 (필요 시 추가)
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'example.com',
      //   port: '',
      //   pathname: '/images/**',
      // },
    ],
  },

  // 환경 변수 설정 (클라이언트에서 접근 가능)
  env: {
    // NEXT_PUBLIC_으로 시작하는 환경 변수는 자동으로 클라이언트에 노출됨
  },

  // 개발 서버 설정
  // devIndicators: {
  //   buildActivity: true,
  //   buildActivityPosition: 'bottom-right',
  // },

  // 출력 설정
  // output: 'standalone', // Docker 배포 시 사용

  // 리다이렉트 설정 (필요 시)
  // async redirects() {
  //   return [
  //     {
  //       source: '/old-path',
  //       destination: '/new-path',
  //       permanent: true,
  //     },
  //   ];
  // },

  // 리라이트 설정 (API 프록시 등)
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'https://api.example.com/:path*',
  //     },
  //   ];
  // },

  // 헤더 설정
  // async headers() {
  //   return [
  //     {
  //       source: '/:path*',
  //       headers: [
  //         {
  //           key: 'X-Frame-Options',
  //           value: 'DENY',
  //         },
  //       ],
  //     },
  //   ];
  // },

  // Webpack 커스텀 설정 (필요 시)
  // webpack: (config, { isServer }) => {
  //   // 커스텀 Webpack 설정
  //   return config;
  // },
};

export default nextConfig;
