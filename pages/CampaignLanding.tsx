import React from 'react';
import { Button } from '../components/Button';

export const CampaignLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-darker animate-fade-in flex flex-col items-center pt-8 pb-16">
      
      {/* 1. 現在活動 (Current Campaign Alert) */}
      <div className="container mx-auto px-4 mb-8 w-full max-w-4xl">
          <div className="bg-gradient-to-r from-brand-accent to-purple-800 rounded-lg p-1 shadow-[0_0_20px_rgba(217,70,239,0.3)]">
              <div className="bg-slate-900/90 backdrop-blur rounded p-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
                  <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-white text-xl animate-pulse">
                          <i className="fas fa-gift"></i>
                      </div>
                      <div>
                          <h3 className="font-bold text-white text-lg">限時活動進行中！</h3>
                          <p className="text-slate-300 text-sm">現在訂閱即送 <span className="text-brand-accent font-bold">《2024 紳士遊戲漢化懶人包》</span> PDF 攻略本。</p>
                      </div>
                  </div>
                  <div className="bg-brand-accent/20 text-brand-accent font-mono font-bold px-3 py-1 rounded text-sm border border-brand-accent/50">
                      剩餘 2 天 14 小時
                  </div>
              </div>
          </div>
      </div>

      {/* 2. Hero Section */}
      <div className="text-center max-w-2xl px-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              訂閱 <span className="text-brand-primary">Game Patch Hub</span>
          </h1>
          <p className="text-slate-400 text-lg mb-8">
              不僅僅是去碼。加入我們，獲取從未公開的模組資源、專屬的 Discord 頻道權限以及優先下載資格。
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
              {[
                  { icon: 'fas fa-bolt', text: '極速下載通道' },
                  { icon: 'fas fa-bell', text: '新補丁即時通知' },
                  { icon: 'fas fa-gift', text: '不定期會員好禮' },
              ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-300">
                      <i className={`${item.icon} text-brand-primary`}></i>
                      <span className="font-bold text-sm">{item.text}</span>
                  </div>
              ))}
          </div>
      </div>

      {/* 3. 註冊表單 (Registration Form) */}
      <div className="w-full max-w-md px-4">
          <div className="bg-slate-900 border border-slate-700 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-brand-accent"></div>
              
              <h2 className="text-2xl font-bold text-white text-center mb-6">建立您的帳戶</h2>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                      <label className="block text-slate-500 text-xs font-bold mb-1 uppercase">電子信箱</label>
                      <input 
                        type="email" 
                        className="w-full bg-slate-950 border border-slate-700 text-white rounded p-3 focus:border-brand-primary focus:outline-none transition"
                        placeholder="name@example.com"
                      />
                  </div>
                  <div>
                      <label className="block text-slate-500 text-xs font-bold mb-1 uppercase">設定密碼</label>
                      <input 
                        type="password" 
                        className="w-full bg-slate-950 border border-slate-700 text-white rounded p-3 focus:border-brand-primary focus:outline-none transition"
                        placeholder="••••••••"
                      />
                  </div>
                  
                  <div className="pt-2">
                      <Button variant="primary" size="lg" className="w-full font-bold text-base py-3">
                          立即註冊 (免費試用)
                      </Button>
                  </div>
                  
                  <p className="text-center text-xs text-slate-600 mt-4">
                      點擊註冊即表示您同意我們的服務條款。您隨時可以取消訂閱。
                  </p>
              </form>
          </div>
      </div>

    </div>
  );
};