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

import type { StreamingData } from '@/types/music-data';

type ListenerChartProps = {
  data: StreamingData[];
};

const PLATFORM_NAMES = {
  melon: '멜론',
  genie: '지니',
  youtube: '유튜브',
  apple: '애플뮤직',
  spotify: '스포티파이',
};

export const ListenerChart = ({ data }: ListenerChartProps) => {
  // 최신 날짜의 데이터만 사용
  const latestDate = data.reduce((max, item) => {
    return item.date > max ? item.date : max;
  }, data[0]?.date || '');

  const chartData = data
    .filter((item) => item.date === latestDate)
    .map((item) => ({
      platform: PLATFORM_NAMES[item.platform],
      listenerCount: item.listenerCount,
    }));

  return (
    <div className='chart-container'>
      <h2 className='chart-title'>Listeners by Platform</h2>
      <p className='chart-subtitle'>{latestDate}</p>
      <ResponsiveContainer width='100%' height={400}>
        <BarChart data={chartData} barSize={40}>
          <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
          <XAxis dataKey='platform' stroke='#9CA3AF' />
          <YAxis
            tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
            stroke='#9CA3AF'
          />
          <Tooltip
            formatter={(value: number | undefined) => [
              value?.toLocaleString() ?? '0',
              '감상자수',
            ]}
            contentStyle={{
              backgroundColor: 'rgba(31, 41, 55, 0.95)',
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#F9FAFB',
            }}
          />
          <Legend wrapperStyle={{ color: '#E5E7EB' }} />
          <Bar
            dataKey='listenerCount'
            fill='#8B5CF6'
            name='감상자수'
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
