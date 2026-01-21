'use client';

import { useMemo } from 'react';

import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RechartsRadar,
  ResponsiveContainer,
} from 'recharts';

import type { PlatformTrend } from '@/types/music-streaming-data';

type RadarChartProps = {
  data: PlatformTrend[];
};

export const RadarChart = ({ data }: RadarChartProps) => {
  const chartData = useMemo(() => {
    return data.map((item) => ({
      category: item.category,
      Melon: item.melon,
      Genie: item.genie,
      YouTube: item.youtube,
      Apple: item.apple,
      Spotify: item.spotify,
    }));
  }, [data]);

  return (
    <div className='chart-container'>
      <h3 className='chart-title'>Genre Trends</h3>
      <ResponsiveContainer width='100%' height={350}>
        <RechartsRadar data={chartData}>
          <PolarGrid stroke='#334155' />
          <PolarAngleAxis
            dataKey='category'
            tick={{ fill: '#94A3B8', fontSize: 12 }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={{ fill: '#94A3B8', fontSize: 11 }}
          />
          <Radar
            name='Melon'
            dataKey='Melon'
            stroke='#00CD3C'
            fill='#00CD3C'
            fillOpacity={0.3}
          />
          <Radar
            name='Genie'
            dataKey='Genie'
            stroke='#00D0F5'
            fill='#00D0F5'
            fillOpacity={0.3}
          />
          <Radar
            name='YouTube'
            dataKey='YouTube'
            stroke='#FF0000'
            fill='#FF0000'
            fillOpacity={0.3}
          />
          <Radar
            name='Apple'
            dataKey='Apple'
            stroke='#FC3C44'
            fill='#FC3C44'
            fillOpacity={0.3}
          />
          <Radar
            name='Spotify'
            dataKey='Spotify'
            stroke='#1DB954'
            fill='#1DB954'
            fillOpacity={0.3}
          />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            iconType='line'
            formatter={(value) => (
              <span style={{ color: '#E2E8F0', fontSize: '12px' }}>
                {value}
              </span>
            )}
          />
        </RechartsRadar>
      </ResponsiveContainer>
    </div>
  );
};
