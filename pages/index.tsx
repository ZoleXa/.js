import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, useMemo } from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import CategoryTabs from '../components/CategoryTabs';
import GameCard from '../components/GameCard';
import { games } from '../data/games';

const Home: NextPage = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [activeCategory, setActiveCategory] = useState('all');

  const hotGames = useMemo(() => games.filter(game => game.hot), []);
  
  const filteredGames = useMemo(() => {
    if (activeCategory === 'all') return games;
    return games.filter(game => game.category === activeCategory);
  }, [activeCategory]);

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      <Head>
        <title>Casino Gaming Platform</title>
        <meta name="description" content="Play exciting casino games online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />

      <section className="px-4 py-6">
        <h2 className="text-2xl font-black text-gray-800 mb-4">Hot Games</h2>
        <div className="grid grid-cols-3 gap-3">
          {hotGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      <CategoryTabs 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      <section className="px-4 py-4">
        <div className="grid grid-cols-3 gap-3">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
