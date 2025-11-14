import React from 'react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'news', label: 'News', icon: 'news' },
    { id: 'exchange', label: 'Exchange', icon: 'exchange' },
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'ticket', label: 'My Ticket', icon: 'ticket' },
    { id: 'profile', label: 'Profile', icon: 'profile' },
  ];

  const getIcon = (iconType: string, isActive: boolean) => {
    const color = isActive ? '#0891b2' : '#9ca3af';
    
    switch (iconType) {
      case 'news':
        return (
          <svg className="w-6 h-6" fill="none" stroke={color} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        );
      case 'exchange':
        return (
          <svg className="w-6 h-6" fill="none" stroke={color} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'home':
        return (
          <div className={`w-16 h-16 rounded-full flex items-center justify-center -mt-8 shadow-xl ${
            isActive ? 'bg-gradient-to-br from-orange-400 to-orange-600' : 'bg-gradient-to-br from-orange-400 to-orange-600'
          }`}>
            <svg className="w-8 h-8" fill="white" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            <div className="absolute inset-0 rounded-full border-4 border-white"></div>
          </div>
        );
      case 'ticket':
        return (
          <svg className="w-6 h-6" fill="none" stroke={color} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        );
      case 'profile':
        return (
          <svg className="w-6 h-6" fill="none" stroke={color} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="flex items-end justify-around px-2 py-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center justify-center min-w-[60px] ${
              tab.id === 'home' ? 'relative' : 'py-2'
            }`}
          >
            {getIcon(tab.icon, activeTab === tab.id)}
            <span
              className={`text-xs mt-1 font-medium ${
                activeTab === tab.id ? 'text-cyan-600' : 'text-gray-400'
              } ${tab.id === 'home' ? 'mt-2' : ''}`}
            >
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
