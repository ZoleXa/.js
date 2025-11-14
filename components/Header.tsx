import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-cyan-600 to-cyan-700 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 min-w-[140px]">
        <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-white">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="4" width="16" height="16" fill="#CC0001"/>
            <rect x="4" y="4" width="16" height="3" fill="#FFFFFF"/>
            <rect x="4" y="17" width="16" height="3" fill="#FFFFFF"/>
            <path d="M4 10 L12 14 L20 10" fill="#FFCC00"/>
            <circle cx="8" cy="10" r="1.5" fill="#FFFFFF"/>
          </svg>
        </div>
        <span className="text-white font-semibold text-sm">English</span>
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <div className="flex items-center gap-4">
        <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" strokeWidth={2}/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01" />
          </svg>
        </button>
        
        <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        </button>
        
        <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center relative">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
