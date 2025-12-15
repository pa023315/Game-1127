
import React from 'react';

export const AdBanner: React.FC = () => {
  return (
    <div className="w-full my-8 animate-fade-in relative z-10 px-2 md:px-0">
      <a 
        href="https://www.dp.toys/" 
        target="_blank" 
        rel="noreferrer"
        className="block relative group overflow-hidden rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(245,49,127,0.4)] transition-all duration-300 border border-white/5"
      >
        <img 
            src="https://i.meee.com.tw/c06RVA3.webp" 
            alt="DP Toys Promotion" 
            className="w-full h-auto object-cover group-hover:brightness-110 group-hover:scale-[1.01] transition-all duration-500"
        />
        
        {/* Shine Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
        
        {/* Optional Label */}
        <div className="absolute bottom-2 right-2 bg-black/50 text-[10px] text-slate-400 px-1 rounded backdrop-blur-sm">
            AD
        </div>
      </a>
      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};
