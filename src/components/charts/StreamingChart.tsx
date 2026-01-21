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

type StreamingChartProps = {
  data: StreamingData[];
};

const PLATFORM_COLORS = {
  melon: '#00CD3C',
  genie: '#3D5AFE',
  youtube: '#FF0000',
  apple: '#FA243C',
  spotify: '#1DB954',
};

const PLATFORM_NAMES = {
  melon: '멜론',
  genie: '지니',
  youtube: '유튜브',
  apple: '애플뮤직',
  spotify: '스포티파이',
};

export const StreamingChart = ({ data }: StreamingChartProps) => {
  // 날짜별로 데이터를 그룹화
  const chartData = data.reduce(
    (acc, item) => {
      const existingDate = acc.find((d) => d.date === item.date);
      if (existingDate) {
        existingDate[item.platform] = item.streamCount;
      } else {
        acc.push({
          date: item.date,
          [item.platform]: item.streamCount,
        });
      }
      return acc;
    },
    [] as Array<{ date: string; [key: string]: number | string }>
  );

  return (
    <div className='chart-container'>
      <h2 className='chart-title'>Stream Trends</h2>
      <ResponsiveContainer width='100%' height={400}>
        <BarChart data={chartData} barSize={12} barGap={2}>
          <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
          <XAxis
            dataKey='date'
            tickFormatter={(value) => {
              const date = new Date(value);
              return `${date.getMonth() + 1}/${date.getDate()}`;
            }}
            stroke='#9CA3AF'
          />
          <YAxis
            tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
            stroke='#9CA3AF'
          />
          <Tooltip
            formatter={(value: number | undefined) => [
              value?.toLocaleString() ?? '0',
              '감상수',
            ]}
            labelFormatter={(label) => `날짜: ${label}`}
            contentStyle={{
              backgroundColor: 'rgba(31, 41, 55, 0.95)',
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#F9FAFB',
            }}
          />
          <Legend
            formatter={(value) =>
              PLATFORM_NAMES[value as keyof typeof PLATFORM_NAMES] || value
            }
            wrapperStyle={{ color: '#E5E7EB' }}
          />
          {Object.keys(PLATFORM_COLORS).map((platform) => (
            <Bar
              key={platform}
              dataKey={platform}
              fill={PLATFORM_COLORS[platform as keyof typeof PLATFORM_COLORS]}
              radius={[4, 4, 0, 0]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
