'use client';

import { useEffect, useState } from 'react';

import { BidirectionalBarChart } from '@/components/charts/BidirectionalBarChart';
import { MusicStreamingMapChart } from '@/components/charts/MusicStreamingMapChart';
import { RadarChart } from '@/components/charts/RadarChart';
import { TopTracksTable } from '@/components/charts/TopTracksTable';
import { Sidebar } from '@/components/Sidebar';
import { getMusicDashboardData } from '@/lib/music-streaming-data';

import type { StreamingPlatform } from '@/types/music-streaming-data';

const HomePage = () => {
  const [selectedPlatform, setSelectedPlatform] =
    useState<StreamingPlatform>('melon');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [worldCountries, setWorldCountries] = useState<any>(null);

  const data = getMusicDashboardData();

  // 세계 지도 데이터 로드
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json'
    )
      .then((res) => res.json())
      .then((data) => setWorldCountries(data))
      .catch((err) => console.error('Failed to load world map:', err));
  }, []);

  const platforms: { value: StreamingPlatform; label: string }[] = [
    { value: 'melon', label: 'Melon' },
    { value: 'genie', label: 'Genie' },
    { value: 'youtube', label: 'YouTube' },
    { value: 'apple', label: 'Apple Music' },
    { value: 'spotify', label: 'Spotify' },
  ];

  return (
    <div className='dashboard-layout'>
      <Sidebar />

      <main className='dashboard-content'>
        {/* Artist Header */}
        <div className='campaign-header'>
          <button className='back-btn'>←</button>
          <div className='campaign-info'>
            <div className='campaign-icon'>🎵</div>
            <div className='campaign-details'>
              <h1 className='campaign-name'>
                {data.artist.name} - {data.artist.album}
              </h1>
              <p className='campaign-description'>{data.artist.genre}</p>
            </div>
          </div>
          <div className='campaign-meta'>
            <div className='campaign-status'>
              <span className='status-label'>Genre</span>
              <span className='status-badge active'>
                {data.artist.genre.split(' / ')[0]}
              </span>
            </div>
            <div className='campaign-created'>
              <span className='created-label'>Release Date</span>
              <span className='created-date'>
                {new Date(data.artist.releaseDate).toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
          </div>
          <button className='menu-btn'>⋮</button>
        </div>

        {/* Platform Tabs */}
        <div className='platform-tabs'>
          {platforms.map((platform) => (
            <button
              key={platform.value}
              className={`platform-tab ${selectedPlatform === platform.value ? 'active' : ''}`}
              onClick={() => setSelectedPlatform(platform.value)}
            >
              {platform.label}
            </button>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className='main-grid'>
          {/* Left Column - KPIs & Influencers */}
          <div className='left-column'>
            {/* KPI Cards */}
            <div className='kpi-cards'>
              <div className='kpi-card-mini'>
                <div className='kpi-icon'>🎧</div>
                <div className='kpi-content'>
                  <div className='kpi-label'>Total Streams</div>
                  <div className='kpi-value'>
                    {data.metrics.totalStreams.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className='kpi-card-mini'>
                <div className='kpi-icon'>👥</div>
                <div className='kpi-content'>
                  <div className='kpi-label'>Total Listeners</div>
                  <div className='kpi-value'>
                    {data.metrics.totalListeners.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className='kpi-card-mini'>
                <div className='kpi-icon'>📊</div>
                <div className='kpi-content'>
                  <div className='kpi-label'>Avg Streams</div>
                  <div className='kpi-value'>
                    {data.metrics.avgStreams.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className='kpi-card-mini'>
                <div className='kpi-icon'>🌏</div>
                <div className='kpi-content'>
                  <div className='kpi-label'>Countries</div>
                  <div className='kpi-value'>{data.metrics.countries}</div>
                </div>
              </div>
            </div>

            {/* Top Tracks Table */}
            <TopTracksTable tracks={data.topTracks} />

            {/* Demographics Charts */}
            <div className='demographics-section'>
              <BidirectionalBarChart
                data={data.demographics}
                selectedPlatform={selectedPlatform}
              />
              <RadarChart data={data.trends} />
            </div>
          </div>

          {/* Right Column - Map */}
          <div className='right-column'>
            {worldCountries && (
              <MusicStreamingMapChart
                data={data.countryStreaming}
                selectedPlatform={selectedPlatform}
                worldCountries={worldCountries}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
