import React, { useState } from 'react';

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    {
      id: 'news',
      label: 'News',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
        </svg>
      )
    },
    {
      id: 'exchange',
      label: 'Exchange',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"/>
        </svg>
      )
    },
    {
      id: 'home',
      label: 'Home',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
        </svg>
      )
    },
    {
      id: 'ticket',
      label: 'My Ticket',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z"/>
        </svg>
      )
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
        </svg>
      )
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <div className="flex justify-around items-center px-2 py-2">
        {navItems.map((item) => {
          const isHome = item.id === 'home';
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center transition-all duration-300 ${
                isHome ? 'relative -top-4' : ''
              }`}
            >
              {isHome ? (
                <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-xl ${
                  isActive
                    ? 'bg-gradient-to-br from-yellow-400 to-orange-500'
                    : 'bg-gradient-to-br from-yellow-400 to-orange-400'
                }`}>
                  <div className="text-white">{item.icon}</div>
                </div>
              ) : (
                <div className={`flex flex-col items-center gap-1 px-3 py-2 ${
                  isActive ? 'text-cyan-600' : 'text-gray-500'
                }`}>
                  {item.icon}
                  <span className="text-xs font-medium">{item.label}</span>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
