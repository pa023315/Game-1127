
import React, { useState, useEffect, useCallback } from 'react';
import { Button } from './Button';

interface Slide {
  id: number;
  image: string;
  badge: string;
  badgeColor: string;
  subBadge: string;
  title: string;
  titleGradient: string; // Tailwind gradient classes
  subtitle: string;
  description: string;
  primaryBtnText: string;
  secondaryBtnText: string;
  borderColor: string; // For the left border accent
}

const SLIDES: Slide[] = [
  {
    id: 0,
    image: 'https://picsum.photos/id/133/1920/1080', // Cyberpunk vibe
    badge: '精選補丁',
    badgeColor: 'bg-brand-accent/20 border-brand-accent text-brand-accent',
    subBadge: '本日更新',
    title: '電馭叛客 2077',
    titleGradient: 'from-brand-primary to-emerald-200',
    subtitle: 'v2.12b 終極版',
    description: '最完整的模組合集。修復了所有已知崩潰問題，整合 4K 材質包，並解鎖未公開內容。體驗無拘無束的夜之城。',
    primaryBtnText: '立即下載',
    secondaryBtnText: '更新日誌',
    borderColor: 'border-brand-primary'
  },
  {
    id: 1,
    image: 'https://picsum.photos/id/184/1920/1080', // Desert/Elden Ring vibe
    badge: '熱門模組',
    badgeColor: 'bg-orange-500/20 border-orange-500 text-orange-400',
    subBadge: '本週下載 Top 1',
    title: '艾爾登法環',
    titleGradient: 'from-orange-400 to-yellow-200',
    subtitle: '黃金樹之影 優化包',
    description: '針對 DLC 進行的效能優化，徹底解決卡頓問題。內含無縫連線模組與寬螢幕適配補丁，讓您的褪色者之旅更加順暢。',
    primaryBtnText: '下載優化包',
    secondaryBtnText: '查看詳情',
    borderColor: 'border-orange-500'
  },
  {
    id: 2,
    image: 'https://picsum.photos/id/111/1920/1080', // Sci-fi/FF7 vibe
    badge: '新發售',
    badgeColor: 'bg-blue-500/20 border-blue-500 text-blue-400',
    subBadge: '社群推薦',
    title: 'Final Fantasy VII 重生',
    titleGradient: 'from-blue-400 to-cyan-300',
    subtitle: '高清材質增強版',
    description: '修復了 PC 版移植的光影錯誤，並替換了部分低解析度貼圖。包含蒂法與艾莉絲的 4K 服裝細節增強模組。',
    primaryBtnText: '立即下載',
    secondaryBtnText: '預覽畫質',
    borderColor: 'border-blue-500'
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

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000); // 5 seconds auto-play
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section 
      className="relative h-[600px] w-full overflow-hidden group bg-brand-darker"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {SLIDES.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover transform scale-105"
            />
            {/* Overlay Gradients for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-darker/90 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-transparent to-transparent"></div>
          </div>

          {/* Text Content */}
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div className={`max-w-2xl transition-all duration-700 transform ${
                index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <span className={`border px-3 py-1 text-xs font-bold rounded uppercase tracking-wider backdrop-blur-sm ${slide.badgeColor}`}>
                    {slide.badge}
                </span>
                <span className="text-slate-400 text-xs font-mono flex items-center gap-1">
                    <i className="fas fa-clock"></i> {slide.subBadge}
                </span>
              </div>
            
              <h1 className="text-5xl md:text-6xl font-black mb-2 leading-tight text-white drop-shadow-lg">
                {slide.title} <br/>
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${slide.titleGradient}`}>
                  {slide.subtitle}
                </span>
              </h1>
              
              <p className={`text-slate-300 text-lg mb-8 leading-relaxed border-l-4 ${slide.borderColor} pl-4 bg-gradient-to-r from-slate-900/50 to-transparent py-2`}>
                {slide.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="lg" icon="fas fa-download">
                  {slide.primaryBtnText}
                </Button>
                <Button variant="outline" size="lg" icon="fas fa-arrow-right">
                  {slide.secondaryBtnText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Decorative Grid Overlay (Static) */}
      <div className="absolute bottom-0 w-full h-24 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none z-10"></div>

      {/* Controls */}
      {/* Left Arrow */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-brand-primary hover:text-brand-darker text-white w-12 h-12 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-300 z-30 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0"
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      {/* Right Arrow */}
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-brand-primary hover:text-brand-darker text-white w-12 h-12 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-300 z-30 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0"
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Indicators (Dots) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 bg-brand-primary shadow-[0_0_10px_rgba(16,185,129,0.5)]' 
                : 'w-2 bg-slate-600 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
};
