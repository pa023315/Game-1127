import React, { useState } from 'react';
import { MOCK_NEWS, MOCK_HEADLINE_MAIN, MOCK_HEADLINE_SIDE } from '../types';
import { Button } from '../components/Button';
import { PromoGrid } from '../components/PromoGrid';

interface NewsFeedProps {
    onShowToast: (msg: string, type?: 'success' | 'info') => void;
    onNavigateDetail?: () => void;
}

export const NewsFeed: React.FC<NewsFeedProps> = ({ onShowToast, onNavigateDetail }) => {
  const [filter, setFilter] = useState('全部');
  const filters = ['全部', '新聞', '評測', '更新日誌', '模組'];
  const [email, setEmail] = useState('');
  
  // Duplicate mock data to make the list longer for demo
  const allNews = [...MOCK_NEWS, ...MOCK_NEWS, ...MOCK_NEWS];

  const handleSubscribe = () => {
    if (email) {
        onShowToast('成功訂閱每日摘要！', 'success');
        setEmail('');
    } else {
        onShowToast('請輸入有效的電子信箱。', 'info');
    }
  };

  const handleViewPatch = () => {
      onShowToast('正在前往補丁詳情頁...', 'info');
  };

  const handleReadMore = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateDetail) {
      onNavigateDetail();
    } else {
      onShowToast('正在前往文章內頁...', 'info');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in pt-24">
      
      {/* 1. 焦點頭條 Hero Section */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-6 bg-brand-accent rounded-full shadow-sm"></div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-wide">焦點頭條 <span className="text-gray-500 text-sm ml-2 font-normal">HEADLINES</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Feature */}
            <div onClick={handleReadMore} className="lg:col-span-2 group relative h-[450px] rounded-2xl overflow-hidden border border-gray-200 cursor-pointer shadow-sm">
                <img 
                    src={MOCK_HEADLINE_MAIN.imageUrl} 
                    alt={MOCK_HEADLINE_MAIN.title} 
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                            {MOCK_HEADLINE_MAIN.category}
                        </span>
                        <span className="text-gray-300 text-xs flex items-center gap-1">
                            <i className="far fa-clock"></i> {MOCK_HEADLINE_MAIN.date}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight group-hover:text-brand-primary transition">
                        {MOCK_HEADLINE_MAIN.title}
                    </h3>
                    <p className="text-gray-200 line-clamp-2 text-sm md:text-base max-w-2xl text-shadow">
                        {MOCK_HEADLINE_MAIN.summary}
                    </p>
                </div>
            </div>

            {/* Top Stories List */}
            <div className="lg:col-span-1 flex flex-col gap-4">
                
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <h3 className="font-bold text-gray-900 text-lg flex items-center"><i className="fas fa-fire text-orange-500 mr-2"></i> 本週熱門</h3>
                    <a href="#" className="text-xs text-gray-400 hover:text-gray-900 transition">更多 &gt;</a>
                </div>

                <div className="flex flex-col gap-3 h-full">
                    {MOCK_HEADLINE_SIDE.map((item) => (
                         <div key={item.id} onClick={handleReadMore} className="flex gap-4 group p-2 rounded-xl hover:bg-gray-50 transition border border-transparent hover:border-gray-200 cursor-pointer">
                            <div className="w-28 h-20 shrink-0 rounded-lg overflow-hidden relative">
                                <img 
                                    src={item.imageUrl} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                                    alt={item.title} 
                                />
                                {/* Optional Video Indicator */}
                                {(item as any).isVideo && (
                                     <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                        <i className="fas fa-play text-white text-[10px] bg-black/50 p-1.5 rounded-full backdrop-blur"></i>
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className={`text-[10px] font-bold mb-1 ${item.categoryColor || 'text-gray-500'}`}>
                                    {item.category}
                                </span>
                                <h4 className="text-sm font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-brand-primary transition">
                                    {item.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* --- PROMO GRID SECTION (Inserted) --- */}
      <PromoGrid />
      {/* ------------------------------------- */}

      {/* 2. Existing List Header & Filter */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-gray-200 pb-4">
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">最新消息</h1>
            <p className="text-gray-500">來自地下的即時快訊。</p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {filters.map(f => (
                <button 
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition whitespace-nowrap ${
                        filter === f 
                        ? 'bg-brand-primary text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                    {f}
                </button>
            ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main List */}
        <div className="lg:col-span-3 flex flex-col gap-6">
            {allNews.map((news, idx) => (
                <div key={`${news.id}-${idx}`} onClick={handleReadMore} className="bg-brand-card shadow-sm border border-gray-100 p-5 rounded-xl flex flex-col sm:flex-row gap-6 hover:border-gray-300 transition group cursor-pointer">
                    <div className="w-full sm:w-64 h-40 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={news.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt={news.title} />
                    </div>
                    <div className="flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-2">
                             <span className="text-xs font-bold text-brand-primary uppercase tracking-wider">{news.category}</span>
                             <span className="text-xs text-gray-400">• {news.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors">{news.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-auto">{news.summary}</p>
                        
                        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
                            {news.linkedPatchId && (
                                <Button 
                                    variant="accent" 
                                    size="sm" 
                                    icon="fas fa-gamepad" 
                                    className="shadow-none"
                                    onClick={(e) => { e.stopPropagation(); handleViewPatch(); }}
                                >
                                    查看補丁
                                </Button>
                            )}
                            <button 
                                onClick={handleReadMore}
                                className="text-sm text-gray-500 hover:text-brand-primary transition ml-auto flex items-center gap-1"
                            >
                                閱讀全文 <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            
            <div className="flex justify-center mt-8">
                <Button variant="outline">載入更多</Button>
            </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-8">
            {/* Hot Tags */}
            <div className="bg-brand-card rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider border-l-4 border-brand-primary pl-3">熱門標籤</h3>
                <div className="flex flex-wrap gap-2">
                    {['#Nier', '#無修', '#4K', '#物理效果', '#漢化', '#RPG', '#Cyberpunk'].map(tag => (
                        <span key={tag} className="text-xs bg-gray-50 text-gray-500 hover:text-brand-primary hover:bg-gray-100 px-3 py-1.5 rounded cursor-pointer transition border border-gray-200">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Newsletter Mini */}
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 border border-indigo-100 shadow-sm">
                <i className="fas fa-envelope mb-3 text-brand-secondary text-2xl"></i>
                <h3 className="font-bold text-gray-900 mb-2">每日摘要</h3>
                <p className="text-xs text-gray-500 mb-4">將最熱門的補丁資訊寄送到您的收件匣。</p>
                <input 
                    type="email" 
                    placeholder="電子信箱" 
                    className="w-full bg-white border border-gray-200 rounded px-3 py-2 text-sm text-gray-900 mb-2 focus:outline-none focus:border-brand-secondary transition"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button variant="primary" size="sm" className="w-full" onClick={handleSubscribe}>訂閱</Button>
            </div>
        </div>
      </div>
    </div>
  );
};