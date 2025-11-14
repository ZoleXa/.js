export interface Game {
  id: number;
  title: string;
  provider: string;
  image: string;
  category: 'slot' | 'live' | 'sports' | 'lottery';
  hot?: boolean;
}

export const games: Game[] = [
  {
    id: 1,
    title: 'Golden Empire',
    provider: 'JILI',
    image: '/games/golden-empire.jpg',
    category: 'slot',
    hot: true,
  },
  {
    id: 2,
    title: 'Super Ace',
    provider: 'JILI',
    image: '/games/super-ace.jpg',
    category: 'slot',
    hot: true,
  },
  {
    id: 3,
    title: 'Jackpot Fishing',
    provider: 'JILI',
    image: '/games/jackpot-fishing.jpg',
    category: 'slot',
    hot: true,
  },
  {
    id: 4,
    title: 'Fortune Tiger',
    provider: 'JILI',
    image: '/games/fortune-tiger.jpg',
    category: 'slot',
    hot: true,
  },
  {
    id: 5,
    title: 'Lucky Lottery',
    provider: 'EKOR',
    image: '/games/lucky-lottery.jpg',
    category: 'lottery',
  },
  {
    id: 6,
    title: 'Monkey King',
    provider: 'JILI',
    image: '/games/monkey-king.jpg',
    category: 'slot',
  },
  {
    id: 7,
    title: 'Lucky 365',
    provider: 'JILI',
    image: '/games/lucky-365.jpg',
    category: 'slot',
  },
  {
    id: 8,
    title: 'Dragon Fortune',
    provider: 'JILI',
    image: '/games/dragon-fortune.jpg',
    category: 'slot',
  },
  {
    id: 9,
    title: 'Mega Roulette',
    provider: 'Evolution',
    image: '/games/mega-roulette.jpg',
    category: 'live',
  },
  {
    id: 10,
    title: 'Football Mania',
    provider: 'SBO',
    image: '/games/football-mania.jpg',
    category: 'sports',
  },
];
