import React, { ReactNode } from 'react';
import Header from './Header';
import WalletSection from './WalletSection';
import BottomNav from './BottomNav';

interface LayoutProps {
  children: ReactNode;
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab = 'home', onTabChange = () => {} }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
      <Header />
      <WalletSection />
      <main className="pb-20">
        {children}
      </main>
      <BottomNav activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
};

export default Layout;
