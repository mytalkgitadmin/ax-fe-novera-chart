'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import type { AgeStreamingData, Platform } from '@/types/music-data';

type AgeBarChartProps = {
  data: AgeStreamingData[];
  selectedPlatform?: Platform;
};

const PLATFORM_NAMES = {
  melon: '멜론',
  genie: '지니',
  youtube: '유튜브',
  apple: '애플뮤직',
  spotify: '스포티파이',
};

export const AgeBarChart = ({
  data,
  selectedPlatform = 'youtube',
}: AgeBarChartProps) => {
  // 연령대별 데이터 가공
  const chartData = data
    .filter((item) => item.platform === selectedPlatform)
    .map((item) => ({
      ageGroup: item.ageGroup,
      value: item.streamCount,
    }))
    .sort((a, b) => {
      const order = ['<18', '18-24', '25-34', '35-44', '45-54', '55-64', '65+'];
      return order.indexOf(a.ageGroup) - order.indexOf(b.ageGroup);
    });

  // 퍼센트 계산
  const total = chartData.reduce((sum, item) => sum + item.value, 0);
  const chartDataWithPercent = chartData.map((item) => ({
    ...item,
    percent: ((item.value / total) * 100).toFixed(0),
  }));

  // 색상 (연령대가 높을수록 진한 파란색)
  const getColor = (index: number, length: number) => {
    const intensity = 0.4 + (index / length) * 0.6;
    return `rgba(59, 130, 246, ${intensity})`;
  };

  return (
    <div className='chart-container'>
      <h2 className='chart-title'>
        Listeners' Age - {PLATFORM_NAMES[selectedPlatform]}
      </h2>
      <p style={{ color: '#94A3B8', fontSize: '14px', marginBottom: '20px' }}>
        Listeners • Last 28 Days • Worldwide
      </p>

      <ResponsiveContainer width='100%' height={400}>
        <BarChart data={chartDataWithPercent} layout='vertical'>
          <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
          <XAxis
            type='number'
            tickFormatter={(value) => `${value / 1000}K`}
            stroke='#9CA3AF'
          />
          <YAxis
            type='category'
            dataKey='ageGroup'
            width={60}
            stroke='#9CA3AF'
          />
          <Tooltip
            formatter={(value: number | undefined) =>
              value ? [value.toLocaleString(), 'Streams'] : ['0', 'Streams']
            }
            contentStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
            }}
          />
          <Bar dataKey='value' radius={[0, 8, 8, 0]}>
            {chartDataWithPercent.map((_entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={getColor(index, chartDataWithPercent.length)}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* 퍼센트 정보 */}
      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {chartDataWithPercent.map((item, index) => (
          <div
            key={item.ageGroup}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <div
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: getColor(index, chartDataWithPercent.length),
                borderRadius: '2px',
              }}
            />
            <span style={{ fontSize: '13px', color: '#94A3B8' }}>
              {item.ageGroup}:{' '}
              <strong style={{ color: '#F1F5F9' }}>{item.percent}%</strong>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
