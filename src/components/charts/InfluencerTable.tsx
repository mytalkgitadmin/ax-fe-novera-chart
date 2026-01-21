'use client';

import type { Influencer } from '@/types/campaign-data';

type InfluencerTableProps = {
  influencers: Influencer[];
};

export const InfluencerTable = ({ influencers }: InfluencerTableProps) => {
  return (
    <div className='influencer-table-container'>
      <div className='influencer-header'>
        <h3 className='influencer-title'>Influencer</h3>
        <button className='add-influencer-btn'>+ Add Influencer</button>
      </div>

      <table className='influencer-table'>
        <thead>
          <tr>
            <th>NAME</th>
            <th>PROJECTS</th>
            <th>FOLLOWER</th>
          </tr>
        </thead>
        <tbody>
          {influencers.map((influencer) => (
            <tr key={influencer.id}>
              <td>
                <div className='influencer-name-cell'>
                  <div className='influencer-avatar'>
                    {influencer.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <span>{influencer.name}</span>
                </div>
              </td>
              <td>{influencer.projects}</td>
              <td>{influencer.followers.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
