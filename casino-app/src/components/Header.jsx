import React from 'react';

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-600 to-teal-600 p-4">
      <div className="flex items-center justify-between mb-3">
        {/* Language Selector */}
        <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 gap-2">
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <img
              src="https://flagcdn.com/us.svg"
              alt="US Flag"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-white font-semibold">English</span>
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
            <span className="text-white text-xl">?</span>
          </button>
          <button className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
            </svg>
          </button>
          <button className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center relative">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
            </svg>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">3</span>
          </button>
        </div>
      </div>

      {/* Balance Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          {/* Chips */}
          <div className="flex items-center gap-2 bg-white bg-opacity-20 rounded-lg px-3 py-2 flex-1">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"/>
            </svg>
            <div>
              <div className="text-white text-xs opacity-80">Chips</div>
              <div className="text-white font-bold">**********</div>
            </div>
          </div>

          {/* Wallet */}
          <div className="flex items-center gap-2 bg-white bg-opacity-20 rounded-lg px-3 py-2 flex-1">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
              <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
            </svg>
            <div>
              <div className="text-white text-xs opacity-80">Wallet (MYR)</div>
              <div className="text-white font-bold">**********</div>
            </div>
          </div>
        </div>

        {/* Timer and Refresh Icons */}
        <div className="flex items-center gap-3 ml-3">
          <button className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
            </svg>
          </button>
          <button className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
