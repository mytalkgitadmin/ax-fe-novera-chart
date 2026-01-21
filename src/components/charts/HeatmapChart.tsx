'use client';

import { useMemo } from 'react';

import type { Platform, StreamingData } from '@/types/music-data';

type HeatmapChartProps = {
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

export const HeatmapChart = ({ data }: HeatmapChartProps) => {
  const heatmapData = useMemo(() => {
    // 날짜별, 플랫폼별 데이터 구조화
    const dates = Array.from(new Set(data.map((d) => d.date))).sort();
    const platforms: Platform[] = [
      'melon',
      'genie',
      'youtube',
      'apple',
      'spotify',
    ];

    // 최대값 찾기 (색상 스케일용)
    const maxValue = Math.max(...data.map((d) => d.streamCount));
    const minValue = Math.min(...data.map((d) => d.streamCount));

    const matrix = platforms.map((platform) => {
      return dates.map((date) => {
        const item = data.find(
          (d) => d.date === date && d.platform === platform
        );
        return {
          date,
          platform,
          value: item?.streamCount || 0,
          normalizedValue: item
            ? (item.streamCount - minValue) / (maxValue - minValue)
            : 0,
        };
      });
    });

    return { matrix, dates, platforms, maxValue, minValue };
  }, [data]);

  const cellWidth = 80;
  const cellHeight = 50;
  const padding = { top: 60, right: 40, bottom: 80, left: 100 };
  const chartWidth =
    heatmapData.dates.length * cellWidth + padding.left + padding.right;
  const chartHeight =
    heatmapData.platforms.length * cellHeight + padding.top + padding.bottom;

  // 색상 계산 함수 (값에 따라 투명도 조절)
  const getColor = (normalizedValue: number, platform: Platform) => {
    const baseColor = PLATFORM_COLORS[platform];
    const opacity = 0.2 + normalizedValue * 0.8; // 0.2 ~ 1.0
    return `${baseColor}${Math.round(opacity * 255)
      .toString(16)
      .padStart(2, '0')}`;
  };

  return (
    <div className='chart-container'>
      <h2 className='chart-title'>Platform Activity Heatmap</h2>
      <div style={{ overflowX: 'auto', width: '100%' }}>
        <svg
          width={chartWidth}
          height={chartHeight}
          style={{ minWidth: '600px' }}
        >
          {/* 제목 */}
          <text
            x={padding.left + (heatmapData.dates.length * cellWidth) / 2}
            y={30}
            textAnchor='middle'
            fill='#666'
            fontSize='14'
            fontWeight='500'
          >
            날짜별 플랫폼 스트리밍 수
          </text>

          {/* X축 레이블 (날짜) */}
          {heatmapData.dates.map((date, i) => {
            const dateObj = new Date(date);
            const label = `${dateObj.getMonth() + 1}/${dateObj.getDate()}`;
            return (
              <text
                key={date}
                x={padding.left + i * cellWidth + cellWidth / 2}
                y={padding.top - 10}
                textAnchor='middle'
                fill='#666'
                fontSize='12'
              >
                {label}
              </text>
            );
          })}

          {/* Y축 레이블 (플랫폼) */}
          {heatmapData.platforms.map((platform, i) => (
            <text
              key={platform}
              x={padding.left - 10}
              y={padding.top + i * cellHeight + cellHeight / 2}
              textAnchor='end'
              alignmentBaseline='middle'
              fill='#666'
              fontSize='12'
              fontWeight='500'
            >
              {PLATFORM_NAMES[platform]}
            </text>
          ))}

          {/* 히트맵 셀 */}
          {heatmapData.matrix.map((platformRow, platformIndex) =>
            platformRow.map((cell, dateIndex) => (
              <g key={`${cell.platform}-${cell.date}`}>
                <rect
                  x={padding.left + dateIndex * cellWidth}
                  y={padding.top + platformIndex * cellHeight}
                  width={cellWidth - 2}
                  height={cellHeight - 2}
                  fill={getColor(cell.normalizedValue, cell.platform)}
                  stroke='#fff'
                  strokeWidth='2'
                  rx='4'
                  style={{
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    const rect = e.currentTarget;
                    rect.style.opacity = '0.8';
                    rect.style.strokeWidth = '3';
                  }}
                  onMouseLeave={(e) => {
                    const rect = e.currentTarget;
                    rect.style.opacity = '1';
                    rect.style.strokeWidth = '2';
                  }}
                >
                  <title>{`${PLATFORM_NAMES[cell.platform]}\n${cell.date}\n${cell.value.toLocaleString()} streams`}</title>
                </rect>
                {/* 값 표시 */}
                <text
                  x={padding.left + dateIndex * cellWidth + cellWidth / 2}
                  y={padding.top + platformIndex * cellHeight + cellHeight / 2}
                  textAnchor='middle'
                  alignmentBaseline='middle'
                  fill='#333'
                  fontSize='11'
                  fontWeight='600'
                  pointerEvents='none'
                >
                  {(cell.value / 1000).toFixed(0)}K
                </text>
              </g>
            ))
          )}

          {/* 범례 */}
          <g transform={`translate(${padding.left}, ${chartHeight - 50})`}>
            <text x='0' y='0' fill='#666' fontSize='12' fontWeight='500'>
              스트리밍 수:
            </text>
            <text x='80' y='0' fill='#999' fontSize='11'>
              낮음
            </text>
            {Array.from({ length: 10 }).map((_, i) => {
              const normalizedValue = i / 9;
              return (
                <rect
                  key={i}
                  x={120 + i * 20}
                  y='-10'
                  width='20'
                  height='15'
                  fill={`rgba(100, 100, 255, ${0.2 + normalizedValue * 0.8})`}
                  stroke='#ddd'
                  strokeWidth='1'
                />
              );
            })}
            <text x={120 + 10 * 20 + 10} y='0' fill='#999' fontSize='11'>
              높음
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};
