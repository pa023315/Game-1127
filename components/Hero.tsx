import React, { useState, useEffect } from 'react';

const SLIDES = [
  {
    id: 1,
    image: 'https://i.meee.com.tw/SOMl9Fs.jpg',
    category: '專題報導',
    title: '雙女主陷陣！\n《N・T・Resortへようこそ》',
    subtitle: '老舖社團 NTR 新作今夏推出',
    color: 'bg-brand-primary'
  },
  {
    id: 2,
    image: 'https://i.meee.com.tw/abwNbM5.jpg',
    category: '重大更新',
    title: '夏色四葉草 v2.0\n新增 DLC 劇情與全語音',
    subtitle: '現已開放下載',
    color: 'bg-brand-accent'
  },
  {
    id: 3,
    image: 'https://i.meee.com.tw/VTCnH24.png',
    category: '模組推薦',
    title: 'NtRIdol: Déjà Vu\n地下偶像的秘密生活',
    subtitle: '4K 高畫質材質包',
    color: 'bg-brand-secondary'
  }
];

export const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
        setCurrent(prev => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => setCurrent(prev => (prev - 1 + SLIDES.length) % SLIDES.length);
  const handleNext = () => setCurrent(prev => (prev + 1) % SLIDES.length);

  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/10] overflow-hidden group rounded-md">
        
        {SLIDES.map((slide, idx) => (
            <div 
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
                {/* Image */}
                <div className="absolute inset-0 bg-black">
                    <img 
                        src={slide.image} 
                        alt={slide.title} 
                        className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${idx === current ? 'scale-105' : 'scale-100'} opacity-80`}
                    />
                </div>
                
                {/* Overlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/80 via-transparent to-transparent"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    <div className={`max-w-2xl transition-all duration-700 transform ${idx === current ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                        <div className={`inline-block px-2 py-0.5 mb-3 text-[11px] font-bold text-white rounded-sm ${slide.color}`}>
                            {slide.category}
                        </div>
                        <h2 className="text-2xl md:text-4xl font-black text-white mb-2 leading-tight whitespace-pre-line text-shadow">
                            {slide.title}
                        </h2>
                        <p className="text-sm md:text-lg text-white font-medium max-w-lg leading-relaxed text-shadow">
                            {slide.subtitle}
                        </p>
                    </div>
                </div>
            </div>
        ))}

        {/* Arrows */}
        <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center text-white/50 hover:text-white text-3xl transition">
            <i className="fas fa-angle-left"></i>
        </button>
        <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center text-white/50 hover:text-white text-3xl transition">
            <i className="fas fa-angle-right"></i>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {SLIDES.map((_, idx) => (
                <button 
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${idx === current ? 'w-2.5 bg-[#e63946]' : 'w-2.5 bg-white/40 hover:bg-white/60'}`}
                />
            ))}
        </div>
    </div>
  );
};