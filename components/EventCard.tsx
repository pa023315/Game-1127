
import React from 'react';
import { EventItem } from '../types';
import { Button } from './Button';

interface EventCardProps {
  event: EventItem;
  onJoin: (id: string) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onJoin }) => {
  // Determine accent color based on type
  const getTypeColor = (type: EventItem['type']) => {
    switch (type) {
      case 'raffle': return 'bg-brand-accent';
      case 'freebie': return 'bg-brand-primary';
      case 'exclusive': return 'bg-purple-600';
      case 'challenge': return 'bg-blue-600';
      default: return 'bg-slate-600';
    }
  };

  const getButtonText = () => {
      switch(event.type) {
          case 'freebie': return '直接領取';
          case 'challenge': return '前往投稿';
          default: return '立即參加';
      }
  };

  const calculateProgress = () => {
    if (!event.maxParticipants || !event.participants) return 0;
    return Math.min((event.participants / event.maxParticipants) * 100, 100);
  };

  const progress = calculateProgress();

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden transition-all duration-300 hover:border-brand-primary/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:-translate-y-1 group cursor-pointer flex flex-col h-full">
      {/* Image Header */}
      <div className="relative h-48 overflow-hidden">
        <img 
            src={event.imageUrl} 
            alt={event.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />
        
        {/* Floating Tags */}
        <div className={`absolute top-3 left-3 ${getTypeColor(event.type)} text-white text-xs font-bold px-2 py-1 rounded shadow-lg flex items-center gap-1`}>
            {event.type === 'raffle' && <i className="fas fa-ticket-alt"></i>}
            {event.type === 'freebie' && <i className="fas fa-download"></i>}
            {event.type === 'exclusive' && <i className="fas fa-star"></i>}
            {event.typeLabel}
        </div>

        {event.timeLeft && (
            <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur text-white text-xs px-2 py-1 rounded border border-white/20 flex items-center gap-1">
                <i className="far fa-clock text-yellow-500"></i> {event.timeLeft}
            </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-primary transition-colors leading-tight">
            {event.title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
            {event.description}
        </p>
        
        <div className="mt-auto">
            {/* Stats / Requirement */}
            <div className="mb-4">
                {event.maxParticipants ? (
                     <div className="mb-2">
                        <div className="flex justify-between text-xs text-slate-500 mb-1">
                            <span>名額限制</span>
                            <span className={progress > 90 ? 'text-red-500' : 'text-brand-primary'}>
                                {event.participants} / {event.maxParticipants}
                            </span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-1.5">
                            <div 
                                className={`h-1.5 rounded-full ${progress > 90 ? 'bg-red-500' : 'bg-brand-primary'}`} 
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                     </div>
                ) : (
                    <div className="flex justify-between text-xs text-slate-500 mb-2 pb-2 border-b border-slate-800">
                        <span>已參加人數</span>
                        <span className="text-brand-primary">{event.participants?.toLocaleString()} 人</span>
                    </div>
                )}
                
                <div className="flex items-center gap-2 text-xs">
                    <span className="text-slate-500">資格:</span>
                    {event.requirement === 'VIP' ? (
                        <span className="text-brand-accent font-bold bg-brand-accent/10 px-1.5 py-0.5 rounded border border-brand-accent/20">VIP 會員</span>
                    ) : event.requirement === 'Member' ? (
                        <span className="text-brand-primary font-bold bg-brand-primary/10 px-1.5 py-0.5 rounded border border-brand-primary/20">註冊會員</span>
                    ) : (
                        <span className="text-slate-300 bg-slate-800 px-1.5 py-0.5 rounded">無限制</span>
                    )}
                </div>
            </div>

            <Button 
                variant={event.type === 'freebie' ? 'primary' : 'outline'} 
                size="md" 
                className={`w-full ${event.type === 'freebie' ? '' : 'group-hover:bg-slate-800 group-hover:text-white group-hover:border-slate-500'}`}
                onClick={() => onJoin(event.id)}
            >
                {getButtonText()}
            </Button>
        </div>
      </div>
    </div>
  );
};
