'use client';

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

import type {
  AgeStreamingData,
  GenderStreamingData,
  Platform,
} from '@/types/music-data';

type DemographicsChartProps = {
  genderData: GenderStreamingData[];
  ageData: AgeStreamingData[];
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
  남성: '#0088FE',
  여성: '#FF6B9D',
  기타: '#FFBB28',
};

const AGE_COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7c7c', '#a78bfa'];

export const DemographicsChart = ({
  genderData,
  ageData,
  selectedPlatform = 'youtube',
}: DemographicsChartProps) => {
  // 성별 데이터 가공
  const genderChartData = genderData
    .filter((item) => item.platform === selectedPlatform)
    .map((item) => ({
      name: item.gender,
      value: item.streamCount,
    }));

  // 연령대 데이터 가공
  const ageChartData = ageData
    .filter((item) => item.platform === selectedPlatform)
    .map((item) => ({
      name: item.ageGroup,
      value: item.streamCount,
    }));

  return (
    <div className='demographics-container'>
      <h2 className='chart-title'>
        Demographics - {PLATFORM_NAMES[selectedPlatform]}
      </h2>

      <div className='demographics-grid'>
        {/* 성별 차트 */}
        <div className='chart-container'>
          <h3 className='chart-subtitle'>Gender Distribution</h3>
          <ResponsiveContainer width='100%' height={280}>
            <PieChart>
              <Pie
                data={genderChartData}
                cx='50%'
                cy='50%'
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${((percent ?? 0) * 100).toFixed(0)}%`
                }
                outerRadius={80}
                fill='#8884d8'
                dataKey='value'
              >
                {genderChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      GENDER_COLORS[entry.name as keyof typeof GENDER_COLORS]
                    }
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number | undefined) =>
                  value?.toLocaleString() ?? '0'
                }
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* 연령대 차트 */}
        <div className='chart-container'>
          <h3 className='chart-subtitle'>Age Distribution</h3>
          <ResponsiveContainer width='100%' height={280}>
            <PieChart>
              <Pie
                data={ageChartData}
                cx='50%'
                cy='50%'
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${((percent ?? 0) * 100).toFixed(0)}%`
                }
                outerRadius={80}
                fill='#82ca9d'
                dataKey='value'
              >
                {ageChartData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={AGE_COLORS[index % AGE_COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number | undefined) =>
                  value?.toLocaleString() ?? '0'
                }
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
