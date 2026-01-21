// 음원 플랫폼 타입
export type Platform = 'melon' | 'genie' | 'youtube' | 'apple' | 'spotify';

// 필수 데이터: 감상수, 감상자수
export type StreamingData = {
  date: string;
  platform: Platform;
  streamCount: number; // 감상수 (스트리밍 수)
  listenerCount: number; // 감상자수
};

// 선택 데이터: 국가별 감상수
export type CountryStreamingData = {
  country: string;
  streamCount: number;
  platform: Platform;
};

// 선택 데이터: 성별별 스밍수
export type GenderStreamingData = {
  gender: '남성' | '여성' | '기타';
  streamCount: number;
  platform: Platform;
};

// 선택 데이터: 연령대별 스밍수
export type AgeStreamingData = {
  ageGroup: string; // 예: '<18', '18-24', '25-34', '35-44', '45-54', '55-64', '65+'
  streamCount: number;
  platform: Platform;
};

// 전체 대시보드 데이터
export type DashboardData = {
  streaming: StreamingData[];
  country?: CountryStreamingData[];
  gender?: GenderStreamingData[];
  age?: AgeStreamingData[];
};
