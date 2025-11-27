
import React from 'react';
import { Button } from '../components/Button';
import { MOCK_GAME_DETAIL, MOCK_NEWS } from '../types';

interface GamePatchDetailProps {
    onBack: () => void;
    onShowToast: (msg: string, type?: 'success' | 'info') => void;
}

export const GamePatchDetail: React.FC<GamePatchDetailProps> = ({ onBack, onShowToast }) => {
  const game = MOCK_GAME_DETAIL;
  const relatedNews = MOCK_NEWS.slice(0, 3);

  const copyPath = () => {
      navigator.clipboard.writeText(game.patch.installPath);
      onShowToast('安裝路徑已複製到剪貼簿', 'info');
  };

  return (
    <div className="animate-fade-in min-h-screen pb-12">
        
        {/* Sticky Sub-nav */}
        <nav className="sticky top-16 z-40 bg-slate-900/90 backdrop-blur border-b border-white/5 py-3 shadow-lg">
             <div className="container mx-auto px-4 max-w-5xl flex items-center gap-2 text-sm">
                <button onClick={onBack} className="text-slate-500 hover:text-white transition">補丁資料庫</button>
                <span className="text-slate-600">/</span>
                <span className="text-white font-bold">{game.title}</span>
            </div>
        </nav>

        <main className="container mx-auto px-4 py-8 max-w-5xl">
            
            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">{game.title}</h1>
                    <h2 className="text-xl text-slate-400 font-medium">{game.titleEn}</h2>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" icon="far fa-bell" onClick={() => onShowToast('已加入追蹤', 'success')}>
                        加入追蹤
                    </Button>
                    <Button variant="ghost" icon="fas fa-share-alt" onClick={() => onShowToast('連結已複製', 'info')}>
                        分享
                    </Button>
                </div>
            </header>

            {/* Cover Image */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-800 mb-8 group">
                <img src={game.coverUrl} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" alt="Cover" />
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded border border-white/10 shadow-lg">
                    {game.developer}
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Metadata Bar (Horizontal) */}
            <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 mb-8 grid grid-cols-1 md:grid-cols-3 gap-6 backdrop-blur-sm">
                <div className="flex flex-col">
                    <span className="text-xs text-slate-500 uppercase font-bold mb-1">開發商 / 發行商</span>
                    <span className="text-white font-medium flex items-center gap-2">
                        {game.developer} <i className="fas fa-check-circle text-brand-primary text-xs" title="Verified"></i>
                    </span>
                </div>
                <div className="flex flex-col border-t md:border-t-0 md:border-l border-slate-700 pt-4 md:pt-0 md:pl-6">
                    <span className="text-xs text-slate-500 uppercase font-bold mb-1">原始發售日</span>
                    <span className="text-white font-medium font-mono">{game.releaseDate}</span>
                </div>
                <div className="flex flex-col border-t md:border-t-0 md:border-l border-slate-700 pt-4 md:pt-0 md:pl-6">
                    <span className="text-xs text-slate-500 uppercase font-bold mb-2">熱門標籤</span>
                    <div className="flex flex-wrap gap-2">
                        {game.tags.map(tag => (
                            <span key={tag} className="bg-slate-800 text-slate-300 text-xs px-2 py-1 rounded border border-slate-700 hover:border-brand-primary hover:text-brand-primary transition cursor-pointer">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Description & Purchase */}
            <section className="mb-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <h3 className="text-xl font-bold text-white mb-4 border-l-4 border-brand-primary pl-3">遊戲簡介</h3>
                    <div className="text-slate-300 leading-relaxed space-y-4">
                        <p>{game.description}</p>
                        <p>本作融合了動作與 RPG 元素，在開放世界中展開流暢而爽快的戰鬥。玩家可以自由切換近戰武器與遠程攻擊，體驗高速的戰鬥快感。隨著劇情的推進，玩家將揭開隱藏在這個世界背後的殘酷真相。</p>
                    </div>
                </div>
                <div className="lg:col-span-1">
                     <h3 className="text-sm font-bold text-slate-500 uppercase mb-3">購買渠道</h3>
                     <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <span className="text-slate-400">Steam 價格</span>
                            <span className="text-xl font-bold text-white">{game.price}</span>
                        </div>
                        <a href="#" className="w-full bg-[#1b2838] hover:bg-[#2a475e] text-white font-bold py-3 rounded flex items-center justify-center gap-2 transition">
                            <i className="fab fa-steam"></i> 前往商店頁面
                        </a>
                        <div className="text-xs text-slate-500 text-center border-t border-slate-800 pt-3">
                            支援平台: Windows
                        </div>
                     </div>
                </div>
            </section>

            {/* Patch Module (Distinct Card) */}
            <section id="patch-download" className="mb-16">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="h-px bg-slate-800 flex-grow"></div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <i className="fas fa-wrench text-brand-primary"></i> 補丁資源
                    </h3>
                    <div className="h-px bg-slate-800 flex-grow"></div>
                </div>

                <div className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-brand-accent"></div>
                    
                    {/* Part 1: Header Info */}
                    <div className="bg-slate-950/50 p-6 md:p-8 border-b border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6">
                         <div>
                            <span className="text-xs text-slate-500 block mb-1 uppercase tracking-wider">補丁標題</span>
                            <span className="text-white font-bold text-lg leading-tight">完美漢化去聖光版</span>
                        </div>
                        <div>
                            <span className="text-xs text-slate-500 block mb-1 uppercase tracking-wider">版本 Version</span>
                            <span className="font-mono text-brand-primary font-bold bg-brand-primary/10 px-2 py-0.5 rounded inline-block">
                                {game.patch.version}
                            </span>
                        </div>
                        <div>
                            <span className="text-xs text-slate-500 block mb-1 uppercase tracking-wider">檔案大小</span>
                            <span className="text-white font-mono">{game.patch.size}</span>
                        </div>
                         <div>
                            <span className="text-xs text-slate-500 block mb-1 uppercase tracking-wider">更新日期</span>
                            <span className="text-white font-mono">{game.patch.updateDate}</span>
                        </div>
                    </div>

                    {/* Part 2: Body Details */}
                    <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="space-y-6">
                             <div>
                                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                                    <i className="fas fa-info-circle text-slate-400"></i> 補丁介紹
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    本補丁整合了最新的繁體中文翻譯（修正了 DLC 部分亂碼），並移除了過場動畫與戰鬥中的聖光遮擋效果。同時包含高清材質包，建議顯存 6GB 以上開啟。
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {game.patch.features.map((feature, i) => (
                                        <span key={i} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700 flex items-center gap-1">
                                            <i className="fas fa-check text-brand-primary text-[10px]"></i> {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>

                             <div>
                                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                                    <i className="fas fa-list-ul text-slate-400"></i> 更新日誌
                                </h4>
                                <ul className="space-y-2">
                                    {game.patch.changelog.map((log, i) => (
                                        <li key={i} className="text-xs text-slate-400 flex items-start gap-2 bg-slate-950/50 p-2 rounded border border-slate-800/50">
                                            <span className="text-brand-accent mt-0.5">•</span> {log}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                                    <i className="fas fa-terminal text-slate-400"></i> 安裝說明
                                </h4>
                                <div className="space-y-3 font-mono text-xs">
                                    <div className="flex gap-3">
                                        <span className="bg-slate-800 text-slate-400 w-5 h-5 rounded flex items-center justify-center flex-shrink-0 border border-slate-700">1</span>
                                        <p className="text-slate-300 pt-0.5">下載並解壓縮檔案。</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="bg-slate-800 text-slate-400 w-5 h-5 rounded flex items-center justify-center flex-shrink-0 border border-slate-700">2</span>
                                        <p className="text-slate-300 pt-0.5">將 <span className="text-brand-primary bg-slate-800 px-1 rounded">data</span> 資料夾複製到遊戲根目錄覆蓋。</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="bg-slate-800 text-slate-400 w-5 h-5 rounded flex items-center justify-center flex-shrink-0 border border-slate-700">3</span>
                                        <div className="w-full">
                                            <p className="text-slate-300 mb-2 pt-0.5">預設路徑參考：</p>
                                            <div className="flex items-center justify-between bg-black/40 border border-slate-700 rounded px-3 py-2 text-slate-400">
                                                <span className="truncate mr-2 select-all">{game.patch.installPath}</span>
                                                <button onClick={copyPath} className="text-slate-500 hover:text-white transition"><i className="far fa-copy"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Part 3: Download Footer */}
                    <div className="bg-slate-950 p-8 border-t border-slate-800 flex flex-col items-center justify-center text-center">
                        <button 
                            onClick={() => onShowToast('開始下載補丁檔案...', 'success')}
                            className="group w-full md:w-2/3 max-w-lg bg-gradient-to-r from-brand-primary to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-brand-darker font-black text-xl py-5 rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] transition transform hover:-translate-y-1 mb-4"
                        >
                            <span className="flex items-center justify-center gap-3">
                                <i className="fas fa-download text-2xl group-hover:animate-bounce"></i> 
                                下載補丁檔案
                            </span>
                        </button>
                        
                        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
                            <span><i className="fas fa-file-archive mr-1"></i> ZIP</span>
                            <span><i className="fas fa-shield-alt mr-1 text-brand-primary"></i> 無毒安全</span>
                            <span><i className="fas fa-fingerprint mr-1"></i> MD5: 8a7d...2e19</span>
                        </div>

                         <div className="mt-6 bg-purple-900/10 border border-purple-500/20 rounded-lg px-4 py-2 text-xs text-purple-300 flex items-center gap-2 animate-pulse">
                            <i className="fas fa-crown text-brand-accent"></i>
                            <span>加入白金會員，解鎖 Google Drive 高速下載通道。</span>
                        </div>
                    </div>

                </div>
            </section>

             {/* Related News */}
             <section>
                <h3 className="text-xl font-bold text-white mb-6 border-l-4 border-slate-700 pl-4">相關內容</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedNews.map((news) => (
                        <div key={news.id} className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:border-slate-600 transition group cursor-pointer" onClick={() => onShowToast('前往文章...', 'info')}>
                            <div className="h-40 overflow-hidden relative">
                                <img src={news.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt={news.title} />
                                <span className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur border border-white/10">
                                    {news.category}
                                </span>
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-white text-sm mb-2 line-clamp-2 group-hover:text-brand-primary transition">{news.title}</h4>
                                <div className="flex items-center justify-between text-xs text-slate-500">
                                    <span>{news.date}</span>
                                    <i className="fas fa-chevron-right opacity-0 group-hover:opacity-100 transition-opacity"></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    </div>
  );
};
