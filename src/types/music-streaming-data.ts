// 음원 스트리밍 플랫폼
export type StreamingPlatform =
  | 'melon'
  | 'genie'
  | 'youtube'
  | 'apple'
  | 'spotify';

// 아티스트/앨범 정보
export type ArtistInfo = {
  id: string;
  name: string;
  album: string;
  releaseDate: string;
  genre: string;
};

// 트랙 정보
export type Track = {
  id: string;
  title: string;
  duration: string;
  streams: number;
  rank: number;
};

// KPI 메트릭
export type StreamingMetrics = {
  totalStreams: number;
  totalListeners: number;
  avgStreams: number;
  countries: number;
};

// 국가별 스트리밍 데이터
export type CountryStreaming = {
  country: string;
  countryCode: string;
  streams: number;
  platform: StreamingPlatform;
};

// 연령/성별 리스너 데이터
export type ListenerDemographics = {
  ageGroup: string;
  male: number;
  female: number;
  platform: StreamingPlatform;
};

// 플랫폼 트렌드 데이터
export type PlatformTrend = {
  category: string;
  melon: number;
  genie: number;
  youtube: number;
  apple: number;
  spotify: number;
};

// 전체 대시보드 데이터
export type MusicDashboardData = {
  artist: ArtistInfo;
  metrics: StreamingMetrics;
  topTracks: Track[];
  countryStreaming: CountryStreaming[];
  demographics: ListenerDemographics[];
  trends: PlatformTrend[];
};
