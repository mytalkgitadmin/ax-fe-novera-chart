'use client';

import { useMemo } from 'react';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

import type {
  ListenerDemographics,
  StreamingPlatform,
} from '@/types/music-streaming-data';

type BidirectionalBarChartProps = {
  data: ListenerDemographics[];
  selectedPlatform: StreamingPlatform;
};

export const BidirectionalBarChart = ({
  data,
  selectedPlatform,
}: BidirectionalBarChartProps) => {
  const chartData = useMemo(() => {
    const platformData = data.filter((d) => d.platform === selectedPlatform);

    return platformData.map((item) => ({
      ageGroup: item.ageGroup,
      male: -item.male, // 음수로 표시 (왼쪽)
      female: item.female, // 양수로 표시 (오른쪽)
      maleLabel: item.male,
      femaleLabel: item.female,
    }));
  }, [data, selectedPlatform]);

  // 최대값 계산
  const maxValue = useMemo(() => {
    const allValues = chartData.flatMap((d) => [
      Math.abs(d.male),
      Math.abs(d.female),
    ]);
    return Math.max(...allValues);
  }, [chartData]);

  return (
    <div className='chart-container'>
      <div className='demographics-header'>
        <h3 className='chart-title'>Listener Demographics</h3>
        <div className='demographics-legend'>
          <div className='legend-item'>
            <span className='legend-icon male'></span>
            <span>Male</span>
          </div>
          <div className='legend-item'>
            <span className='legend-icon female'></span>
            <span>Female</span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width='100%' height={320}>
        <BarChart
          data={chartData}
          layout='vertical'
          margin={{ top: 20, right: 30, bottom: 20, left: 30 }}
        >
          <CartesianGrid strokeDasharray='3 3' stroke='#334155' />
          <XAxis
            type='number'
            domain={[-maxValue * 1.2, maxValue * 1.2]}
            tickFormatter={(value) => Math.abs(value).toLocaleString()}
            tick={{ fill: '#94A3B8', fontSize: 11 }}
            stroke='#334155'
          />
          <YAxis
            type='category'
            dataKey='ageGroup'
            tick={{ fill: '#94A3B8', fontSize: 11 }}
            stroke='#334155'
          />

          {/* Male (왼쪽) */}
          <Bar dataKey='male' stackId='stack' radius={[4, 0, 0, 4]}>
            {chartData.map((_entry, index) => (
              <Cell key={`male-${index}`} fill='#3b82f6' />
            ))}
          </Bar>

          {/* Female (오른쪽) */}
          <Bar dataKey='female' stackId='stack' radius={[0, 4, 4, 0]}>
            {chartData.map((_entry, index) => (
              <Cell key={`female-${index}`} fill='#10b981' />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
