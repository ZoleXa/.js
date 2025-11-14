import React from 'react';

const WalletSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3 flex-1">
        <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"/>
            <circle cx="12" cy="12" r="6" fill="#0891b2"/>
            <circle cx="12" cy="12" r="3" fill="white"/>
          </svg>
        </div>
        <div>
          <div className="text-white text-sm font-medium">Chips</div>
          <div className="flex items-center gap-1">
            {[...Array(9)].map((_, i) => (
              <svg key={i} className="w-3 h-3 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
        </div>
      </div>

      <div className="w-px h-12 bg-white/30 mx-3"></div>

      <div className="flex items-center gap-3 flex-1">
        <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="3" y="6" width="18" height="12" rx="2" strokeWidth={2}/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 14h.01M11 14h2" />
          </svg>
        </div>
        <div>
          <div className="text-white text-sm font-medium">Wallet (MYR)</div>
          <div className="flex items-center gap-1">
            {[...Array(9)].map((_, i) => (
              <svg key={i} className="w-3 h-3 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-2 ml-3">
        <button className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </button>
        <button className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WalletSection;
