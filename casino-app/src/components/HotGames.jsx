import React from 'react';
import GameCard from './GameCard';

const HotGames = () => {
  const hotGames = [
    {
      id: 1,
      title: 'Golden Empire',
      provider: 'JILI',
      image: 'https://via.placeholder.com/200x250/8B4513/FFD700?text=Golden+Empire',
      isHot: true
    },
    {
      id: 2,
      title: 'Super Ace',
      provider: 'JILI',
      image: 'https://via.placeholder.com/200x250/DC143C/FFFF00?text=Super+Ace',
      isHot: true
    },
    {
      id: 3,
      title: 'Jackpot Fishing',
      provider: 'JILI',
      image: 'https://via.placeholder.com/200x250/1E90FF/FFFFFF?text=Jackpot+Fishing',
      isHot: true
    },
    {
      id: 4,
      title: 'Fortune Tiger',
      provider: 'JILI',
      image: 'https://via.placeholder.com/200x250/FF8C00/FFFF00?text=Fortune+Tiger',
      isHot: true
    }
  ];

  return (
    <div className="px-4 py-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Hot Games</h2>
      <div className="grid grid-cols-3 gap-4 overflow-x-auto">
        {hotGames.map(game => (
          <GameCard key={game.id} {...game} />
        ))}
      </div>
    </div>
  );
};

export default HotGames;
