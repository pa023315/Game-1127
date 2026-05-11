import React from 'react';

interface ReviewFeedProps {
    onShowToast: (msg: string, type?: "success" | "info") => void;
    onNavigateDetail: () => void;
}

const REVIEW_DATA = [
    {
        id: 'r1',
        title: '缺乏職場元素的《職場幻想》 誠意十足的內容量被糟糕的遊玩節奏拖垮',
        author: '紳士玩家',
        date: '2026/3/12',
        summary: '《職場幻想》是一款生活模擬角色扮演遊戲，玩法概念近似於「鄉村狂想曲」，玩家將扮演一名新入職場的實習生，來到一座海濱小鎮，與此地的女孩子們邂逅，在此成為人間自走砲(?)的故事。（基於網站尺度考量，以下圖片會部分打碼，《職場幻想》steam 版本是無碼的，也不需要另外安裝 Patch。）《職場幻想》遊戲介紹本作主要的遊戲系...',
        imageUrl: 'https://i.meee.com.tw/2Yf8E2x.jpg'
    },
    {
        id: 'r2',
        title: '難以拒絕的NTR邀請 《鄰家的人妻》在綠帽夫身旁忘我地中出',
        author: '紳士玩家',
        date: '2026/3/9',
        summary: '《鄰家的人妻》是款具有精美動畫、內容短小精緻的拔作，劇情直接不拖戲，很快就直奔色色主題，與其說是遊戲，更像是在欣賞一部帶點互動的色色動畫片。（基於網站尺度考量，以下圖片會部分打碼，《鄰家的人妻》steam 版本是無碼的，也不需要另外安裝 Patch。）《鄰家的人妻》值得買嗎？ -《鄰家的人妻》遊戲優點用製作精良的日式動...',
        imageUrl: 'https://i.imghippo.com/files/Bf3460jMw.png'
    },
    {
        id: 'r3',
        title: '《Last Evil》打牌比色色有趣 在小黃遊中尋找「殺戮尖塔」的卡牌體驗是否搞錯了什麼？',
        author: '紳士玩家',
        date: '2026/3/5',
        summary: '《Last Evil》是款 R-18 Rogue-like 卡牌遊戲，人稱黃遊界的《殺戮尖塔》（Slay the Spire）。你將控制一名女媚魔闖蕩地下城，看是要擊敗敵人並吸取他們的精氣以為己用、又或者是被敵人打倒慘遭凌辱，都將由你手上的卡牌來決定！——是的，這是款無論是勝利或失敗，都離不開色色的卡牌遊戲。（基於...',
        imageUrl: 'https://i.meee.com.tw/c06RVA3.webp'
    }
];

const HOT_ARTICLES = [
    { id: 1, title: '難以拒絕的NTR邀請 《鄰家的人妻》在綠帽夫身旁忘我地中出', date: '2026/3/9' },
    { id: 2, title: '《新生也瘋狂》第1季 人設劇情用心、3D建模頂級的歐美風格黃遊', date: '2026/2/19' },
    { id: 3, title: '《Last Evil》打牌比色色有趣 在小黃遊中尋找「殺戮尖塔」的卡牌體驗...', date: '2026/3/5' },
    { id: 4, title: '異種族美女我全都要！《Aurelia》內容豐富的歐美像素風後宮黃遊', date: '2026/2/23' },
    { id: 5, title: '缺乏職場元素的《職場幻想》 誠意十足的內容量被糟糕的遊玩節奏拖...', date: '2026/3/12' },
    { id: 6, title: '經典神作《妹相隨～黑白世界的繽紛冒險～》把妹妹養成妹魔的過...', date: '2026/3/2' },
    { id: 7, title: '決鬥吧！《終末的死鬥場少女》敗者直接公開凌辱，當一輩子性奴', date: '2026/2/27' },
];

export const ReviewFeed: React.FC<ReviewFeedProps> = ({ onNavigateDetail }) => {
    return (
        <div className="bg-[#121212] min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    
                    {/* Left Column */}
                    <div className="lg:col-span-8">
                        {/* Header Page Title */}
                        <div className="flex items-start gap-4 mb-10 border-b border-white/5 pb-6">
                            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#cdab53]">
                                <i className="fas fa-file-alt text-2xl"></i>
                            </div>
                            <div>
                                <h1 className="text-3xl font-black text-white tracking-widest" style={{ fontFamily: '"Noto Sans TC", sans-serif' }}>評測列表</h1>
                                <p className="text-sm text-slate-400 mt-1 font-medium">共 {REVIEW_DATA.length} 篇評測</p>
                            </div>
                        </div>

                        {/* Article List */}
                        <div className="space-y-8">
                            {REVIEW_DATA.map((article, idx) => (
                                <div key={article.id} className={`flex flex-col md:flex-row gap-6 lg:gap-8 hover:bg-white/5 p-4 -ml-4 rounded-xl transition duration-300 cursor-pointer ${idx !== REVIEW_DATA.length - 1 ? 'border-b border-white/5 pb-12' : ''}`} onClick={onNavigateDetail}>
                                    
                                    {/* Thumbnail */}
                                    <div className="w-full md:w-72 lg:w-80 shrink-0">
                                        <div className="aspect-[16/9] rounded-xl overflow-hidden bg-black border border-white/5 relative">
                                            <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover transition duration-500 hover:scale-105" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col justify-center flex-1 py-1">
                                        <h2 className="text-xl lg:text-[22px] font-bold text-white leading-snug mb-3 hover:text-[#cdab53] transition" style={{ fontFamily: '"Noto Sans TC", sans-serif' }}>
                                            {article.title}
                                        </h2>

                                        <div className="flex items-center gap-4 text-[13px] text-slate-400 mb-4 font-medium">
                                            <span className="flex items-center gap-1.5"><i className="far fa-user"></i> {article.author}</span>
                                            <span className="text-slate-600">|</span>
                                            <span className="flex items-center gap-1.5"><i className="far fa-calendar-alt"></i> {article.date}</span>
                                        </div>

                                        <p className="text-[15px] text-slate-400 leading-relaxed mb-4 line-clamp-3">
                                            {article.summary}
                                        </p>

                                        <div className="mt-auto">
                                            <button className="text-[#cdab53] hover:text-white transition font-bold text-sm tracking-wide flex items-center gap-1">
                                                閱讀更多 <i className="fas fa-chevron-right text-[10px] ml-1"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:col-span-4 mt-10 lg:mt-0">
                        {/* Search Bar */}
                        <div className="mb-10">
                            <div className="relative">
                                <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"></i>
                                <input 
                                    type="text" 
                                    placeholder="搜尋新聞..." 
                                    className="w-full bg-[#18181b] border border-white/10 text-white text-[15px] rounded-lg pl-11 pr-4 py-3 outline-none focus:border-[#cdab53] transition" 
                                />
                            </div>
                        </div>

                        {/* Hot Articles */}
                        <div>
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <i className="fas fa-fire text-[#cdab53]"></i> 熱門文章
                            </h3>
                            <div className="space-y-6">
                                {HOT_ARTICLES.map(item => (
                                    <div key={item.id} className="flex gap-4 group cursor-pointer" onClick={onNavigateDetail}>
                                        <div className="w-6 h-6 shrink-0 rounded bg-[#cdab53]/20 text-[#cdab53] font-bold flex items-center justify-center text-[13px]">
                                            {item.id}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h4 className="text-[15px] font-bold text-slate-200 group-hover:text-[#cdab53] transition leading-snug line-clamp-2 mb-1">{item.title}</h4>
                                            <p className="text-[13px] text-slate-500 font-mono">{item.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

