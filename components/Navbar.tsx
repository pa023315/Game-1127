import React, { useState, useEffect } from 'react';
import { Page } from '../types';

interface NavbarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
            scrolled 
            ? 'bg-brand-card/95 backdrop-blur-md border-gray-100 py-4 shadow-sm' 
            : 'bg-brand-card border-gray-100 py-4'
        }`}
    >
      <div className="container flex items-center justify-between">
        
        {/* Brand */}
        <a href="#" onClick={(e) => { e.preventDefault(); handleNav(Page.HOME); }} className="flex items-center gap-3 group">
            <div className="text-gray-900 text-3xl">
                <img src="/logo-placeholder.svg" alt="Logo" className="w-10 h-10 object-contain hidden" />
                <i className="fas fa-user-secret text-brand-primary"></i>
            </div>
            <div className="leading-none flex flex-col">
                <span className="text-2xl font-black text-gray-900 tracking-widest" style={{ fontFamily: '"Noto Sans TC", sans-serif' }}>紳士玩家</span>
                <span className="text-[10px] text-gray-500 font-bold tracking-[0.15em] mt-0.5">GENTLEMAN GAMER</span>
            </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 translate-x-10">
            {[
                { page: Page.NEWS, label: '新聞' },
                { page: Page.PATCHES, label: '補丁' },
                { page: Page.SUBSCRIBE, label: '好康福利' },
            ].map((item, idx) => (
                <button 
                    key={idx}
                    onClick={() => handleNav(item.page)} 
                    className={`relative py-2 text-[15px] font-bold transition-all duration-300 hover:text-brand-primary ${
                        activePage === item.page
                        ? 'text-gray-900' 
                        : 'text-gray-500'
                    }`}
                >
                   {item.label}
                   {activePage === item.page && (
                       <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[3px] bg-brand-primary rounded-t-sm"></span>
                   )}
                </button>
            ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
            <button className="w-10 h-10 items-center justify-center rounded-full text-gray-500 hover:text-gray-900 transition">
                <i className="fas fa-search text-xl"></i>
            </button>
            
            {/* Mobile Toggle */}
            <button 
                className="lg:hidden text-2xl text-gray-900 ml-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-card border-b border-gray-100 shadow-xl lg:hidden">
             <div className="flex flex-col p-4 gap-2">
                 {[
                    { page: Page.NEWS, label: '新聞' },
                    { page: Page.PATCHES, label: '補丁' },
                    { page: Page.SUBSCRIBE, label: '好康福利' },
                 ].map((item, idx) => (
                     <button 
                        key={idx}
                        onClick={() => handleNav(item.page)} 
                        className="w-full text-left px-4 py-4 rounded-xl font-bold text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition flex justify-between items-center"
                    >
                        {item.label}
                     </button>
                 ))}
             </div>
        </div>
      )}
    </header>
  );
};