
import React from 'react';

const PROMOS = [
  { id: 1, image: 'https://i.meee.com.tw/SOMl9Fs.jpg', link: '#' },
  { id: 2, image: 'https://i.meee.com.tw/abwNbM5.jpg', link: '#' },
  { id: 3, image: 'https://i.meee.com.tw/sC1RzJj.png', link: '#' },
  { id: 4, image: 'https://i.meee.com.tw/VTCnH24.png', link: '#' },
];

export const PromoGrid: React.FC = () => {
  return (
    <div className="w-full my-8 animate-fade-in">
       {/* 
          Grid Layout:
          - Mobile: 1 column (grid-cols-1)
          - Tablet: 2 columns (md:grid-cols-2)
          - Desktop: 4 columns (lg:grid-cols-4)
       */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {PROMOS.map((item) => (
             <a 
               key={item.id} 
               href={item.link}
               className="group block relative rounded-xl overflow-hidden shadow-lg border border-white/5 cursor-pointer bg-brand-surface"
             >
                {/* Image Container */}
                <div className="relative aspect-[16/7] md:aspect-video lg:aspect-[4/3] w-full overflow-hidden">
                    <img 
                       src={item.image} 
                       alt={`Promo ${item.id}`}
                       className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                    />
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay"></div>
                    
                    {/* Shadow overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                </div>
             </a>
          ))}
       </div>
    </div>
  );
};
