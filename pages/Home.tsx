import React from 'react';
import { Hero } from '../components/Hero';
import { MOCK_PATCHES, MOCK_LATEST_NEWS } from '../types';

interface HomeProps {
    onShowToast: (msg: string, type?: 'success' | 'info') => void;
    onNavigateDetail?: () => void;
    onNavigateNews?: () => void;
}

export const Home: React.FC<HomeProps> = ({ onShowToast, onNavigateDetail, onNavigateNews }) => {

  return (
    <div className="min-h-screen pt-24 pb-20">
        <div className="container px-4 mx-auto space-y-8">
            
            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left Column */}
                <div className="lg:col-span-8 space-y-6">
                    <Hero />
                    
                    {/* News Section */}
                    <div className="bg-brand-card rounded-md overflow-hidden shadow-sm border border-gray-100">
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4 bg-brand-card">
                            <h2 className="text-xl items-center gap-3 font-bold text-gray-900 flex">
                                <i className="fas fa-paperclip text-brand-primary transform -rotate-45 text-lg"></i>
                                新聞快訊
                            </h2>
                            <button onClick={onNavigateNews} className="text-sm text-gray-400 hover:text-brand-primary transition flex items-center gap-1 font-bold">更多 <i className="fas fa-chevron-right text-[10px]"></i></button>
                        </div>

                        {/* Feed */}
                        <div className="p-4 space-y-4">
                            {MOCK_LATEST_NEWS.map(news => (
                                <div key={news.id} onClick={onNavigateDetail || (() => onShowToast('閱讀文章...', 'info'))} className="group flex flex-col md:flex-row gap-4 bg-brand-card rounded-md p-1 hover:bg-gray-50 transition cursor-pointer border-l-2 border-transparent hover:border-brand-primary">
                                    <div className="w-full md:w-56 aspect-[16/9] rounded-sm overflow-hidden shrink-0 relative bg-gray-100 border border-gray-100">
                                        <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                                    </div>
                                    <div className="flex flex-col justify-center py-2 pr-4">
                                        <div className="mb-2">
                                            <span className="text-[11px] text-brand-secondary font-black tracking-widest">{news.category} / 遊戲</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-brand-primary transition line-clamp-2 mb-2">
                                            {news.title}
                                        </h3>
                                        <div className="text-xs text-gray-400 flex items-center gap-1 font-mono">
                                            <i className="far fa-clock"></i> 2026-05-05
                                        </div>
                                    </div>
                                </div>
                            )).slice(0, 5)}
                            
                            <button onClick={onNavigateNews} className="w-full py-4 mt-2 bg-gray-50 hover:bg-gray-100 transition text-gray-600 text-sm font-bold rounded-md border border-gray-100">
                                閱讀更多新聞 <i className="fas fa-chevron-right ml-1 text-[10px]"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-4 space-y-6">
                    
                    {/* Ad Widget */}
                    <div className="bg-brand-card rounded-md border border-gray-100 shadow-sm relative overflow-hidden group cursor-pointer aspect-square">
                        <span className="absolute top-2 left-2 z-10 bg-black/60 backdrop-blur px-2 py-0.5 text-[10px] text-white font-bold rounded">廣告</span>
                        <img src="https://i.meee.com.tw/c06RVA3.webp" alt="Ad" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    </div>

                    {/* New Releases */}
                    <div className="bg-brand-card rounded-md overflow-hidden shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4 bg-brand-card">
                            <h2 className="text-lg font-bold text-gray-900">新作上架</h2>
                            <button className="text-sm text-gray-400 hover:text-brand-primary transition flex items-center gap-1 font-bold">更多 <i className="fas fa-chevron-right text-[10px]"></i></button>
                        </div>
                        <div className="p-4 space-y-3">
                            {MOCK_PATCHES.slice(0,5).map(patch => (
                                <div key={patch.id} className="flex gap-4 items-center group cursor-pointer pb-3 border-b border-gray-50 last:border-0 last:pb-0" onClick={() => onShowToast(`查看 ${patch.gameTitle}`, 'info')}>
                                    <div className="w-[100px] aspect-[16/9] rounded-sm overflow-hidden shrink-0 border border-gray-100">
                                        <img src={patch.imageUrl} alt={patch.gameTitle} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-[13px] font-bold text-gray-900 truncate mb-1.5 group-hover:text-brand-primary transition">{patch.gameTitle}</h4>
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span className="text-[10px] bg-brand-adult/10 border border-brand-adult/20 text-brand-adult px-1.5 py-0.5 rounded font-bold">{patch.tags[0]}</span>
                                        </div>
                                        <div className="text-[11px] text-gray-400 font-mono"><i className="far fa-calendar-alt"></i> 2026 / 06 / 20</div>
                                    </div>
                                </div>
                            ))}
                            
                            <button className="w-full py-3.5 mt-2 bg-gray-50 hover:bg-gray-100 transition text-gray-600 text-[13px] font-bold rounded-md border border-gray-100">
                                閱覽更多新作 <i className="fas fa-chevron-right ml-1 text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Popular Patches Grid */}
            <section className="bg-brand-card p-6 rounded-md shadow-sm border border-gray-100">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                        <i className="fas fa-wrench text-brand-primary"></i>
                        熱門遊戲補丁
                    </h2>
                    <button className="text-sm text-gray-400 hover:text-brand-primary transition flex items-center gap-1 font-bold">更多 <i className="fas fa-chevron-right text-[10px]"></i></button>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {MOCK_PATCHES.slice(0,5).map(patch => (
                        <div key={patch.id} className="group cursor-pointer flex flex-col bg-brand-card border border-gray-200 rounded-md overflow-hidden hover:border-brand-primary hover:shadow-md transition" onClick={() => onShowToast(`下載 ${patch.gameTitle}`, 'success')}>
                            <div className="aspect-[16/9] relative overflow-hidden bg-gray-100">
                                <img src={patch.imageUrl} alt={patch.gameTitle} className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90 group-hover:opacity-100" />
                            </div>
                            <div className="p-4 flex flex-col flex-1">
                                <h4 className="font-bold text-gray-900 text-[13px] mb-2 line-clamp-1 group-hover:text-brand-primary transition">{patch.gameTitle}</h4>
                                <div className="text-xs text-gray-900 font-mono font-bold mb-1">Patch {patch.version.replace('v', '')}</div>
                                <div className="text-[10px] text-gray-400 flex items-center gap-1 mb-4 font-mono"><i className="far fa-clock"></i> 2026-05-04 更新</div>
                                
                                <div className="mt-auto pt-3 border-t border-gray-100">
                                    <button className="w-full text-center text-[11px] font-bold text-gray-500 group-hover:text-brand-primary transition flex items-center justify-center gap-2">
                                        Patch 下載檔 <i className="fas fa-download text-brand-primary text-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    </div>
  );
};