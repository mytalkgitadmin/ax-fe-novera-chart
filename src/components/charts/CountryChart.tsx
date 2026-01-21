'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import type { CountryStreamingData, Platform } from '@/types/music-data';

type CountryChartProps = {
  data: CountryStreamingData[];
  selectedPlatform?: Platform;
};

const PLATFORM_NAMES = {
  melon: '멜론',
  genie: '지니',
  youtube: '유튜브',
  apple: '애플뮤직',
  spotify: '스포티파이',
};

export const CountryChart = ({
  data,
  selectedPlatform = 'youtube',
}: CountryChartProps) => {
  // 선택된 플랫폼의 데이터만 필터링
  const chartData = data
    .filter((item) => item.platform === selectedPlatform)
    .map((item) => ({
      country: item.country,
      streamCount: item.streamCount,
    }))
    .sort((a, b) => b.streamCount - a.streamCount);

  return (
    <div className='chart-container'>
      <h2 className='chart-title'>
        Geographic Distribution - {PLATFORM_NAMES[selectedPlatform]}
      </h2>
      <ResponsiveContainer width='100%' height={350}>
        <BarChart data={chartData} layout='vertical'>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            type='number'
            tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
          />
          <YAxis type='category' dataKey='country' width={80} />
          <Tooltip
            formatter={(value: number | undefined) => [
              value?.toLocaleString() ?? '0',
              '감상수',
            ]}
          />
          <Legend />
          <Bar
            dataKey='streamCount'
            fill='#82ca9d'
            name='감상수'
            radius={[0, 8, 8, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
