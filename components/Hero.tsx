
import React, { useState, useEffect, useCallback } from 'react';

interface Slide {
  id: number;
  image: string;
}

const SLIDES: Slide[] = [
  {
    id: 0,
    image: 'https://i.meee.com.tw/SOMl9Fs.jpg',
  },
  {
    id: 1,
    image: 'https://i.meee.com.tw/abwNbM5.jpg',
  },
  {
    id: 2,
    image: 'https://i.meee.com.tw/sC1RzJj.png',
  },
  {
    id: 3,
    image: 'https://i.meee.com.tw/VTCnH24.png',
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
      <div className="hidden lg:flex shrink-0 w-[160px] xl:w-[240px] h-full items-start justify-end relative z-0 bg-[#13111C]">
         <img 
            src="https://i.meee.com.tw/FqPAOPl.png" 
            alt="Ad Left"
            className="w-full h-full object-cover object-top opacity-80 hover:opacity-100 transition duration-700"
         />
         {/* Vignette Overlay for Ad only */}
         <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent pointer-events-none"></div>
      </div>

      {/* 3. Center Hero Banner - Fluid Strategy */}
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
            {/* Background Image - Clean, No Gradients */}
            <div className="absolute inset-0">
              <img 
                src={slide.image} 
                alt={`Slide ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Text Content Removed as requested */}
          </div>
        ))}

        {/* Navigation Arrows */}
        <div className="absolute right-4 bottom-4 md:right-8 md:bottom-8 flex gap-3 z-30">
          <button 
              onClick={prevSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all duration-300 shadow-lg"
          >
              <i className="fas fa-chevron-left"></i>
          </button>
          <button 
              onClick={nextSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all duration-300 shadow-lg"
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
         {/* Vignette Overlay for Ad only */}
         <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent pointer-events-none"></div>
      </div>
      
    </div>
  );
};
