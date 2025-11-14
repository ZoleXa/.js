import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="px-4 py-4">
      <div className="relative bg-gradient-to-r from-red-500 via-pink-500 to-red-500 rounded-2xl overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-transparent"></div>
        <div className="relative px-6 py-8 flex items-center justify-between">
          <div className="flex-1">
            <div className="text-white text-2xl font-black mb-2 drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text">TNG eWallet</span>
            </div>
            <div className="text-white text-lg font-bold mb-1" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
              <span className="text-yellow-300">Registration</span> & <span className="text-green-300">Identity</span>
            </div>
            <div className="text-white text-lg font-bold mb-2" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
              <span className="text-yellow-300">Verification Process</span>
            </div>
            <div className="text-white text-lg font-bold" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
              for <span className="text-yellow-300">Overseas Users</span>
            </div>
            <div className="mt-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full inline-block">
              Top up faster after completing the process!
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="bg-blue-600 rounded-2xl px-6 py-8 shadow-xl transform rotate-3">
              <div className="text-white text-3xl font-black">Touch</div>
              <div className="text-white text-2xl font-black">nGo</div>
              <div className="text-yellow-300 text-lg font-bold">eWallet</div>
            </div>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-2 rounded-full text-sm shadow-lg transition-all transform hover:scale-105 flex items-center gap-2">
              LEARN MORE
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="absolute top-4 left-4 w-16 h-16 bg-blue-400/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 right-4 w-20 h-20 bg-pink-400/30 rounded-full blur-xl"></div>
      </div>
    </div>
  );
};

export default Banner;
