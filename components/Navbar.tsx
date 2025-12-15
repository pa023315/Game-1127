
import React, { useState } from 'react';
import { Page } from '../types';

interface NavbarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1A1625]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)] transition-all duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo Section */}
        <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNav(Page.HOME); }} 
            className="flex items-center gap-2 group"
        >
            <div className="w-9 h-9 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center font-black text-white transform group-hover:rotate-12 transition duration-300 shadow-lg shadow-brand-primary/30">
                P
            </div>
            <span className="text-xl font-black tracking-tight text-white group-hover:text-glow transition duration-300">
                PATCH<span className="text-brand-primary group-hover:text-brand-accent transition">HUB</span>
            </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-brand-surface/50 p-1 rounded-full border border-white/5">
            {[
                { page: Page.HOME, icon: 'fas fa-home', label: '首頁' },
                { page: Page.NEWS, icon: 'far fa-newspaper', label: '情報' },
                { page: Page.PATCHES, icon: 'fas fa-database', label: '資料庫' },
                { page: Page.SUBSCRIBE, icon: 'fas fa-gift', label: '福利', highlight: true }
            ].map((item) => (
                <button 
                    key={item.page}
                    onClick={() => handleNav(item.page)} 
                    className={`
                        relative px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2
                        ${activePage === item.page 
                            ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg shadow-brand-primary/30' 
                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                        }
                    `}
                >
                    <i className={`${item.icon} ${item.highlight && activePage !== item.page ? 'text-brand-primary animate-pulse' : ''}`}></i> 
                    {item.label}
                </button>
            ))}
        </div>

        {/* Right Action Section */}
        <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="hidden lg:block relative group">
                <input 
                    type="text" 
                    placeholder="搜尋補丁..." 
                    className="bg-brand-dark border border-brand-primary/20 rounded-full py-1.5 px-4 pl-10 text-sm text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary w-40 focus:w-60 transition-all duration-300 placeholder-slate-500" 
                />
                <i className="fas fa-search absolute left-3.5 top-2 text-slate-500 group-focus-within:text-brand-primary transition"></i>
            </div>

            <div className="h-6 w-px bg-white/10 hidden md:block"></div>

            {/* Member Center Shortcut */}
            <button 
                onClick={() => handleNav(Page.DASHBOARD)} 
                className={`hidden sm:flex items-center gap-2 border border-slate-600 hover:border-brand-primary hover:text-brand-primary text-slate-300 text-xs font-bold px-4 py-2 rounded-full transition ${activePage === Page.DASHBOARD ? 'border-brand-primary text-brand-primary bg-brand-primary/10' : ''}`}
            >
                <i className="fas fa-user-circle"></i>
                <span>會員</span>
            </button>

            {/* CTA Button logic */}
            {activePage === Page.SIGN_UP ? (
                <button 
                    onClick={() => handleNav(Page.HOME)}
                    className="hidden sm:flex items-center gap-2 border border-brand-primary/50 text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-brand-primary/10 transition"
                >
                    <i className="fas fa-sign-in-alt"></i>
                    <span>登入</span>
                </button>
            ) : (
                <button 
                    onClick={() => handleNav(Page.SIGN_UP)} 
                    className="hidden sm:flex items-center gap-2 bg-brand-accent hover:bg-cyan-300 text-brand-darker text-xs font-black px-4 py-2 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] transition transform hover:scale-105 active:scale-95"
                >
                    <i className="fas fa-crown"></i>
                    <span>白金會員</span>
                </button>
            )}
            
            {/* Mobile Menu Toggle */}
            <button 
                className="md:hidden text-white text-xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#1A1625]/95 backdrop-blur-md border-b border-white/10 p-4 md:hidden flex flex-col gap-2 animate-fade-in shadow-2xl h-[calc(100vh-64px)] overflow-y-auto z-50">
             <button onClick={() => handleNav(Page.HOME)} className="w-full text-left px-4 py-3 rounded-xl text-sm font-bold text-slate-300 hover:text-white hover:bg-white/10 transition flex items-center gap-3">
                <i className="fas fa-home w-5 text-center text-brand-primary"></i> 首頁
             </button>
             <button onClick={() => handleNav(Page.NEWS)} className="w-full text-left px-4 py-3 rounded-xl text-sm font-bold text-slate-300 hover:text-white hover:bg-white/10 transition flex items-center gap-3">
                <i className="far fa-newspaper w-5 text-center text-brand-primary"></i> 新聞情報
             </button>
             <button onClick={() => handleNav(Page.PATCHES)} className="w-full text-left px-4 py-3 rounded-xl text-sm font-bold text-slate-300 hover:text-white hover:bg-white/10 transition flex items-center gap-3">
                <i className="fas fa-database w-5 text-center text-brand-primary"></i> 補丁資料庫
             </button>
             <button onClick={() => handleNav(Page.SUBSCRIBE)} className="w-full text-left px-4 py-3 rounded-xl text-sm font-bold text-brand-accent hover:bg-brand-accent/10 transition flex items-center gap-3">
                <i className="fas fa-gift w-5 text-center"></i> 會員福利
             </button>
             <button onClick={() => handleNav(Page.DASHBOARD)} className="w-full text-left px-4 py-3 rounded-xl text-sm font-bold text-white hover:bg-white/10 transition flex items-center gap-3">
                <i className="fas fa-user-circle w-5 text-center"></i> 會員中心
             </button>
             
             <div className="h-px bg-white/10 my-2"></div>
             
             <button onClick={() => handleNav(Page.SIGN_UP)} className="w-full py-3 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold shadow-lg flex items-center justify-center gap-2">
                <i className="fas fa-crown"></i> 註冊白金會員
             </button>
        </div>
      )}
    </nav>
  );
};
