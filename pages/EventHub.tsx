
import React, { useState } from 'react';
import { MOCK_EVENTS, EventItem } from '../types';
import { EventCard } from '../components/EventCard';
import { StickyAuthBar } from '../components/StickyAuthBar';
import { Button } from '../components/Button';

interface EventHubProps {
    onShowToast: (msg: string, type?: 'success' | 'info') => void;
}

export const EventHub: React.FC<EventHubProps> = ({ onShowToast }) => {
  const [filter, setFilter] = useState<'all' | 'raffle' | 'freebie' | 'exclusive'>('all');
  
  const filteredEvents = filter === 'all' 
    ? MOCK_EVENTS 
    : MOCK_EVENTS.filter(e => e.type === filter);

  const handleJoinEvent = (id: string) => {
      onShowToast('請先登入會員以參加此活動。', 'info');
  };

  return (
    <div className="min-h-screen bg-brand-darker pb-24">
        
        {/* Hero Section */}
        <section className="relative py-20 bg-[url('https://picsum.photos/id/45/1920/600')] bg-cover bg-center border-b border-slate-800">
            <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/90 to-transparent"></div>
            <div className="absolute inset-0 bg-brand-darker/60"></div>
            
            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="inline-block mb-4 animate-fade-in-up">
                    <span className="bg-brand-accent/20 text-brand-accent border border-brand-accent/50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(217,70,239,0.3)]">
                        Membership Benefits
                    </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-6 animate-fade-in-up">
                    <i className="fas fa-gift text-brand-primary mr-3"></i> 
                    會員福利活動中心
                </h1>
                <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed mb-8 animate-fade-in-up">
                    每週更新獨家好禮！登入會員即可免費參加抽獎、領取限定補丁或兌換 Steam 序號。<br/>
                    <span className="text-slate-500 text-sm">我們承諾：所有抽獎活動皆公開透明。</span>
                </p>

                {/* Filter Tabs */}
                <div className="flex justify-center gap-3 flex-wrap animate-fade-in-up">
                    {[
                        { id: 'all', label: '全部活動' },
                        { id: 'raffle', label: '🔥 限時抽獎' },
                        { id: 'freebie', label: '🎁 免費領取' },
                        { id: 'exclusive', label: '💎 會員限定' },
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setFilter(tab.id as any)}
                            className={`px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 border ${
                                filter === tab.id 
                                ? 'bg-brand-primary text-brand-darker border-brand-primary shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                                : 'bg-slate-900/50 text-slate-400 border-slate-700 hover:text-white hover:border-slate-500'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>
        </section>

        {/* Event Grid Section */}
        <section className="container mx-auto px-4 -mt-10 relative z-20 animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map(event => (
                    <EventCard 
                        key={event.id} 
                        event={event} 
                        onJoin={handleJoinEvent} 
                    />
                ))}
            </div>

            {filteredEvents.length === 0 && (
                <div className="text-center py-20 text-slate-500 bg-slate-900/50 rounded-xl border border-slate-800 border-dashed">
                    <i className="far fa-folder-open text-4xl mb-4"></i>
                    <p>目前沒有此類型的活動。</p>
                </div>
            )}
        </section>

        {/* Past Events / Trust Signal (Optional) */}
        <section className="container mx-auto px-4 py-16">
            <h3 className="text-slate-500 font-bold uppercase text-xs tracking-wider mb-6 text-center">已結束的熱門活動</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50 hover:opacity-100 transition duration-500">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-slate-900 p-4 rounded border border-slate-800 grayscale hover:grayscale-0 transition">
                        <div className="text-xs text-slate-500 mb-2">已截止</div>
                        <div className="font-bold text-slate-300 text-sm mb-1">《惡靈古堡 4》重製版序號</div>
                        <div className="text-xs text-brand-primary">中獎者: Player_{8293+i}</div>
                    </div>
                ))}
            </div>
        </section>

        <StickyAuthBar 
            onLogin={() => onShowToast('開啟登入視窗...', 'info')}
            onRegister={() => onShowToast('跳轉至註冊頁面...', 'info')}
        />
    </div>
  );
};
