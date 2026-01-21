'use client';

import { useEffect, useMemo, useState } from 'react';

import { ResponsiveChoropleth } from '@nivo/geo';

import type { CountryStreamingData, Platform } from '@/types/music-data';

type CountryMapChartProps = {
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

// 국가명 매핑 (한글 -> ISO 3166-1 alpha-3 코드)
const COUNTRY_CODE_MAP: Record<string, string> = {
  한국: 'KOR',
  일본: 'JPN',
  미국: 'USA',
  중국: 'CHN',
  태국: 'THA',
  베트남: 'VNM',
};

export const CountryMapChart = ({
  data,
  selectedPlatform = 'youtube',
}: CountryMapChartProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [geoFeatures, setGeoFeatures] = useState<any>(null);

  useEffect(() => {
    // 실제 세계 지도 데이터 로드 (GeoJSON 형식)
    fetch(
      'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json'
    )
      .then((response) => response.json())
      .then((worldData) => {
        setGeoFeatures(worldData.features);
      })
      .catch((error) => {
        console.error('Failed to load map data:', error);
      });
  }, []);

  const mapData = useMemo(() => {
    // 선택된 플랫폼의 데이터만 필터링
    const filteredData = data
      .filter(
        (item) => item.platform === selectedPlatform && item.country !== '기타'
      )
      .map((item) => ({
        id: COUNTRY_CODE_MAP[item.country] || item.country,
        value: item.streamCount,
      }));

    return filteredData;
  }, [data, selectedPlatform]);

  if (!geoFeatures) {
    return (
      <div className='chart-container'>
        <h2 className='chart-title'>
          Global Streaming Map - {PLATFORM_NAMES[selectedPlatform]}
        </h2>
        <div
          style={{
            height: '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#999',
          }}
        >
          지도 로딩 중...
        </div>
      </div>
    );
  }

  return (
    <div className='chart-container'>
      <h2 className='chart-title'>
        Global Streaming Map - {PLATFORM_NAMES[selectedPlatform]}
      </h2>

      <div style={{ height: '500px', width: '100%' }}>
        <ResponsiveChoropleth
          data={mapData}
          features={geoFeatures}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          colors='blues'
          domain={[0, Math.max(...mapData.map((d) => d.value), 1)]}
          unknownColor='#F3F4F6'
          label='properties.name'
          valueFormat={(value) => `${(value / 1000).toFixed(0)}K`}
          projectionType='mercator'
          projectionScale={100}
          projectionTranslation={[0.5, 0.65]}
          projectionRotation={[0, 0, 0]}
          enableGraticule={false}
          borderWidth={0.5}
          borderColor='#fff'
          legends={[
            {
              anchor: 'bottom-left',
              direction: 'column',
              justify: true,
              translateX: 20,
              translateY: -20,
              itemsSpacing: 0,
              itemWidth: 94,
              itemHeight: 18,
              itemDirection: 'left-to-right',
              itemTextColor: '#666',
              itemOpacity: 0.85,
              symbolSize: 18,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: '#000',
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          tooltip={({ feature }: any) => {
            const countryData = mapData.find((d) => d.id === feature.id);
            return (
              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.85)',
                  color: 'white',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                }}
              >
                <strong>{feature.properties.name}</strong>
                <br />
                {countryData ? (
                  <span>{countryData.value.toLocaleString()} streams</span>
                ) : (
                  <span style={{ color: '#999' }}>No data</span>
                )}
              </div>
            );
          }}
        />
      </div>

      <div
        style={{
          marginTop: '20px',
          padding: '12px',
          backgroundColor: '#F9FAFB',
          borderRadius: '8px',
          fontSize: '13px',
          color: '#666',
          textAlign: 'center',
        }}
      >
        🌍 지도 위에 마우스를 올려 국가별 스트리밍 수를 확인하세요
      </div>
    </div>
  );
};
