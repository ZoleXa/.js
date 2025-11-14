import React from 'react';

const GameCard = ({ title, provider, image, isHot }) => {
  return (
    <div className="relative group cursor-pointer">
      {/* Hot Badge */}
      {isHot && (
        <div className="absolute -top-2 -left-2 z-10">
          <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold transform -rotate-12 shadow-lg">
            HOT!
          </div>
        </div>
      )}

      {/* Coin Badge */}
      {isHot && (
        <div className="absolute -top-2 -right-2 z-10">
          <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
            </svg>
          </div>
        </div>
      )}

      {/* Game Image */}
      <div className="relative rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
        <img
          src={image || 'https://via.placeholder.com/200x250/FF6B35/FFFFFF?text=Game'}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
      </div>

      {/* Game Info */}
      <div className="mt-2 text-center">
        <h3 className="font-semibold text-gray-800 text-sm truncate">{title}</h3>
        <p className="text-yellow-600 text-xs font-bold mt-1">{provider}</p>
      </div>
    </div>
  );
};

export default GameCard;
