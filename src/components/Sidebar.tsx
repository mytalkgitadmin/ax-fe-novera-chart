'use client';

import { useState } from 'react';

type MenuItem = {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
};

export const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState('analytics');

  const menuItems: MenuItem[] = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'analytics', label: 'Analytics', icon: '📊', active: true },
    { id: 'tracks', label: 'Tracks', icon: '🎵' },
    { id: 'artists', label: 'Artists', icon: '🎤' },
    { id: 'playlists', label: 'Playlists', icon: '📝' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <aside className='sidebar'>
      <div className='sidebar-header'>
        <div className='user-profile'>
          <div className='user-avatar'>🎧</div>
          <div className='user-info'>
            <div className='user-name'>NOVERA Music</div>
            <div className='user-email'>analytics@novera.music</div>
          </div>
        </div>
      </div>

      <div className='sidebar-search'>
        <input type='text' placeholder='Search...' className='search-input' />
      </div>

      <nav className='sidebar-nav'>
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeMenu === item.id ? 'active' : ''}`}
            onClick={() => setActiveMenu(item.id)}
          >
            <span className='nav-icon'>{item.icon}</span>
            <span className='nav-label'>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className='sidebar-footer'>
        <button className='pro-button'>
          <span className='pro-icon'>👑</span>
          <div className='pro-content'>
            <div className='pro-title'>Upgrade to Premium</div>
            <div className='pro-subtitle'>
              Get advanced analytics and insights
            </div>
          </div>
        </button>
      </div>
    </aside>
  );
};
