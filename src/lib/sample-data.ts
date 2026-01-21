import type {
  AgeStreamingData,
  CountryStreamingData,
  DashboardData,
  GenderStreamingData,
  Platform,
  StreamingData,
} from '@/types/music-data';

// 시드 기반 랜덤 함수 (서버/클라이언트 일관성 보장)
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

// 샘플 스트리밍 데이터 (필수 데이터)
const generateStreamingData = (): StreamingData[] => {
  const platforms: Platform[] = [
    'melon',
    'genie',
    'youtube',
    'apple',
    'spotify',
  ];
  const data: StreamingData[] = [];
  const rng = new SeededRandom(12345);

  // 고정된 기준 날짜 사용 (2026-01-21)
  const baseDate = new Date('2026-01-21');

  // 최근 7일 데이터 생성
  for (let i = 6; i >= 0; i--) {
    const date = new Date(baseDate);
    date.setDate(baseDate.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];

    platforms.forEach((platform) => {
      const baseStream = rng.nextInt(100000, 600000);
      const baseListener = Math.floor(baseStream * 0.3);

      data.push({
        date: dateStr ?? '',
        platform,
        streamCount: baseStream,
        listenerCount: baseListener,
      });
    });
  }

  return data;
};

// 샘플 국가별 데이터 (선택 데이터)
const generateCountryData = (): CountryStreamingData[] => {
  const platforms: Platform[] = [
    'melon',
    'genie',
    'youtube',
    'apple',
    'spotify',
  ];
  const countries = ['한국', '일본', '미국', '중국', '태국', '베트남', '기타'];
  const data: CountryStreamingData[] = [];
  const rng = new SeededRandom(54321);

  platforms.forEach((platform) => {
    countries.forEach((country) => {
      data.push({
        country,
        streamCount: rng.nextInt(50000, 350000),
        platform,
      });
    });
  });

  return data;
};

// 샘플 성별 데이터 (선택 데이터)
const generateGenderData = (): GenderStreamingData[] => {
  const platforms: Platform[] = [
    'melon',
    'genie',
    'youtube',
    'apple',
    'spotify',
  ];
  const genders: ('남성' | '여성' | '기타')[] = ['남성', '여성', '기타'];
  const data: GenderStreamingData[] = [];
  const rng = new SeededRandom(67890);

  platforms.forEach((platform) => {
    genders.forEach((gender) => {
      const baseCount = gender === '기타' ? 20000 : 200000;
      data.push({
        gender,
        streamCount: rng.nextInt(
          Math.floor(baseCount * 0.5),
          Math.floor(baseCount * 1.5)
        ),
        platform,
      });
    });
  });

  return data;
};

// 샘플 연령대별 데이터 (Spotify 스타일, 선택 데이터)
const generateAgeData = (): AgeStreamingData[] => {
  const platforms: Platform[] = [
    'melon',
    'genie',
    'youtube',
    'apple',
    'spotify',
  ];
  const ageGroups = ['<18', '18-24', '25-34', '35-44', '45-54', '55-64', '65+'];
  const data: AgeStreamingData[] = [];
  const rng = new SeededRandom(98765);

  // 연령대별 기본 스트리밍 수 (Spotify 패턴 참고)
  const ageGroupBaseCount: Record<string, number> = {
    '<18': 50000, // 2%
    '18-24': 500000, // 26%
    '25-34': 700000, // 49% (가장 많음)
    '35-44': 250000, // 13%
    '45-54': 100000, // 6%
    '55-64': 50000, // 3%
    '65+': 20000, // 1%
  };

  platforms.forEach((platform) => {
    ageGroups.forEach((ageGroup) => {
      const baseCount = ageGroupBaseCount[ageGroup] || 50000;
      data.push({
        ageGroup,
        streamCount: rng.nextInt(
          Math.floor(baseCount * 0.8),
          Math.floor(baseCount * 1.2)
        ),
        platform,
      });
    });
  });

  return data;
};

// 전체 샘플 데이터
export const getSampleData = (): DashboardData => {
  return {
    streaming: generateStreamingData(),
    country: generateCountryData(),
    gender: generateGenderData(),
    age: generateAgeData(),
  };
};
