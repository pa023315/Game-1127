
import React, { useState, useEffect, useCallback } from 'react';
import { Button } from './Button';

interface Slide {
  id: number;
  image: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  description: string;
  primaryBtnText: string;
}

const SLIDES: Slide[] = [
  {
    id: 0,
    image: 'https://picsum.photos/id/133/1920/1080', // Cyberpunk vibe
    badge: '本日精選',
    badgeColor: 'bg-brand-primary text-white',
    title: '電馭叛客 2077',
    subtitle: 'v2.12b 終極紳士版',
    description: '整合 4K 材質包，修復已知崩潰，解鎖夜之城所有隱藏羅曼史選項。',
    primaryBtnText: '查看詳情',
  },
  {
    id: 1,
    image: 'https://picsum.photos/id/184/1920/1080', // Desert/Elden Ring vibe
    badge: '熱門排行 No.1',
    badgeColor: 'bg-brand-accent text-brand-darker',
    title: '艾爾登法環',
    subtitle: '黃金樹之影 優化包',
    description: '針對 DLC 進行的效能優化，徹底解決卡頓問題。內含無縫連線模組。',
    primaryBtnText: '立即下載',
  },
  {
    id: 2,
    image: 'https://picsum.photos/id/111/1920/1080', // Sci-fi/FF7 vibe
    badge: '新作發售',
    badgeColor: 'bg-brand-secondary text-white',
    title: 'Final Fantasy VII 重生',
    subtitle: '高清材質增強版',
    description: '修復了 PC 版移植的光影錯誤，包含蒂法與艾莉絲的 4K 服裝細節。',
    primaryBtnText: '預覽畫質',
  }
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000); 
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    // 1. Parent Container
    // Use flex justify-center to keep the structure balanced
    <div className="relative w-full h-[450px] md:h-[500px] bg-[#13111C] flex justify-center items-stretch overflow-hidden shadow-2xl z-20 border-b border-white/5">
      
      {/* 2. Left Ad Column - Fixed Width Strategy */}
      {/* - Hidden on Mobile (< lg) */}
      {/* - Fixed width 160px on Laptop (lg) */}
      {/* - Fixed width 240px on Desktop (xl) */}
      {/* - shrink-0 is CRITICAL to prevent it from disappearing when screen is tight */}
      <div className="hidden lg:flex shrink-0 w-[160px] xl:w-[240px] h-full items-start justify-end relative z-0 bg-[#13111C]">
         <img 
            src="https://i.meee.com.tw/FqPAOPl.png" 
            alt="Ad Left"
            className="w-full h-full object-cover object-top opacity-80 hover:opacity-100 transition duration-700"
         />
         {/* Vignette Overlay */}
         <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent pointer-events-none"></div>
      </div>

      {/* 3. Center Hero Banner - Fluid Strategy */}
      {/* - flex-1: Takes up all remaining space between ads */}
      {/* - max-w-[900px]: Limits width on laptops so ads have breathing room */}
      {/* - xl:max-w-[1200px]: Expands on larger screens */}
      <div 
        className="relative flex-1 w-full max-w-[900px] xl:max-w-[1200px] h-full group overflow-hidden z-20 bg-brand-darker shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slides */}
        {SLIDES.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover"
              />
              {/* Gradients for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1625] via-transparent to-transparent opacity-90"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A1625]/80 via-transparent to-transparent"></div>
            </div>

            {/* Content Box */}
            <div className="absolute bottom-6 left-4 md:bottom-12 md:left-12 lg:left-16 max-w-[90%] md:max-w-xl z-20">
               <div 
                  className={`
                      backdrop-blur-xl bg-black/40 border border-white/10 p-5 md:p-8 rounded-2xl shadow-2xl
                      transform transition-all duration-700 delay-200
                      ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                  `}
               >
                  <div className="flex items-center gap-3 mb-2">
                      <span className={`inline-block px-2 py-0.5 text-[10px] font-black rounded uppercase tracking-wider shadow-lg ${slide.badgeColor}`}>
                          {slide.badge}
                      </span>
                  </div>
                  
                  <h1 className="text-2xl md:text-4xl font-black text-white mb-1 leading-tight drop-shadow-lg">
                      {slide.title}
                  </h1>
                  <h2 className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white mb-3">
                      {slide.subtitle}
                  </h2>
                  
                  <p className="text-slate-200 text-xs md:text-sm mb-5 leading-relaxed line-clamp-2 md:line-clamp-3">
                      {slide.description}
                  </p>
                  
                  <div className="flex gap-3">
                      <Button variant="primary" size="md" icon="fas fa-play" className="shadow-[0_0_20px_rgba(245,49,127,0.5)] text-sm">
                          {slide.primaryBtnText}
                      </Button>
                       <Button variant="outline" size="md" className="backdrop-blur-md bg-white/5 border-white/30 hover:bg-white/10 text-sm">
                          <i className="fas fa-plus"></i> 加入清單
                      </Button>
                  </div>
               </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <div className="absolute right-4 bottom-4 md:right-8 md:bottom-12 flex gap-3 z-30">
          <button 
              onClick={prevSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 backdrop-blur border border-white/10 text-white flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all duration-300"
          >
              <i className="fas fa-chevron-left"></i>
          </button>
          <button 
              onClick={nextSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 backdrop-blur border border-white/10 text-white flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all duration-300"
          >
              <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-0 left-0 w-full flex z-30">
            {SLIDES.map((_, index) => (
               <div key={index} className="flex-1 h-1 bg-white/10">
                   <div 
                      className={`h-full bg-brand-primary transition-all duration-[6000ms] linear ${index === currentSlide && !isPaused ? 'w-full' : 'w-0'}`}
                      style={{ transitionProperty: 'width' }}
                   ></div>
               </div>
            ))}
        </div>
      </div>

      {/* 4. Right Ad Column - Fixed Width Strategy */}
      <div className="hidden lg:flex shrink-0 w-[160px] xl:w-[240px] h-full items-start justify-start relative z-0 bg-[#13111C]">
         <img 
            src="https://i.meee.com.tw/FqPAOPl.png" 
            alt="Ad Right"
            className="w-full h-full object-cover object-top opacity-80 hover:opacity-100 transition duration-700"
         />
         {/* Vignette Overlay */}
         <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent pointer-events-none"></div>
      </div>
      
    </div>
  );
};
