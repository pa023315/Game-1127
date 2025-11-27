
import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { Button } from '../components/Button';
import { SubscriptionBanner } from '../components/SubscriptionBanner';
import { MOCK_PATCHES, MOCK_LATEST_NEWS, MOCK_HEADLINE_MAIN, MOCK_HEADLINE_SIDE } from '../types';

interface HomeProps {
    onShowToast: (msg: string, type?: 'success' | 'info') => void;
}

export const Home: React.FC<HomeProps> = ({ onShowToast }) => {
  const [activeFilter, setActiveFilter] = useState('焦點');
  
  const handleDownload = (gameTitle: string) => {
    onShowToast(`前往 ${gameTitle} 詳情頁面...`, 'info');
  };

  const handleFilterClick = (filter: string) => {
      setActiveFilter(filter);
      // In a real app, this would filter the MOCK_LATEST_NEWS
  };

  const handleHeadlineClick = () => {
      onShowToast('正在前往焦點新聞...', 'info');
  };

  return (
    <div className="animate-fade-in">
      <Hero />

      {/* Focus Headlines Section (New) */}
      <section id="focus-headlines" className="container mx-auto px-4 py-12 border-b border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Focus Story */}
            <div 
                className="lg:col-span-2 group relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden cursor-pointer shadow-lg border border-slate-800"
                onClick={handleHeadlineClick}
            >
                <img src={MOCK_HEADLINE_MAIN.imageUrl} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" alt="Main Headline" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/50 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full z-10">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded shadow shadow-fuchsia-500/20">
                            {MOCK_HEADLINE_MAIN.category}
                        </span>
                        <span className="text-slate-300 text-xs flex items-center gap-1">
                            <i className="far fa-clock"></i> {MOCK_HEADLINE_MAIN.date}
                        </span>
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight group-hover:text-brand-primary transition">
                        {MOCK_HEADLINE_MAIN.title}
                    </h3>
                    <p className="text-slate-300 line-clamp-2 text-sm md:text-base max-w-2xl hidden md:block">
                        {MOCK_HEADLINE_MAIN.summary}
                    </p>
                </div>
            </div>

            {/* Sidebar Stories */}
            <div className="lg:col-span-1 flex flex-col h-full">
                
                <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-800">
                    <h3 className="font-bold text-white text-lg flex items-center">
                        <i className="fas fa-bookmark text-brand-primary mr-2"></i> 編輯精選
                    </h3>
                </div>

                <div className="flex flex-col gap-4 flex-grow">
                    {MOCK_HEADLINE_SIDE.map((item) => (
                        <div key={item.id} onClick={handleHeadlineClick} className="flex gap-4 group p-2 rounded-xl hover:bg-slate-900 transition border border-transparent hover:border-slate-800 cursor-pointer">
                            <div className="w-32 h-20 shrink-0 rounded-lg overflow-hidden relative border border-slate-800">
                                <img src={item.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt={item.title} />
                                {/* Optional Video Indicator */}
                                {(item as any).isVideo && (
                                     <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                        <i className="fas fa-play text-white text-[10px] bg-black/50 p-1.5 rounded-full backdrop-blur"></i>
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className={`text-[10px] font-bold mb-1 ${item.categoryColor}`}>
                                    {item.category}
                                </span>
                                <h4 className="text-sm font-bold text-white leading-snug line-clamp-2 group-hover:text-brand-primary transition">
                                    {item.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section id="latest-news" className="container mx-auto px-4 py-12">
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
            <div className="flex items-center gap-3 self-start md:self-auto">
                <div className="w-1.5 h-6 bg-brand-primary rounded-full"></div>
                <h2 className="text-2xl font-bold text-white tracking-wide">最新新聞</h2>
            </div>

            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                {['焦點', 'PC', '主機', '動漫', '補丁', '活動', '紳士專區'].map((filter) => (
                    <button 
                        key={filter}
                        onClick={() => handleFilterClick(filter)}
                        className={`px-5 py-1.5 rounded-full text-sm font-bold whitespace-nowrap transition border ${
                            activeFilter === filter 
                            ? 'bg-brand-primary text-slate-900 border-brand-primary shadow-[0_0_10px_rgba(16,185,129,0.4)]' 
                            : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 border-slate-700'
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOCK_LATEST_NEWS.map((news) => (
                <a key={news.id} href="#" onClick={(e) => {e.preventDefault(); onShowToast('前往新聞內頁...', 'info')}} className="group block bg-slate-900 rounded-lg overflow-hidden border border-slate-800 hover:border-slate-600 transition duration-300">
                    <div className="relative aspect-video overflow-hidden">
                        <img 
                            src={news.imageUrl} 
                            alt={news.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                        />
                        <span className={`absolute top-0 left-0 text-white text-xs font-bold px-3 py-1.5 rounded-br-lg shadow-md z-10 ${news.categoryColor}`}>
                            {news.category}
                        </span>
                    </div>
                    <div className="p-4">
                        <h3 className="text-white font-bold text-base leading-snug line-clamp-2 mb-3 group-hover:text-brand-primary transition h-10">
                            {news.title}
                        </h3>
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                            <span className="flex items-center gap-1"><i className="far fa-thumbs-up"></i> {news.likes}</span>
                            <span className="flex items-center gap-1"><i className="far fa-comment-alt"></i> {news.comments}</span>
                            <span className="ml-auto">{news.timeAgo}</span>
                        </div>
                    </div>
                </a>
            ))}
        </div>

        <div className="mt-12 text-center">
            <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-600 px-8 py-3 rounded-full transition font-bold text-sm">
                載入更多新聞
            </button>
        </div>

      </section>

      {/* Popular Patches (Redesigned) */}
      <section id="popular-patches" className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-6 bg-brand-accent rounded-full"></div> 
            <h2 className="text-2xl font-bold text-white tracking-wide">熱門補丁</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {MOCK_PATCHES.map((patch) => (
                <a 
                    key={patch.id} 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); handleDownload(patch.gameTitle); }}
                    className="group block bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-brand-accent/50 transition duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(217,70,239,0.15)] relative"
                >
                    <div className="aspect-[4/3] overflow-hidden relative">
                        <img 
                            src={patch.imageUrl} 
                            alt={patch.gameTitle} 
                            className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-in-out" 
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center backdrop-blur-[1px]">
                            <span className="text-white font-bold border border-white/30 px-4 py-2 rounded-full backdrop-blur-md bg-white/10 text-sm">
                                查看詳情
                            </span>
                        </div>
                    </div>
                    
                    <div className="p-4">
                        <h3 className="text-white font-bold text-lg leading-tight truncate group-hover:text-brand-accent transition">
                            {patch.gameTitle}
                        </h3>
                        <div className="flex items-center gap-2 mt-1 mb-3">
                            <span className="text-xs font-mono text-brand-primary bg-brand-primary/10 px-1.5 py-0.5 rounded border border-brand-primary/20">
                                {patch.version}
                            </span>
                            <span className="text-[10px] text-slate-500 flex items-center">
                                <i className="fas fa-download mr-1"></i>
                                {patch.downloads > 1000 ? (patch.downloads / 1000).toFixed(1) + 'k' : patch.downloads}
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                            {patch.tags.slice(0, 2).map(tag => (
                                <span key={tag} className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </a>
            ))}
        </div>
      </section>

      <SubscriptionBanner />
    </div>
  );
};
