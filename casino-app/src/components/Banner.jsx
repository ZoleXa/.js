import React from 'react';

const Banner = () => {
  return (
    <div className="px-4 py-3">
      <div className="relative bg-gradient-to-r from-red-500 via-pink-500 to-blue-600 rounded-2xl p-6 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-8 translate-x-8"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full translate-y-8 -translate-x-8"></div>

        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-1" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
                TNC eWallet
              </h2>
              <h3 className="text-xl font-bold text-white mb-2" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
                Registration & Identity
              </h3>
              <h3 className="text-xl font-bold text-yellow-300 mb-3" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
                Verification Process
              </h3>
              <h3 className="text-xl font-bold text-white mb-3" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
                for Overseas Users
              </h3>
              <div className="bg-yellow-400 text-red-600 px-3 py-1 rounded-full inline-block text-xs font-bold">
                Top up faster after completing the process!
              </div>
            </div>

            <div className="ml-4">
              <div className="relative">
                <div className="w-32 h-32 bg-blue-700 rounded-2xl flex items-center justify-center relative">
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-0.5 rounded text-xs font-bold">
                    Touch n Go
                  </div>
                  <div className="text-white text-4xl font-bold">eWallet</div>
                </div>
                <button className="absolute -bottom-2 -right-2 bg-yellow-400 text-blue-800 px-4 py-1 rounded-full text-xs font-bold shadow-lg hover:bg-yellow-300 transition-colors">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
