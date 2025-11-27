
import React, { useState } from 'react';
import { Page } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { Home } from './pages/Home';
import { NewsFeed } from './pages/NewsFeed';
import { PatchLibrary } from './pages/PatchLibrary';
import { EventHub } from './pages/EventHub';
import { GamePatchDetail } from './pages/GamePatchDetail';
import { NewsDetail } from './pages/NewsDetail';
import { SignUp } from './pages/SignUp';
import { Dashboard } from './pages/Dashboard';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  // State to simulate routing parameter (e.g. /game/:id)
  const [selectedGameId, setSelectedGameId] = useState<string | null>(null);
  const [toast, setToast] = useState<{msg: string, type: 'success' | 'info'} | null>(null);

  const showToast = (msg: string, type: 'success' | 'info' = 'success') => {
    setToast({ msg, type });
  };

  const handleNavigate = (page: Page) => {
      setCurrentPage(page);
      if (page !== Page.GAME_DETAIL) {
          setSelectedGameId(null);
      }
      window.scrollTo(0, 0);
  };

  const navigateToGameDetail = (gameId: string) => {
      setSelectedGameId(gameId);
      setCurrentPage(Page.GAME_DETAIL);
      window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home onShowToast={showToast} />;
      case Page.NEWS:
        return <NewsFeed onShowToast={showToast} onNavigateDetail={() => handleNavigate(Page.NEWS_DETAIL)} />;
      case Page.NEWS_DETAIL:
        return <NewsDetail onNavigate={handleNavigate} onShowToast={showToast} onBack={() => handleNavigate(Page.NEWS)} />;
      case Page.PATCHES:
        return <PatchLibrary onShowToast={showToast} onNavigateToDetail={navigateToGameDetail} />;
      case Page.GAME_DETAIL:
        return <GamePatchDetail onShowToast={showToast} onBack={() => handleNavigate(Page.PATCHES)} />;
      case Page.SUBSCRIBE:
        return <EventHub onShowToast={showToast} />;
      case Page.SIGN_UP:
        return <SignUp onLogin={() => handleNavigate(Page.HOME)} onShowToast={showToast} />;
      case Page.DASHBOARD:
        return <Dashboard onShowToast={showToast} />;
      default:
        return <Home onShowToast={showToast} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-darker font-sans text-brand-light pt-16">
      <Navbar activePage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow flex flex-col">
        {renderPage()}
      </main>
      <Footer />
      {toast && (
        <Toast 
            message={toast.msg} 
            type={toast.type} 
            onClose={() => setToast(null)} 
        />
      )}
    </div>
  );
};

export default App;
