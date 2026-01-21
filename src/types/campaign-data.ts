// 소셜 미디어 플랫폼
export type SocialPlatform = 'tiktok' | 'instagram' | 'facebook';

// 캠페인 정보
export type Campaign = {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'inactive' | 'completed';
  createdAt: string;
};

// 인플루언서 정보
export type Influencer = {
  id: string;
  name: string;
  avatar: string;
  projects: number;
  followers: number;
};

// KPI 메트릭
export type CampaignMetrics = {
  totalLikes: number;
  totalComments: number;
  totalShares: number;
  engagement: number;
};

// 국가별 도달 데이터
export type CountryReach = {
  country: string;
  countryCode: string;
  users: number;
  platform: SocialPlatform;
};

// 연령/성별 데이터
export type AgeDemographics = {
  ageGroup: string;
  male: number;
  female: number;
  platform: SocialPlatform;
};

// 팔로워 관심사 데이터
export type FollowerInterest = {
  category: string;
  tiktok: number;
  twitter: number;
  facebook: number;
};

// 전체 대시보드 데이터
export type CampaignDashboardData = {
  campaign: Campaign;
  metrics: CampaignMetrics;
  influencers: Influencer[];
  countryReach: CountryReach[];
  demographics: AgeDemographics[];
  interests: FollowerInterest[];
};
