import React from 'react';

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    { id: 'all', label: 'All', icon: 'gamepad' },
    { id: 'slot', label: 'Slot', icon: 'slot' },
    { id: 'live', label: 'Live', icon: 'video' },
    { id: 'sports', label: 'Sports', icon: 'sports' },
  ];

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'gamepad':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 9h2v2h2v2H8v2H6v-2H4v-2h2V9m12.5 0a1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5 1.5 1.5 0 01-1.5-1.5A1.5 1.5 0 0118.5 9m-3 3a1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5 1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 011.5-1.5M17 5a7 7 0 017 7 7 7 0 01-7 7c-1.96 0-3.73-.8-5-2.1A6.96 6.96 0 017 19a7 7 0 01-7-7 7 7 0 017-7h10z"/>
          </svg>
        );
      case 'slot':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 4h4v4H4V4m6 0h4v4h-4V4m6 0h4v4h-4V4M4 10h4v4H4v-4m6 0h4v4h-4v-4m6 0h4v4h-4v-4M4 16h4v4H4v-4m6 0h4v4h-4v-4m6 0h4v4h-4v-4z"/>
          </svg>
        );
      case 'video':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1v-3.5l4 4v-11l-4 4z"/>
          </svg>
        );
      case 'sports':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 3.3l1.35-.95c1.82.56 3.37 1.76 4.38 3.34l-.39 1.34-1.35.46L13.5 6.7V5.3zm-3.35-.95L11 5.3v1.4L7.5 9.49l-1.35-.46-.39-1.34c1.01-1.58 2.56-2.78 4.38-3.34zM7.5 17.5l-1.48 1.48C4.84 17.81 4 15.42 4 12.83c0-.73.09-1.43.24-2.11l1.48 1.48L7.5 17.5zm1.76 2.26v.01c-.47-.23-.91-.5-1.33-.79L9.41 17.5H11v2.26c-.58 0-1.15-.08-1.74-.26zM13 19.76V17.5h1.59l1.48 1.48c-.42.29-.86.56-1.33.79-.59.18-1.16.26-1.74.26zm5.74-1.48L17.26 17.5l1.78-5.3 1.48-1.48c.15.68.24 1.38.24 2.11 0 2.59-.84 4.98-2.02 6.15z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-4 py-4 flex gap-3 overflow-x-auto scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${
            activeCategory === category.id
              ? 'bg-gradient-to-r from-cyan-600 to-cyan-700 text-white shadow-lg scale-105'
              : 'bg-white text-gray-600 hover:bg-gray-50 shadow'
          }`}
        >
          {getIcon(category.icon)}
          <span>{category.label}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
