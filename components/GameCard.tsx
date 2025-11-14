import React from 'react';
import { Game } from '../data/games';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer">
      <div className="relative aspect-[3/4] bg-gradient-to-br from-orange-400 to-red-600">
        {game.hot && (
          <div className="absolute top-2 left-2 z-10">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg transform -rotate-12">
              HOT!
            </div>
          </div>
        )}
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-4xl font-black text-center px-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            {game.title}
          </div>
        </div>
        
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"/>
          </svg>
        </div>
      </div>
      
      <div className="bg-gradient-to-b from-orange-100 to-orange-50 px-3 py-2 text-center">
        <div className="text-gray-800 font-bold text-sm truncate">{game.title}</div>
        <div className="text-orange-600 font-black text-xs mt-1">{game.provider}</div>
      </div>
    </div>
  );
};

export default GameCard;
