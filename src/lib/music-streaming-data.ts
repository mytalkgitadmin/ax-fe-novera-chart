import type {
  ArtistInfo,
  CountryStreaming,
  ListenerDemographics,
  MusicDashboardData,
  PlatformTrend,
  StreamingMetrics,
  StreamingPlatform,
  Track,
} from '@/types/music-streaming-data';

// 시드 기반 랜덤 함수
class SeededRandom {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  next(): number {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }

  nextInt(min: number, max: number): number {
    return Math.floor(this.next() * (max - min) + min);
  }
}

// 아티스트 정보
const getArtistInfo = (): ArtistInfo => {
  return {
    id: '1',
    name: 'NOVERA',
    album: 'Midnight Dreams',
    releaseDate: '2024-12-15',
    genre: 'K-POP / R&B',
  };
};

// KPI 메트릭
const getStreamingMetrics = (): StreamingMetrics => {
  return {
    totalStreams: 15720966,
    totalListeners: 8456789,
    avgStreams: 3144193,
    countries: 42,
  };
};

// 인기 트랙
const getTopTracks = (): Track[] => {
  return [
    {
      id: '1',
      title: 'Starlight',
      duration: '3:42',
      streams: 4520891,
      rank: 1,
    },
    {
      id: '2',
      title: 'Midnight Rain',
      duration: '4:15',
      streams: 3824702,
      rank: 2,
    },
    {
      id: '3',
      title: 'Electric Dreams',
      duration: '3:28',
      streams: 2956483,
      rank: 3,
    },
    {
      id: '4',
      title: 'Moonlight Sonata',
      duration: '4:05',
      streams: 2418965,
      rank: 4,
    },
    {
      id: '5',
      title: 'Neon Lights',
      duration: '3:55',
      streams: 1999925,
      rank: 5,
    },
  ];
};

// 국가별 스트리밍 데이터
const getCountryStreaming = (): CountryStreaming[] => {
  const countries = [
    { name: 'South Korea', code: 'KOR', baseStreams: 2850000 },
    { name: 'Japan', code: 'JPN', baseStreams: 1920000 },
    { name: 'United States', code: 'USA', baseStreams: 3240000 },
    { name: 'Canada', code: 'CAN', baseStreams: 580000 },
    { name: 'Mexico', code: 'MEX', baseStreams: 420000 },
    { name: 'Brazil', code: 'BRA', baseStreams: 890000 },
    { name: 'Argentina', code: 'ARG', baseStreams: 450000 },
    { name: 'United Kingdom', code: 'GBR', baseStreams: 780000 },
    { name: 'Germany', code: 'DEU', baseStreams: 660000 },
    { name: 'France', code: 'FRA', baseStreams: 540000 },
    { name: 'Indonesia', code: 'IDN', baseStreams: 1350000 },
    { name: 'Thailand', code: 'THA', baseStreams: 720000 },
    { name: 'Philippines', code: 'PHL', baseStreams: 680000 },
    { name: 'Vietnam', code: 'VNM', baseStreams: 590000 },
    { name: 'Australia', code: 'AUS', baseStreams: 520000 },
    { name: 'India', code: 'IND', baseStreams: 980000 },
  ];

  const platforms: StreamingPlatform[] = [
    'melon',
    'genie',
    'youtube',
    'apple',
    'spotify',
  ];
  const data: CountryStreaming[] = [];
  const rng = new SeededRandom(11111);

  countries.forEach((country) => {
    platforms.forEach((platform) => {
      const variance = rng.nextInt(-50000, 100000);
      data.push({
        country: country.name,
        countryCode: country.code,
        streams: Math.max(0, country.baseStreams + variance),
        platform,
      });
    });
  });

  return data;
};

// 연령/성별 리스너 데이터
const getListenerDemographics = (): ListenerDemographics[] => {
  const ageGroups = ['15-24', '25-34', '35-44', '45-54', '55-64', '+64'];
  const platforms: StreamingPlatform[] = [
    'melon',
    'genie',
    'youtube',
    'apple',
    'spotify',
  ];
  const data: ListenerDemographics[] = [];
  const rng = new SeededRandom(22222);

  const baseData: Record<string, { male: number; female: number }> = {
    '15-24': { male: 185000, female: 225000 },
    '25-34': { male: 420000, female: 465000 },
    '35-44': { male: 380000, female: 350000 },
    '45-54': { male: 220000, female: 245000 },
    '55-64': { male: 125000, female: 145000 },
    '+64': { male: 65000, female: 85000 },
  };

  platforms.forEach((platform) => {
    ageGroups.forEach((ageGroup) => {
      const base = baseData[ageGroup] || { male: 100000, female: 100000 };
      data.push({
        ageGroup,
        male: base.male + rng.nextInt(-20000, 20000),
        female: base.female + rng.nextInt(-20000, 20000),
        platform,
      });
    });
  });

  return data;
};

// 플랫폼 트렌드 데이터
const getPlatformTrends = (): PlatformTrend[] => {
  return [
    {
      category: 'Pop',
      melon: 92,
      genie: 88,
      youtube: 95,
      apple: 90,
      spotify: 93,
    },
    {
      category: 'R&B',
      melon: 85,
      genie: 82,
      youtube: 78,
      apple: 88,
      spotify: 90,
    },
    {
      category: 'Hip-Hop',
      melon: 75,
      genie: 78,
      youtube: 92,
      apple: 80,
      spotify: 85,
    },
    {
      category: 'Rock',
      melon: 65,
      genie: 68,
      youtube: 70,
      apple: 72,
      spotify: 75,
    },
    {
      category: 'Electronic',
      melon: 70,
      genie: 72,
      youtube: 85,
      apple: 78,
      spotify: 82,
    },
    {
      category: 'Ballad',
      melon: 95,
      genie: 93,
      youtube: 70,
      apple: 75,
      spotify: 72,
    },
    {
      category: 'Indie',
      melon: 68,
      genie: 65,
      youtube: 88,
      apple: 85,
      spotify: 92,
    },
  ];
};

// 전체 대시보드 데이터
export const getMusicDashboardData = (): MusicDashboardData => {
  return {
    artist: getArtistInfo(),
    metrics: getStreamingMetrics(),
    topTracks: getTopTracks(),
    countryStreaming: getCountryStreaming(),
    demographics: getListenerDemographics(),
    trends: getPlatformTrends(),
  };
};
