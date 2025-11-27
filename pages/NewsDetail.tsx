
import React from 'react';
import { MOCK_NEWS, MOCK_PATCHES } from '../types';
import { Button } from '../components/Button';

interface NewsDetailProps {
    onNavigate: (page: any) => void; // Using any for simplicity in circular dep scenario or string based nav
    onShowToast: (msg: string, type?: 'success' | 'info') => void;
    onBack: () => void;
}

export const NewsDetail: React.FC<NewsDetailProps> = ({ onNavigate, onShowToast, onBack }) => {
    // Mocking specific article data
    const article = {
        title: '《電馭叛客 2077》「夜之城無修版」Mod v4.0 深度評測：這才是完整的體驗',
        author: '編輯長 AKI',
        authorRole: 'SENIOR EDITOR',
        date: '2023-10-27',
        views: '12,450',
        category: '深度評測',
        coverUrl: 'https://picsum.photos/id/122/1200/600',
        authorAvatar: 'https://picsum.photos/id/64/100/100'
    };

    const relatedNews = MOCK_NEWS.slice(1, 4);

    return (
        <div className="container mx-auto px-4 py-8 animate-fade-in min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                {/* Main Content (Left) */}
                <main className="lg:col-span-8">
                    
                    {/* Breadcrumb */}
                    <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                        <button onClick={onBack} className="hover:text-brand-primary transition">首頁</button> 
                        <span>/</span>
                        <button onClick={onBack} className="hover:text-brand-primary transition">新聞情報</button> 
                        <span>/</span>
                        <span className="text-slate-300">評測文章</span>
                    </nav>

                    {/* Article Header */}
                    <header className="mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                            {article.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 border-b border-slate-800 pb-6">
                            <div className="flex items-center gap-2">
                                <img src={article.authorAvatar} className="w-8 h-8 rounded-full border border-slate-600" alt="author"/>
                                <span className="text-white font-medium">{article.author}</span>
                            </div>
                            <span><i className="far fa-clock mr-1"></i> {article.date}</span>
                            <span><i className="far fa-eye mr-1"></i> {article.views} 次瀏覽</span>
                            <span className="bg-slate-800 text-brand-primary px-2 py-0.5 rounded text-xs border border-slate-700 ml-auto md:ml-0">
                                {article.category}
                            </span>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="mb-8 rounded-xl overflow-hidden shadow-2xl border border-slate-800">
                        <img src={article.coverUrl} className="w-full h-auto object-cover" alt="Article Cover" />
                    </div>

                    {/* Article Body */}
                    <article className="text-slate-300 leading-relaxed text-lg space-y-6">
                        <p>
                            距離 <span className="text-brand-primary font-bold underline decoration-dotted underline-offset-4 cursor-pointer hover:bg-brand-primary/10 transition">Cyberpunk 2077</span> 發售已經過去了三年，雖然官方持續修復 Bug，但對於許多紳士玩家來說，夜之城始終缺少了一點「自由度」。
                        </p>
                        <p>
                            今天我們要介紹的是由社群大神製作的「夜之城無修版 (Uncensored City)」v4.0。這個模組不僅解鎖了所有羅曼史選項，更重製了遊戲中的物理碰撞系統。
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4 border-l-4 border-brand-primary pl-4">物理效果的全面革新</h2>
                        <p>
                            在 v4.0 版本中，開發者重寫了布料運算邏輯。現在，當你操作 V 走在街頭時，衣物的擺動更加自然。更重要的是，該模組完全相容於 <span className="text-brand-primary font-bold underline decoration-dotted underline-offset-4 cursor-pointer hover:bg-brand-primary/10 transition">Phantom Liberty (自由幻局)</span> 資料片。
                        </p>

                        {/* CTA Block */}
                        <div className="my-8 bg-slate-900 border border-brand-primary/30 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                            <div>
                                <h3 className="text-white font-bold text-lg mb-1">想體驗無修版的夜之城？</h3>
                                <p className="text-sm text-slate-400">本站已收錄 v4.0 最新漢化補丁，會員免費下載。</p>
                            </div>
                            <Button 
                                variant="primary" 
                                size="md" 
                                icon="fas fa-download" 
                                className="whitespace-nowrap"
                                onClick={() => onShowToast('正在跳轉至下載頁面...', 'success')}
                            >
                                前往補丁頁面
                            </Button>
                        </div>

                        <h2 className="text-2xl font-bold text-white mt-8 mb-4 border-l-4 border-brand-primary pl-4">漢化品質與相容性</h2>
                        <p>
                            許多玩家擔心安裝此類模組會導致存檔損壞。經過我們 50 小時的實測，除了在特定過場動畫偶爾會有穿模現象外，整體穩定性極高。若是您有安裝 <span className="text-brand-primary font-bold underline decoration-dotted underline-offset-4 cursor-pointer hover:bg-brand-primary/10 transition">Nier: Automata</span> 的相關模組，建議先停用以避免衝突。
                        </p>
                        
                        <p>
                            總結來說，這是一款讓遊戲體驗昇華的必裝模組。
                        </p>
                    </article>

                    {/* Tags */}
                    <div className="mt-8 mb-12 flex flex-wrap gap-2 pt-8 border-t border-slate-800">
                        {['#Cyberpunk2077', '#Mod評測', '#物理優化', '#紳士模組', '#CDPR'].map(tag => (
                            <button key={tag} className="text-sm bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded transition border border-slate-700">
                                {tag}
                            </button>
                        ))}
                    </div>

                    {/* Author Box */}
                    <div className="bg-slate-900 rounded-xl p-6 border border-slate-800 flex flex-col md:flex-row items-center md:items-start gap-6 mb-12">
                        <div className="shrink-0">
                            <img src={article.authorAvatar} className="w-20 h-20 rounded-full border-2 border-brand-primary p-1" alt="Author" />
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-white font-bold text-lg mb-1">{article.author}</h3>
                            <div className="text-xs text-brand-primary font-bold uppercase tracking-wider mb-2">{article.authorRole}</div>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                專注於歐美 RPG 與日系 Galgame 的深度玩家。致力於挖掘所有被隱藏的遊戲內容。如果你發現了什麼好東西，歡迎私訊我。
                            </p>
                            <div className="flex justify-center md:justify-start gap-3">
                                <button className="text-slate-500 hover:text-white transition"><i className="fab fa-twitter"></i></button>
                                <button className="text-slate-500 hover:text-white transition"><i className="fab fa-discord"></i></button>
                                <button className="text-slate-500 hover:text-white transition"><i className="fas fa-envelope"></i></button>
                            </div>
                        </div>
                    </div>

                    {/* Related Posts */}
                    <section>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-1 h-6 bg-brand-accent rounded-full"></div>
                            <h3 className="text-xl font-bold text-white">延伸閱讀</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedNews.map((news) => (
                                <div key={news.id} className="group block cursor-pointer">
                                    <div className="aspect-video rounded-lg overflow-hidden mb-3 border border-slate-800">
                                        <img src={news.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt={news.title} />
                                    </div>
                                    <h4 className="text-white font-bold text-sm line-clamp-2 group-hover:text-brand-primary transition leading-snug">
                                        {news.title}
                                    </h4>
                                    <div className="text-xs text-slate-500 mt-1">{news.date}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>

                {/* Sidebar (Right) */}
                <aside className="hidden lg:block lg:col-span-4 space-y-8">
                    
                    {/* Hot Patches Widget */}
                    <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 sticky top-24">
                        <h3 className="font-bold text-white text-lg mb-4 flex items-center border-b border-slate-800 pb-2">
                            <i className="fas fa-fire text-orange-500 mr-2"></i> 本週熱門補丁
                        </h3>
                        <div className="space-y-4">
                            {MOCK_PATCHES.slice(0, 5).map(patch => (
                                <div key={patch.id} className="flex gap-3 group cursor-pointer hover:bg-slate-800/50 p-1 rounded transition">
                                    <img src={patch.imageUrl} className="w-16 h-16 rounded object-cover border border-slate-700" alt={patch.gameTitle} />
                                    <div className="flex-1">
                                        <h4 className="text-sm font-bold text-white group-hover:text-brand-primary transition line-clamp-1">{patch.gameTitle}</h4>
                                        <div className="text-xs text-slate-500 mt-1">下載量: {patch.downloads.toLocaleString()}</div>
                                        <span className="text-[10px] bg-slate-800 text-slate-400 border border-slate-700 px-1.5 rounded mt-1 inline-block font-mono">
                                            {patch.version}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Newsletter Widget */}
                        <div className="mt-8 pt-8 border-t border-slate-800">
                            <h3 className="font-bold text-white mb-2">訂閱更新通知</h3>
                            <p className="text-xs text-slate-400 mb-4">絕不錯過任何一款大作的漢化發布。</p>
                            <div className="flex gap-2">
                                <input type="email" placeholder="Email" className="bg-slate-950 border border-slate-700 text-white text-sm rounded px-3 py-2 w-full outline-none focus:border-brand-primary transition" />
                                <button className="bg-brand-primary hover:bg-emerald-500 text-slate-900 font-bold px-3 py-2 rounded text-sm transition" onClick={() => onShowToast('訂閱成功！', 'success')}>
                                    <i className="fas fa-paper-plane"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                </aside>

            </div>
        </div>
    );
};
