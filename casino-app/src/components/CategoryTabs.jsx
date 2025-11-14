import React, { useState } from 'react';

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All', icon: '🎮' },
    { id: 'slot', label: 'Slot', icon: '🎰' },
    { id: 'live', label: 'Live', icon: '📹' },
    { id: 'sports', label: 'Sports', icon: '⚽' }
  ];

  return (
    <div className="px-4 py-4">
      <div className="flex gap-3 overflow-x-auto scrollbar-hide">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <span className="text-xl">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
