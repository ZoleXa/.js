import React from 'react';
import GameCard from './GameCard';

const GamesGrid = () => {
  const games = [
    {
      id: 1,
      title: 'eKOR Lottery',
      provider: 'LOTTERY',
      image: 'https://via.placeholder.com/200x250/00BFFF/FFFFFF?text=eKOR+Lottery',
      isHot: true
    },
    {
      id: 2,
      title: 'Monkey King',
      provider: 'SLOT',
      image: 'https://via.placeholder.com/200x250/FF8C00/FFFF00?text=Monkey+King',
      isHot: true
    },
    {
      id: 3,
      title: 'Lucky365',
      provider: 'SLOT',
      image: 'https://via.placeholder.com/200x250/DAA520/FFFFFF?text=Lucky365',
      isHot: true
    },
    {
      id: 4,
      title: 'Dragon Fortune',
      provider: 'JILI',
      image: 'https://via.placeholder.com/200x250/DC143C/FFD700?text=Dragon+Fortune',
      isHot: false
    },
    {
      id: 5,
      title: 'Ocean King',
      provider: 'JILI',
      image: 'https://via.placeholder.com/200x250/1E90FF/FFFFFF?text=Ocean+King',
      isHot: false
    },
    {
      id: 6,
      title: 'Bonus Hunter',
      provider: 'JILI',
      image: 'https://via.placeholder.com/200x250/32CD32/FFFFFF?text=Bonus+Hunter',
      isHot: false
    }
  ];

  return (
    <div className="px-4 py-4 pb-24">
      <div className="grid grid-cols-3 gap-4">
        {games.map(game => (
          <GameCard key={game.id} {...game} />
        ))}
      </div>
    </div>
  );
};

export default GamesGrid;
