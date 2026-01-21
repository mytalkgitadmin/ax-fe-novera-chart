'use client';

import { useMemo } from 'react';

import { ResponsiveChoropleth } from '@nivo/geo';

import type { CountryReach, SocialPlatform } from '@/types/campaign-data';

type CampaignMapChartProps = {
  data: CountryReach[];
  selectedPlatform: SocialPlatform;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  worldCountries: any;
};

export const CampaignMapChart = ({
  data,
  selectedPlatform,
  worldCountries,
}: CampaignMapChartProps) => {
  const mapData = useMemo(() => {
    const platformData = data.filter((d) => d.platform === selectedPlatform);

    return platformData.map((item) => ({
      id: item.countryCode,
      value: item.users,
    }));
  }, [data, selectedPlatform]);

  // 총 사용자 수 계산
  const totalUsers = useMemo(() => {
    return data
      .filter((d) => d.platform === selectedPlatform)
      .reduce((sum, item) => sum + item.users, 0);
  }, [data, selectedPlatform]);

  // 국가 수 계산
  const countryCount = useMemo(() => {
    return new Set(
      data.filter((d) => d.platform === selectedPlatform).map((d) => d.country)
    ).size;
  }, [data, selectedPlatform]);

  return (
    <div className='campaign-map-container'>
      <div className='campaign-reach-info'>
        <h3 className='reach-title'>Campaign Reach</h3>
        <div className='reach-stats'>
          <div className='reach-stat'>
            <span className='reach-value'>{countryCount}</span>
            <span className='reach-label'>country</span>
          </div>
        </div>
        <div className='reach-stats'>
          <div className='reach-stat'>
            <span className='reach-label'>User Reached</span>
            <span className='reach-value-large'>
              {totalUsers.toLocaleString()}
            </span>
            <span className='reach-label-sub'>user</span>
          </div>
        </div>
        <div className='reach-period'>
          <span className='period-label'>Period</span>
          <span className='period-value'>9 month</span>
        </div>
        <div className='reach-updated'>
          <span>Updated 2s ago</span>
          <button className='refresh-btn'>🔄 Click to refresh</button>
        </div>
      </div>

      <div className='map-chart-wrapper'>
        <ResponsiveChoropleth
          data={mapData}
          features={worldCountries.features}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          domain={[0, 120000]}
          unknownColor='#1E293B'
          label='properties.name'
          valueFormat='.2s'
          projectionTranslation={[0.5, 0.5]}
          projectionRotation={[0, 0, 0]}
          projectionScale={140}
          enableGraticule={false}
          graticuleLineColor='#334155'
          borderWidth={0.5}
          borderColor='#334155'
          colors={['#1e3a5f', '#2563eb', '#3b82f6', '#60a5fa', '#93c5fd']}
          legends={[]}
          theme={{
            text: {
              fill: '#94A3B8',
              fontSize: 11,
            },
            tooltip: {
              container: {
                background: '#1E293B',
                color: '#F1F5F9',
                fontSize: '12px',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
                border: '1px solid #334155',
              },
            },
          }}
        />
      </div>
    </div>
  );
};
