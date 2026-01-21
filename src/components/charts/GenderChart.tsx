'use client';

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

import type { GenderStreamingData, Platform } from '@/types/music-data';

type GenderChartProps = {
  data: GenderStreamingData[];
  selectedPlatform?: Platform;
};

const PLATFORM_NAMES = {
  melon: '멜론',
  genie: '지니',
  youtube: '유튜브',
  apple: '애플뮤직',
  spotify: '스포티파이',
};

const GENDER_COLORS = {
  여성: '#3B82F6', // 파란색 (Spotify 스타일)
  남성: '#EC4899', // 핑크
  기타: '#10B981', // 초록
};

export const GenderChart = ({
  data,
  selectedPlatform = 'youtube',
}: GenderChartProps) => {
  // 성별 데이터 가공
  const genderChartData = data
    .filter((item) => item.platform === selectedPlatform)
    .map((item) => ({
      name: item.gender,
      value: item.streamCount,
    }));

  // 퍼센트 계산
  const total = genderChartData.reduce((sum, item) => sum + item.value, 0);
  const chartDataWithPercent = genderChartData.map((item) => ({
    ...item,
    percent: ((item.value / total) * 100).toFixed(0),
  }));

  return (
    <div className='chart-container'>
      <h2 className='chart-title'>
        Listeners' Gender - {PLATFORM_NAMES[selectedPlatform]}
      </h2>
      <p style={{ color: '#94A3B8', fontSize: '14px', marginBottom: '20px' }}>
        Listeners • Last 28 Days • Worldwide
      </p>
      <ResponsiveContainer width='100%' height={400}>
        <PieChart>
          <Pie
            data={chartDataWithPercent}
            cx='50%'
            cy='50%'
            innerRadius={80}
            outerRadius={140}
            labelLine={false}
            dataKey='value'
          >
            {chartDataWithPercent.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={GENDER_COLORS[entry.name as keyof typeof GENDER_COLORS]}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number | undefined) =>
              value?.toLocaleString() ?? '0'
            }
            contentStyle={{
              backgroundColor: 'rgba(31, 41, 55, 0.95)',
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#F9FAFB',
            }}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* 중앙 범례 */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          pointerEvents: 'none',
        }}
      >
        {chartDataWithPercent.map((item) => (
          <div key={item.name} style={{ marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div
                style={{
                  width: '16px',
                  height: '16px',
                  backgroundColor:
                    GENDER_COLORS[item.name as keyof typeof GENDER_COLORS],
                  borderRadius: '4px',
                }}
              />
              <span
                style={{
                  fontWeight: 'bold',
                  fontSize: '18px',
                  color: '#F1F5F9',
                }}
              >
                {item.percent}%
              </span>
              <span style={{ color: '#94A3B8' }}>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
