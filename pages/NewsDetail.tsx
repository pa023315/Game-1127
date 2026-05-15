import React, { useState } from 'react';
import { MOCK_NEWS } from '../types';

interface NewsDetailProps {
    onBack: () => void;
    onShowToast: (msg: string, type?: 'success' | 'info') => void;
}

export const NewsDetail: React.FC<NewsDetailProps> = ({ onBack, onShowToast }) => {
    const article = {
        title: '雙女主角陷落，「サイクロン」老舖社團PC黃遊NTR新作《N・T・Resortへようこそ》新作今夏推出',
        summary: '苦主還是親手將女友與叔母送入NTR渡假村的發展',
        date: '2026/5/5 13:50'
    };
    const [currentImage, setCurrentImage] = useState(0);
    const galleryImages = [
        'https://picsum.photos/id/10/800/450',
        'https://picsum.photos/id/11/800/450',
        'https://picsum.photos/id/12/800/450',
        'https://picsum.photos/id/13/800/450',
        'https://picsum.photos/id/14/800/450',
    ];

    const nextImage = () => setCurrentImage((p) => (p + 1) % galleryImages.length);
    const prevImage = () => setCurrentImage((p) => (p - 1 + galleryImages.length) % galleryImages.length);

    return (
        <div className="container mx-auto px-4 py-8 pt-24 min-h-screen bg-brand-mainBg">
            <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
                {/* Main Content Column */}
                <div className="flex-1 lg:w-2/3 bg-brand-card p-6 md:p-10 rounded-md border border-gray-200 shadow-sm">
                    {/* Breadcrumb */}
                    <div className="mb-6 flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-500">
                        <button onClick={onBack} className="hover:text-brand-primary transition">首頁</button>
                        <span>&gt;</span>
                        <button onClick={onBack} className="hover:text-brand-primary transition">新聞</button>
                        <span>&gt;</span>
                        <span className="hover:text-brand-primary cursor-pointer transition">PC</span>
                        <span>&gt;</span>
                        <span className="text-gray-900 font-bold max-w-[200px] truncate">{article.title}</span>
                    </div>

                    {/* Category Label */}
                    <div className="mb-4">
                        <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-sm">
                            PC遊戲
                        </span>
                    </div>

                    {/* Article Header */}
                    <header className="mb-8">
                        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            {article.title}
                        </h1>
                        <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
                            {article.summary}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm border-b border-gray-100 pb-6">
                            <span className="text-gray-500 font-mono flex items-center gap-1">
                                <i className="far fa-clock"></i> {article.date}
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {['NTR', '像素動畫', '橫向捲軸', '騎兵版', 'PC'].map(tag => (
                                    <span key={tag} className="border border-gray-200 text-gray-500 px-2 py-0.5 rounded text-xs hover:border-brand-primary hover:text-brand-primary cursor-pointer transition">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </header>

                    {/* Main Content Area */}
                    <article className="prose max-w-none prose-p:text-gray-800 prose-p:leading-relaxed prose-p:text-base md:prose-p:text-lg prose-headings:text-gray-900 prose-a:text-brand-primary mb-12">
                        <p>
                            長年推出漫改內容的老舖社團「サイクロン」（Cyclone），近期在 Ci-en 宣布即將帶來全新作品，《N・T・Resortへようこそ》——這回不再是漫改，而是一款雙女主角的 NTR 作品。
                        </p>
                        
                        <img src="https://picsum.photos/id/20/800/450" alt="Main screenshot" className="w-full rounded-md shadow-sm my-8" />
                        
                        <p>
                            帶著「サイクロン」招牌畫風，新作《N・T・Resortへようこそ》是一款以豪華渡假村為背景發展的故事。故事情節講述男主角「航平」與大學女友「唯華」，為了擁有兩人的回憶而一起來到渡假村打工。
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                            <img src="https://picsum.photos/id/21/400/250" alt="screenshot 1" className="w-full rounded-md border border-gray-200" />
                            <img src="https://picsum.photos/id/22/400/250" alt="screenshot 2" className="w-full rounded-md border border-gray-200" />
                        </div>

                        <p>
                            但是，在應徵過程，合格的只有唯華。事實上這是一家專為牛頭人店主面試的地方...
                        </p>
                        
                        <p>
                            由於擔心女友一個人去打工，男主航平跑去拜託自己的職業偵探阿姨「里麻」前去幫忙。接受委託的里麻在得知渡假村的地名後，腦海裡突然想起一個「不妙的傳聞」，答應潛入渡假村進行調查。就這樣，玩家將可體會唯華與里麻兩人的 NTR 探索冒險。
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                            <img src="https://picsum.photos/id/23/400/250" alt="screenshot 3" className="w-full rounded-md border border-gray-200" />
                            <img src="https://picsum.photos/id/24/400/250" alt="screenshot 4" className="w-full rounded-md border border-gray-200" />
                        </div>

                        <p>
                            根據目前釋出的開發畫面，《N・T・Resortへようこそ》是透過地圖選擇探索的 AVG 點擊玩法，劇情共有兩個環節，分別是「渡假村老闆攻略唯華」的店主路線，另一個則是「里麻的探索推理」的女偵探路線。
                        </p>

                        {/* Interactive Gallery */}
                        <div className="bg-gray-800 rounded-md p-4 my-8">
                            <div className="flex justify-between items-center text-white mb-4">
                                <span className="font-bold">圖集 (開發中畫面)</span>
                                <span className="text-sm font-mono">{currentImage + 1} / {galleryImages.length} &gt;</span>
                            </div>
                            <div className="relative aspect-video bg-black rounded flex items-center justify-center overflow-hidden">
                                <button onClick={prevImage} className="absolute left-2 w-10 h-10 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center z-10 transition">
                                    <i className="fas fa-chevron-left"></i>
                                </button>
                                <img src={galleryImages[currentImage]} alt="Gallery slide" className="w-full h-full object-contain" />
                                <button onClick={nextImage} className="absolute right-2 w-10 h-10 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center z-10 transition">
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                                
                                <div className="absolute bottom-4 flex justify-center gap-2 w-full">
                                    {galleryImages.map((_, idx) => (
                                        <div key={idx} className={`w-2 h-2 rounded-full ${currentImage === idx ? 'bg-white' : 'bg-white/40'}`}></div>
                                    ))}
                                </div>
                            </div>
                            <div className="text-center text-gray-400 text-xs mt-3">點擊圖片或左右切換瀏覽</div>
                        </div>

                        {/* Highlight Box */}
                        <div className="bg-[#FAF5FB] border-2 border-brand-secondary/30 rounded-md p-6 flex flex-col md:flex-row gap-6 items-center my-8 shadow-sm">
                            <div className="bg-brand-secondary/10 w-16 h-16 rounded-full flex flex-col items-center justify-center shrink-0 text-brand-secondary">
                                <i className="fas fa-bullhorn text-xl mb-1"></i>
                                <span className="text-[10px] font-bold">POINT</span>
                            </div>
                            <div className="flex-1 text-gray-700 text-base">
                                開發團隊透露，遊戲基本上是橫向捲軸的角色移動操作與點擊尋找，在特定的地點觸發事件的玩法為主。同時還會有些許點陣圖風格與懷舊復古空靈風格的 2D 像素動畫，帶來更加工口的氣息。
                            </div>
                            <div className="shrink-0">
                                <img src="https://picsum.photos/id/25/150/100" alt="Point detail" className="rounded border border-gray-200" />
                            </div>
                        </div>

                        <p>
                            另外，本作有基本 CG 有 80 張與差分，顯示兩位女主角帶來的場景應有相當飽足的份量。
                        </p>
                        <p>
                            「サイクロン」社團開發的 NTR 冒險 ADV 新作《N・T・Resortへようこそ》預計在 2026 年夏季於 PC 平台推出，售價與上市時間尚未公布。有興趣的紳士朋友可以關注，或追蹤「サイクロン」社團的 X 帳號隨時獲得最新消息。
                        </p>
                    </article>

                    {/* Editor Author Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-b border-gray-100 py-6 mb-8">
                        <div className="flex gap-4">
                            <img src="https://picsum.photos/id/64/60/60" alt="Author" className="w-14 h-14 rounded-full border border-gray-200" />
                            <div>
                                <h4 className="font-bold text-gray-400 text-xs mb-1">／作者／</h4>
                                <h3 className="font-bold text-gray-900 mb-2">站長 Hgamer</h3>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    資深遊戲人。半路上車老司機。喜好劇情向與動作射擊遊戲。廢墟探險愛好者，後來才發現是一樣會帶來各種衝擊與解脫，失志投身靈魂交融題材的發掘者。
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img src="https://picsum.photos/id/65/60/60" alt="Editor" className="w-14 h-14 rounded-full border border-gray-200" />
                            <div>
                                <h4 className="font-bold text-gray-400 text-xs mb-1">／編輯 / 紳士姐姐</h4>
                                <h3 className="font-bold text-gray-900 mb-2">小編 A</h3>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    關注各位遊戲宅的心路歷程，提供最新鮮的情報資訊，偶爾起鬨推薦各種怪作，但 NYKD 毫不留情。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer Tags */}
                    <div className="flex flex-wrap items-center gap-3 mb-8">
                        <span className="font-bold text-gray-900 text-sm">相關標籤：</span>
                        {['NTR', '像素動畫', '橫向捲軸', 'Cyclone', 'PC遊戲', '騎兵版'].map((tag, idx) => (
                            <span key={idx} className="border border-gray-200 text-brand-primary px-3 py-1 bg-gray-50 rounded text-xs hover:bg-brand-primary hover:text-white cursor-pointer transition">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Social Share Footer */}
                    <div className="flex items-center gap-3 bg-gray-50 p-4 rounded border border-gray-100">
                        <span className="text-sm font-bold text-gray-600 mr-2">分享本文：</span>
                        <button className="bg-black hover:bg-gray-800 text-white w-10 h-8 rounded text-sm transition flex items-center justify-center">
                            <i className="fab fa-x-twitter"></i>
                        </button>
                        <button className="bg-[#1877F2] hover:bg-[#166fe5] text-white px-4 h-8 rounded text-sm transition flex items-center gap-1 font-bold">
                            <i className="fab fa-facebook-f"></i> Like!
                        </button>
                        <button className="bg-[#06C755] hover:bg-[#05b34c] text-white w-10 h-8 rounded text-sm transition flex items-center justify-center">
                            <i className="fab fa-line"></i>
                        </button>
                        <button className="bg-[#00A4DE] hover:bg-[#0092c4] text-white w-10 h-8 rounded text-sm transition flex items-center justify-center font-bold">
                            B!
                        </button>
                    </div>

                </div>

                {/* Sidebar Column */}
                <aside className="w-full lg:w-1/3 space-y-8 flex-shrink-0">
                    
                    {/* Latest News */}
                    <div className="bg-brand-card p-6 rounded-md shadow-sm border border-gray-200">
                        <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
                            <h2 className="text-lg font-bold text-gray-900">最新新聞</h2>
                            <button className="text-xs text-gray-400 hover:text-brand-primary">更多 &gt;</button>
                        </div>
                        <div className="space-y-4">
                            {MOCK_NEWS.slice(0, 5).map(news => (
                                <div key={news.id} className="flex gap-3 group cursor-pointer" onClick={() => onShowToast('閱讀文章', 'info')}>
                                    <div className="w-24 h-16 shrink-0 rounded overflow-hidden">
                                        <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <h3 className="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-brand-primary transition">
                                            {news.title}
                                        </h3>
                                        <span className="text-xs text-gray-400 font-mono">{news.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Ad Box 1 */}
                    <div className="bg-brand-card p-2 rounded-md shadow-sm border border-gray-200">
                        <span className="text-[10px] text-gray-400 font-bold block mb-1 ml-1">廣告</span>
                        <div className="bg-black text-white h-[300px] flex flex-col justify-center items-center rounded pb-4 cursor-pointer relative overflow-hidden group">
                           <div className="absolute inset-0 bg-gradient-to-tr from-purple-900 to-black z-0"></div>
                           <div className="relative z-10 text-center px-4">
                               <img src="https://picsum.photos/id/111/200/100" alt="ROG" className="max-w-[150px] mx-auto mb-4 mix-blend-screen" />
                               <h3 className="text-2xl font-black italic mb-1 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">ROG STRIX</h3>
                               <p className="font-bold text-lg mb-6">XG27AQDMG</p>
                               <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition">
                                   LEARN MORE
                               </button>
                           </div>
                        </div>
                    </div>

                    {/* Popular Tags */}
                    <div className="bg-brand-card p-6 rounded-md shadow-sm border border-gray-200">
                        <h2 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">熱門標籤</h2>
                        <div className="flex flex-wrap gap-2">
                            {['NTR', '像素動畫', '橫向捲軸', '騎兵版', 'PC', 'PS5', 'Xbox Series X|S', 'Switch', '手遊', 'Steam', 'Epic Games', '獨立遊戲', '動作', 'RPG', '射擊', '生存', '開放世界', '恐怖', '策略', '模擬'].map(tag => (
                                <span key={tag} className="bg-white border border-gray-200 text-gray-500 hover:text-brand-primary px-3 py-1.5 rounded text-xs cursor-pointer transition shadow-sm hover:shadow">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Editor Picks */}
                    <div className="bg-brand-card p-6 rounded-md shadow-sm border border-gray-200">
                        <h2 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">編輯推薦</h2>
                        <div className="space-y-4">
                            <div className="relative h-40 rounded overflow-hidden group cursor-pointer" onClick={() => onShowToast('點擊推薦', 'info')}>
                                <img src="https://picsum.photos/id/40/400/200" alt="pic" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-3 left-3 right-3 text-white">
                                    <span className="text-[10px] font-bold bg-brand-primary px-1.5 py-0.5 rounded mb-1 inline-block">特集</span>
                                    <h3 className="font-bold text-sm line-clamp-2 shadow-black">2024年值得期待的 15 款 RPG 大作總整理！</h3>
                                </div>
                            </div>
                            
                            <div className="flex gap-3 group cursor-pointer" onClick={() => onShowToast('點擊推薦', 'info')}>
                                <div className="w-24 h-16 shrink-0 rounded overflow-hidden">
                                     <img src="https://picsum.photos/id/41/200/100" alt="pic" className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold text-brand-primary border border-brand-primary px-1 rounded inline-block mb-1">特集</span>
                                    <h4 className="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-brand-primary transition">從畫面到玩法全面進化！虛幻引擎 5 遊戲特集</h4>
                                </div>
                            </div>

                            <div className="flex gap-3 group cursor-pointer" onClick={() => onShowToast('點擊推薦', 'info')}>
                                <div className="w-24 h-16 shrink-0 rounded overflow-hidden">
                                     <img src="https://picsum.photos/id/42/200/100" alt="pic" className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold text-brand-primary border border-brand-primary px-1 rounded inline-block mb-1">特集</span>
                                    <h4 className="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-brand-primary transition">新手入坑指南：ARPG 遊戲推薦與入門技巧</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Ad Box 2 */}
                    <div className="bg-brand-card p-2 rounded-md shadow-sm border border-gray-200">
                        <span className="text-[10px] text-gray-400 font-bold block mb-1 ml-1">廣告</span>
                        <div className="bg-black text-white h-[250px] rounded overflow-hidden relative cursor-pointer group">
                             <img src="https://picsum.photos/id/43/400/250" alt="Ad" className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition" />
                             <div className="absolute top-4 left-4">
                                 <h3 className="font-bold text-xl mb-1">VECTOR 16 HX A13V</h3>
                                 <p className="text-xs text-gray-300">極速效能 戰場制霸</p>
                             </div>
                             <div className="absolute bottom-4 left-4">
                                <button className="border border-white hover:bg-white hover:text-black text-xs px-3 py-1 rounded transition">
                                    了解更多
                                </button>
                             </div>
                        </div>
                    </div>

                </aside>
            </div>
        </div>
    );
};

