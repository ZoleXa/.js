import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import HotGames from './components/HotGames'
import CategoryTabs from './components/CategoryTabs'
import GamesGrid from './components/GamesGrid'
import BottomNav from './components/BottomNav'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Banner />
      <HotGames />
      <CategoryTabs />
      <GamesGrid />
      <BottomNav />
    </div>
  )
}

export default App
