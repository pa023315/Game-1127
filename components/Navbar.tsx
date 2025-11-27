
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo Section */}
        <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNav(Page.HOME); }} 
            className="flex items-center gap-2 group"
        >
            <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center font-bold text-slate-900 group-hover:bg-emerald-400 transition transform group-hover:rotate-6">
                P
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
                PATCH<span className="text-slate-400 group-hover:text-white transition">HUB</span>
            </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
            <button 
                onClick={() => handleNav(Page.HOME)} 
                className={`flex items-center gap-2 text-sm font-medium transition duration-200 ${activePage === Page.HOME ? 'text-white' : 'text-slate-400 hover:text-white'}`}
            >
                <i className="fas fa-home"></i> 首頁
            </button>
            <button 
                onClick={() => handleNav(Page.NEWS)} 
                className={`flex items-center gap-2 text-sm font-medium transition duration-200 ${activePage === Page.NEWS ? 'text-white' : 'text-slate-400 hover:text-white'}`}
            >
                <i className="far fa-newspaper"></i> 新聞情報
            </button>
            <button 
                onClick={() => handleNav(Page.PATCHES)} 
                className={`flex items-center gap-2 text-sm font-medium transition duration-200 ${activePage === Page.PATCHES ? 'text-white' : 'text-slate-400 hover:text-white'}`}
            >
                <i className="fas fa-database"></i> 補丁資料庫
            </button>
            
            {/* Featured Link: Member Benefits */}
            <button 
                onClick={() => handleNav(Page.SUBSCRIBE)} 
                className={`flex items-center gap-2 text-sm font-bold relative group transition duration-200 ${activePage === Page.SUBSCRIBE ? 'text-white' : 'text-white hover:text-brand-accent'}`}
            >
                <i className="fas fa-gift text-brand-accent group-hover:animate-bounce"></i> 
                會員福利
                <span className={`absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-brand-accent rounded-full transition duration-300 ${activePage === Page.SUBSCRIBE ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></span>
            </button>
        </div>

        {/* Right Action Section */}
        <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="hidden lg:block relative group">
                <input 
                    type="text" 
                    placeholder="搜尋補丁..." 
                    className="bg-slate-800 border border-slate-700 rounded-full py-1.5 px-4 pl-10 text-sm text-slate-300 focus:outline-none focus:border-brand-primary focus:text-white w-40 focus:w-60 transition-all duration-300 placeholder-slate-500 shadow-inner" 
                />
                <i className="fas fa-search absolute left-3.5 top-2 text-slate-500 text-xs group-focus-within:text-brand-primary transition"></i>
            </div>

            <div className="h-6 w-px bg-slate-700 hidden md:block"></div>

            {/* Member Center Shortcut */}
            <button 
                onClick={() => handleNav(Page.DASHBOARD)} 
                className={`hidden sm:flex items-center gap-2 border border-slate-600 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-bold px-4 py-2 rounded-full transition ${activePage === Page.DASHBOARD ? 'bg-slate-800 text-white border-white' : ''}`}
            >
                <i className="fas fa-user-circle"></i>
                <span>會員中心</span>
            </button>

            {/* CTA Button logic */}
            {activePage === Page.SIGN_UP ? (
                <button 
                    onClick={() => handleNav(Page.HOME)} // Assuming login goes home or opens modal
                    className="hidden sm:flex items-center gap-2 border border-slate-600 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-full transition"
                >
                    <i className="fas fa-sign-in-alt"></i>
                    <span>登入</span>
                </button>
            ) : (
                <button 
                    onClick={() => handleNav(Page.SIGN_UP)} 
                    className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg shadow-purple-500/20 transition transform hover:scale-105 active:scale-95"
                >
                    <i className="fas fa-crown"></i>
                    <span>註冊白金會員</span>
                </button>
            )}
            
            {/* Mobile Menu Toggle */}
            <button 
                className="md:hidden text-slate-300 hover:text-white text-xl w-10 h-10 flex items-center justify-center rounded hover:bg-slate-800 transition"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 p-4 md:hidden flex flex-col gap-2 animate-fade-in shadow-2xl h-[calc(100vh-64px)] overflow-y-auto">
             <button onClick={() => handleNav(Page.HOME)} className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition flex items-center gap-3">
                <i className="fas fa-home w-5 text-center"></i> 首頁
             </button>
             <button onClick={() => handleNav(Page.NEWS)} className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition flex items-center gap-3">
                <i className="far fa-newspaper w-5 text-center"></i> 新聞情報
             </button>
             <button onClick={() => handleNav(Page.PATCHES)} className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition flex items-center gap-3">
                <i className="fas fa-database w-5 text-center"></i> 補丁資料庫
             </button>
             <button onClick={() => handleNav(Page.SUBSCRIBE)} className="w-full text-left px-4 py-3 rounded-lg text-sm font-bold text-brand-accent hover:bg-slate-800 transition flex items-center gap-3">
                <i className="fas fa-gift w-5 text-center"></i> 會員福利
             </button>
             <button onClick={() => handleNav(Page.DASHBOARD)} className="w-full text-left px-4 py-3 rounded-lg text-sm font-bold text-white hover:bg-slate-800 transition flex items-center gap-3">
                <i className="fas fa-user-circle w-5 text-center"></i> 會員中心
             </button>
             
             <div className="h-px bg-slate-700 my-2"></div>
             
             <button onClick={() => handleNav(Page.SIGN_UP)} className="w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg flex items-center justify-center gap-2">
                <i className="fas fa-crown"></i> 註冊白金會員
             </button>
        </div>
      )}
    </nav>
  );
};
