import React from 'react';

const PROMOS = [
  { id: 1, image: 'https://i.meee.com.tw/SOMl9Fs.jpg', title: '限定活動', subtitle: '雀姬聯動' },
  { id: 2, image: 'https://i.meee.com.tw/abwNbM5.jpg', title: '大型更新', subtitle: '夏色四葉草' },
  { id: 3, image: 'https://i.meee.com.tw/sC1RzJj.png', title: '漢化發布', subtitle: '無人島生存' },
  { id: 4, image: 'https://i.meee.com.tw/VTCnH24.png', title: '畫質增強', subtitle: '地下偶像' },
];

export const PromoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-up">
       {PROMOS.map((item) => (
          <a key={item.id} href="#" className="group relative h-28 md:h-36 rounded-md overflow-hidden border border-gray-100 shadow-sm hover:border-brand-primary/50 transition duration-300">
             <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500 group-hover:brightness-50" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
             <div className="absolute bottom-0 left-0 p-4">
                 <div className="text-[10px] text-brand-primary font-bold tracking-widest uppercase mb-1 opacity-80">{item.title}</div>
                 <div className="text-white font-bold text-lg leading-none group-hover:text-brand-accent transition">{item.subtitle}</div>
             </div>
          </a>
       ))}
    </div>
  );
};