import React from 'react';
import { Hero } from '../components/Hero';
import { MOCK_PATCHES, MOCK_LATEST_NEWS } from '../types';

interface HomeProps {
    onShowToast: (msg: string, type?: 'success' | 'info') => void;
}

export const Home: React.FC<HomeProps> = ({ onShowToast }) => {

  return (
    <div className="bg-[#121212] min-h-screen pt-24 pb-20">
        <div className="container px-4 mx-auto space-y-8">
            
            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left Column */}
                <div className="lg:col-span-8 space-y-6">
                    <Hero />
                    
                    {/* News Section */}
                    <div className="bg-[#18181b] rounded-md overflow-hidden">
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-[#18181b]">
                            <h2 className="text-xl items-center gap-3 font-bold text-white flex">
                                <i className="fas fa-paperclip text-slate-400 transform -rotate-45 text-lg"></i>
                                新聞快訊
                            </h2>
                            <button className="text-sm text-slate-400 hover:text-white transition flex items-center gap-1 font-bold">更多 <i className="fas fa-chevron-right text-[10px]"></i></button>
                        </div>

                        {/* Feed */}
                        <div className="p-4 space-y-4">
                            {MOCK_LATEST_NEWS.map(news => (
                                <div key={news.id} onClick={() => onShowToast('閱讀文章...', 'info')} className="group flex flex-col md:flex-row gap-4 bg-[#18181b] rounded-md p-1 hover:bg-[#1e1e24] transition cursor-pointer border-l-2 border-transparent hover:border-[#e63946]">
                                    <div className="w-full md:w-56 aspect-[16/9] rounded-sm overflow-hidden shrink-0 relative bg-black border border-white/5">
                                        <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                                    </div>
                                    <div className="flex flex-col justify-center py-2 pr-4">
                                        <div className="mb-2">
                                            <span className="text-[11px] text-[#e63946] font-black tracking-widest">{news.category} / 遊戲</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-white leading-snug group-hover:text-[#e63946] transition line-clamp-2 mb-2">
                                            {news.title}
                                        </h3>
                                        <div className="text-xs text-slate-500 flex items-center gap-1 font-mono">
                                            <i className="far fa-clock"></i> 2026-05-05
                                        </div>
                                    </div>
                                </div>
                            )).slice(0, 5)}
                            
                            <button className="w-full py-4 mt-2 bg-[#1e1e24] hover:bg-white/10 transition text-slate-300 text-sm font-bold rounded-md border border-white/5">
                                閱讀更多新聞 <i className="fas fa-chevron-right ml-1 text-[10px]"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-4 space-y-6">
                    
                    {/* Ad Widget */}
                    <div className="bg-[#18181b] rounded-md border border-white/5 relative overflow-hidden group cursor-pointer aspect-square">
                        <span className="absolute top-2 left-2 z-10 bg-black/60 backdrop-blur px-2 py-0.5 text-[10px] text-white font-bold rounded">廣告</span>
                        <img src="https://i.meee.com.tw/c06RVA3.webp" alt="Ad" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    </div>

                    {/* New Releases */}
                    <div className="bg-[#18181b] rounded-md overflow-hidden">
                        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-[#18181b]">
                            <h2 className="text-lg font-bold text-white">新作上架</h2>
                            <button className="text-sm text-slate-400 hover:text-white transition flex items-center gap-1 font-bold">更多 <i className="fas fa-chevron-right text-[10px]"></i></button>
                        </div>
                        <div className="p-4 space-y-3">
                            {MOCK_PATCHES.slice(0,5).map(patch => (
                                <div key={patch.id} className="flex gap-4 items-center group cursor-pointer pb-3 border-b border-white/5 last:border-0 last:pb-0" onClick={() => onShowToast(`查看 ${patch.gameTitle}`, 'info')}>
                                    <div className="w-[100px] aspect-[16/9] rounded-sm overflow-hidden shrink-0 border border-white/5">
                                        <img src={patch.imageUrl} alt={patch.gameTitle} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-[13px] font-bold text-white truncate mb-1.5 group-hover:text-[#e63946] transition">{patch.gameTitle}</h4>
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span className="text-[10px] bg-[#e63946]/20 border border-[#e63946]/30 text-[#e63946] px-1.5 py-0.5 rounded font-bold">{patch.tags[0]}</span>
                                        </div>
                                        <div className="text-[11px] text-slate-500 font-mono"><i className="far fa-calendar-alt"></i> 2026 / 06 / 20</div>
                                    </div>
                                </div>
                            ))}
                            
                            <button className="w-full py-3.5 mt-2 bg-[#1e1e24] hover:bg-white/10 transition text-slate-300 text-[13px] font-bold rounded-md border border-white/5">
                                閱覽更多新作 <i className="fas fa-chevron-right ml-1 text-[10px]"></i>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Popular Patches Grid */}
            <section className="bg-[#18181b] p-6 rounded-md">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                    <h2 className="text-xl font-bold text-white flex items-center gap-3">
                        <i className="fas fa-wrench text-slate-400"></i>
                        熱門遊戲補丁
                    </h2>
                    <button className="text-sm text-slate-400 hover:text-white transition flex items-center gap-1 font-bold">更多 <i className="fas fa-chevron-right text-[10px]"></i></button>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {MOCK_PATCHES.slice(0,5).map(patch => (
                        <div key={patch.id} className="group cursor-pointer flex flex-col bg-[#1e1e24] border border-white/5 rounded-md overflow-hidden hover:border-white/20 transition" onClick={() => onShowToast(`下載 ${patch.gameTitle}`, 'success')}>
                            <div className="aspect-[16/9] relative overflow-hidden bg-black">
                                <img src={patch.imageUrl} alt={patch.gameTitle} className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90 group-hover:opacity-100" />
                            </div>
                            <div className="p-4 flex flex-col flex-1">
                                <h4 className="font-bold text-white text-[13px] mb-2 line-clamp-1 group-hover:text-[#e63946] transition">{patch.gameTitle}</h4>
                                <div className="text-xs text-white font-mono font-bold mb-1">Patch {patch.version.replace('v', '')}</div>
                                <div className="text-[10px] text-slate-500 flex items-center gap-1 mb-4 font-mono"><i className="far fa-clock"></i> 2026-05-04 更新</div>
                                
                                <div className="mt-auto pt-3 border-t border-white/5">
                                    <button className="w-full text-center text-[11px] font-bold text-slate-300 group-hover:text-white transition flex items-center justify-center gap-2">
                                        Patch 下載檔 <i className="fas fa-download text-[#e63946] text-sm"></i>
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