
import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { Button } from '../components/Button';
import { SubscriptionBanner } from '../components/SubscriptionBanner';
import { AdBanner } from '../components/AdBanner';
import { PromoGrid } from '../components/PromoGrid';
import { MOCK_PATCHES, MOCK_LATEST_NEWS } from '../types';

interface HomeProps {
    onShowToast: (msg: string, type?: 'success' | 'info') => void;
}

export const Home: React.FC<HomeProps> = ({ onShowToast }) => {
  const [activeFilter, setActiveFilter] = useState('全部');
  
  const handleDownload = (gameTitle: string) => {
    onShowToast(`前往 ${gameTitle} 詳情頁面...`, 'info');
  };

  const handleFilterClick = (filter: string) => {
      setActiveFilter(filter);
  };

  return (
    // Outer Wrapper - Background color (Simulates the body bg extending)
    <div className="animate-fade-in bg-brand-darker min-h-screen">
      
      {/* 
         Main Layout Container:
         - max-w-[1400px]: Restricts width so big screens see background on sides
         - mx-auto: Centers the container
         - shadow-2xl: Adds depth against the outer background
      */}
      <div className="max-w-[1400px] mx-auto bg-[#1A1625] shadow-2xl relative min-h-screen">
        
        {/* 1. Hero Section (Now contained within 1400px) */}
        <Hero />

        {/* 2. Main Content Container */}
        <div className="container mx-auto px-2 md:px-4 py-8 md:py-12 space-y-12">

            {/* --- PROMO GRID SECTION (New Added) --- */}
            {/* Placed between Hero and Latest News */}
            <PromoGrid />
            {/* -------------------------------------- */}

            {/* --- Section: Latest News / Updates (Grid Style) --- */}
            <section id="latest-news">
                <div className="flex items-end justify-between mb-6 px-2">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black text-white flex items-center gap-2">
                            <i className="far fa-newspaper text-brand-secondary"></i> 最新情報
                        </h2>
                        <p className="text-slate-400 text-xs md:text-sm mt-1">ACG 圈內第一手資訊，每日更新。</p>
                    </div>
                    <div className="hidden md:flex gap-2">
                        {['全部', '紳士', '漢化', '活動'].map((tag) => (
                            <button 
                                key={tag}
                                onClick={() => handleFilterClick(tag)}
                                className={`px-3 py-1 rounded text-xs font-bold transition ${activeFilter === tag ? 'bg-brand-secondary text-white' : 'text-slate-500 hover:text-white'}`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                {/* High Density Grid: Mobile 2-col, Desktop 4-col */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
                    {MOCK_LATEST_NEWS.map((news) => (
                        <a 
                            key={news.id} 
                            href="#" 
                            onClick={(e) => {e.preventDefault(); onShowToast('前往新聞內頁...', 'info')}} 
                            className="group block relative"
                        >
                            {/* Image Container with Hover Effects */}
                            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg mb-2.5 border border-white/5 group-hover:border-brand-secondary/50 group-hover:shadow-[0_0_15px_rgba(184,69,255,0.3)] transition-all duration-300">
                                <img 
                                    src={news.imageUrl} 
                                    alt={news.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-in-out" 
                                />
                                
                                {/* Overlay Badges (Absolute Position) */}
                                <div className="absolute top-0 left-0 w-full p-2 flex justify-between items-start pointer-events-none">
                                    <span className={`text-[10px] font-bold text-white px-2 py-0.5 rounded shadow-sm backdrop-blur-md ${news.categoryColor}`}>
                                        {news.category}
                                    </span>
                                </div>
                            </div>

                            {/* Card Info (Below Image for "Store" feel) */}
                            <div className="px-1">
                                <h3 className="text-sm md:text-base font-bold text-white leading-snug line-clamp-2 group-hover:text-brand-secondary transition mb-1.5 h-[2.5em]">
                                    {news.title}
                                </h3>
                                <div className="flex items-center justify-between text-xs text-slate-500 border-t border-white/5 pt-1.5">
                                    <span className="flex items-center gap-1">
                                        <i className="far fa-clock"></i> {news.timeAgo}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <span className="flex items-center gap-0.5 group-hover:text-brand-primary transition"><i className="fas fa-heart text-[10px]"></i> {news.likes}</span>
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                
                <div className="mt-8 text-center md:hidden">
                    <Button variant="outline" size="sm" className="w-full">查看更多新聞</Button>
                </div>
            </section>

            {/* --- ADVERTISEMENT BANNER --- */}
            <AdBanner />
            {/* --------------------------- */}

            {/* --- Section: Popular Patches (Shop/Item Style) --- */}
            <section id="popular-patches" className="relative">
                {/* Background Decor */}
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-primary/10 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="flex items-end justify-between mb-6 px-2 relative z-10">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black text-white flex items-center gap-2">
                            <i className="fas fa-database text-brand-primary"></i> 熱門補丁
                        </h2>
                        <p className="text-slate-400 text-xs md:text-sm mt-1">最多人下載的漢化與模組資源。</p>
                    </div>
                    <Button variant="ghost" className="hidden md:flex text-sm text-slate-400 hover:text-white">
                        瀏覽全部 <i className="fas fa-arrow-right ml-1"></i>
                    </Button>
                </div>

                {/* High Density Grid: Mobile 2-col, Tablet 3-col, Desktop 5-col */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5 relative z-10">
                    {MOCK_PATCHES.map((patch) => (
                        <a 
                            key={patch.id} 
                            href="#" 
                            onClick={(e) => { e.preventDefault(); handleDownload(patch.gameTitle); }}
                            className="group block relative"
                        >
                            {/* Portrait Image (Like Game Cover) */}
                            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg border border-white/5 bg-brand-surface mb-2.5 group-hover:-translate-y-1 group-hover:shadow-[0_5px_20px_rgba(245,49,127,0.3)] group-hover:border-brand-primary/50 transition-all duration-300">
                                <img 
                                    src={patch.imageUrl} 
                                    alt={patch.gameTitle} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                                />
                                
                                {/* Overlay Top-Left: Version Badge */}
                                <div className="absolute top-2 left-2">
                                    <span className="bg-black/80 backdrop-blur text-brand-primary border border-brand-primary/30 text-[10px] font-black px-1.5 py-0.5 rounded">
                                        {patch.version}
                                    </span>
                                </div>

                                {/* Overlay Top-Right: Action Icon */}
                                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition duration-300">
                                    <div className="w-7 h-7 bg-brand-primary rounded-full flex items-center justify-center text-white shadow-lg transform scale-90 group-hover:scale-100 transition">
                                        <i className="fas fa-download text-xs"></i>
                                    </div>
                                </div>

                                {/* Overlay Bottom: Tag (Optional) */}
                                <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black/90 to-transparent pt-6">
                                    <div className="flex gap-1 flex-wrap">
                                        {patch.tags.slice(0, 1).map(tag => (
                                            <span key={tag} className="text-[9px] text-white bg-white/20 px-1.5 py-0.5 rounded backdrop-blur-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Compact Info */}
                            <div className="px-1">
                                <h3 className="text-sm font-bold text-white leading-tight truncate group-hover:text-brand-primary transition">
                                    {patch.gameTitle}
                                </h3>
                                <div className="flex items-center justify-between mt-1.5">
                                    <span className="text-xs text-slate-500">{patch.size}</span>
                                    <span className="text-[10px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded flex items-center gap-1">
                                        <i className="fas fa-download"></i> {patch.downloads > 1000 ? (patch.downloads/1000).toFixed(1) + 'k' : patch.downloads}
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Button variant="outline" size="sm" className="w-full">查看所有補丁</Button>
                </div>
            </section>

        </div>

        <SubscriptionBanner />
      </div>
    </div>
  );
};
