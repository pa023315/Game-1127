import React from 'react';
import { Button } from './Button';

export const SubscriptionBanner: React.FC = () => {
  return (
    <section className="relative py-16 mt-12 overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-blue-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-block p-4 rounded-full bg-slate-900/50 border border-slate-700 mb-6">
            <i className="fas fa-envelope-open-text text-4xl text-brand-primary"></i>
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">不錯過任何重要更新</h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
          加入超過 10,000 名玩家的行列。每週獲取最新的漢化、去碼補丁與效能優化通知。
        </p>
        
        <form className="max-w-md mx-auto flex gap-2 relative" onSubmit={(e) => e.preventDefault()}>
          <div className="relative flex-1">
             <i className="fas fa-at absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"></i>
             <input 
                type="email" 
                placeholder="輸入您的電子信箱..." 
                className="w-full bg-slate-900/80 border border-slate-600 text-white pl-10 pr-4 py-3 rounded focus:outline-none focus:border-brand-primary placeholder-slate-500 focus:ring-1 focus:ring-brand-primary transition-all"
             />
          </div>
          <Button variant="primary" size="md" className="whitespace-nowrap px-6">
            立即加入
          </Button>
        </form>
        <p className="text-xs text-slate-500 mt-4">
          訂閱即表示您同意我們的隱私權政策。絕無垃圾郵件。
        </p>
      </div>
    </section>
  );
};