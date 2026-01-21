import type {
  AgeDemographics,
  Campaign,
  CampaignDashboardData,
  CampaignMetrics,
  CountryReach,
  FollowerInterest,
  Influencer,
  SocialPlatform,
} from '@/types/campaign-data';

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

// 캠페인 정보
const getCampaignInfo = (): Campaign => {
  return {
    id: '1',
    name: 'Blue Chips Chicago',
    description: 'Diam nullam quis nunc et pretium augue.',
    status: 'active',
    createdAt: '2021-08-20',
  };
};

// KPI 메트릭
const getCampaignMetrics = (): CampaignMetrics => {
  return {
    totalLikes: 350809,
    totalComments: 186072,
    totalShares: 120043,
    engagement: 48.07,
  };
};

// 인플루언서 데이터
const getInfluencers = (): Influencer[] => {
  return [
    {
      id: '1',
      name: 'Malik Wiwoho',
      avatar: '/avatars/malik.jpg',
      projects: 23,
      followers: 1620201,
    },
    {
      id: '2',
      name: 'Nancy Aulia',
      avatar: '/avatars/nancy.jpg',
      projects: 34,
      followers: 1224820,
    },
    {
      id: '3',
      name: 'Natasha Viresta',
      avatar: '/avatars/natasha.jpg',
      projects: 12,
      followers: 1100491,
    },
    {
      id: '4',
      name: 'Wilona Hamda',
      avatar: '/avatars/wilona.jpg',
      projects: 8,
      followers: 927421,
    },
    {
      id: '5',
      name: 'Rava Nanda',
      avatar: '/avatars/rava.jpg',
      projects: 10,
      followers: 827810,
    },
  ];
};

// 국가별 도달 데이터
const getCountryReach = (): CountryReach[] => {
  const countries = [
    { name: 'Canada', code: 'CAN', baseUsers: 87162 },
    { name: 'United States', code: 'USA', baseUsers: 90069 },
    { name: 'Mexico', code: 'MEX', baseUsers: 45000 },
    { name: 'Brazil', code: 'BRA', baseUsers: 35000 },
    { name: 'Uruguay', code: 'URY', baseUsers: 85321 },
    { name: 'United Kingdom', code: 'GBR', baseUsers: 65000 },
    { name: 'Germany', code: 'DEU', baseUsers: 55000 },
    { name: 'Indonesia', code: 'IDN', baseUsers: 120904 },
    { name: 'Australia', code: 'AUS', baseUsers: 48000 },
    { name: 'South Korea', code: 'KOR', baseUsers: 42000 },
    { name: 'Japan', code: 'JPN', baseUsers: 58000 },
    { name: 'India', code: 'IND', baseUsers: 95000 },
  ];

  const platforms: SocialPlatform[] = ['tiktok', 'instagram', 'facebook'];
  const data: CountryReach[] = [];
  const rng = new SeededRandom(11111);

  countries.forEach((country) => {
    platforms.forEach((platform) => {
      const variance = rng.nextInt(-10000, 10000);
      data.push({
        country: country.name,
        countryCode: country.code,
        users: country.baseUsers + variance,
        platform,
      });
    });
  });

  return data;
};

// 연령/성별 데이터
const getDemographics = (): AgeDemographics[] => {
  const ageGroups = ['15-24', '25-34', '35-44', '45-54', '55-64', '+64'];
  const platforms: SocialPlatform[] = ['tiktok', 'instagram', 'facebook'];
  const data: AgeDemographics[] = [];
  const rng = new SeededRandom(22222);

  const baseData: Record<string, { male: number; female: number }> = {
    '15-24': { male: 15000, female: 18000 },
    '25-34': { male: 35000, female: 38000 },
    '35-44': { male: 45000, female: 42000 },
    '45-54': { male: 32000, female: 35000 },
    '55-64': { male: 22000, female: 25000 },
    '+64': { male: 12000, female: 15000 },
  };

  platforms.forEach((platform) => {
    ageGroups.forEach((ageGroup) => {
      const base = baseData[ageGroup] || { male: 10000, female: 10000 };
      data.push({
        ageGroup,
        male: base.male + rng.nextInt(-5000, 5000),
        female: base.female + rng.nextInt(-5000, 5000),
        platform,
      });
    });
  });

  return data;
};

// 팔로워 관심사 데이터
const getFollowerInterests = (): FollowerInterest[] => {
  return [
    { category: 'Fashion', tiktok: 85, twitter: 65, facebook: 70 },
    { category: 'Technology', tiktok: 45, twitter: 75, facebook: 55 },
    { category: 'Cosmetics', tiktok: 90, twitter: 60, facebook: 75 },
    { category: 'Watches', tiktok: 40, twitter: 50, facebook: 45 },
    { category: 'Cars', tiktok: 35, twitter: 55, facebook: 50 },
    { category: 'Memes', tiktok: 70, twitter: 80, facebook: 65 },
    { category: 'Others', tiktok: 50, twitter: 55, facebook: 60 },
  ];
};

// 전체 대시보드 데이터
export const getCampaignDashboardData = (): CampaignDashboardData => {
  return {
    campaign: getCampaignInfo(),
    metrics: getCampaignMetrics(),
    influencers: getInfluencers(),
    countryReach: getCountryReach(),
    demographics: getDemographics(),
    interests: getFollowerInterests(),
  };
};
