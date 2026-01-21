'use client';

import type { Track } from '@/types/music-streaming-data';

type TopTracksTableProps = {
  tracks: Track[];
};

export const TopTracksTable = ({ tracks }: TopTracksTableProps) => {
  return (
    <div className='influencer-table-container'>
      <div className='influencer-header'>
        <h3 className='influencer-title'>Top Tracks</h3>
        <button className='add-influencer-btn'>+ Add Track</button>
      </div>

      <table className='influencer-table'>
        <thead>
          <tr>
            <th>RANK</th>
            <th>TITLE</th>
            <th>DURATION</th>
            <th>STREAMS</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((track) => (
            <tr key={track.id}>
              <td>
                <div className='influencer-name-cell'>
                  <div className='influencer-avatar'>#{track.rank}</div>
                </div>
              </td>
              <td>{track.title}</td>
              <td>{track.duration}</td>
              <td>{track.streams.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
