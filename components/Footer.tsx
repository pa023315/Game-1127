
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-black border-t border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4 group">
                <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center font-bold text-white group-hover:bg-brand-primary group-hover:text-slate-900 transition">P</div>
                <span className="text-xl font-bold tracking-tight text-white">PATCH<span className="text-slate-500 group-hover:text-white transition">HUB</span></span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              專注於成人遊戲的優化與漢化社群。致力於提供安全、高速、高品質的補丁資源。
            </p>
            <div className="flex gap-4">
                <a href="#" className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-slate-900 transition"><i className="fab fa-discord"></i></a>
                <a href="#" className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-slate-900 transition"><i className="fab fa-twitter"></i></a>
                <a href="#" className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-slate-900 transition"><i className="fab fa-patreon"></i></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">網站導覽</h3>
            <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-brand-primary transition">最新新聞</a></li>
                <li><a href="#" className="hover:text-brand-primary transition">補丁資料庫</a></li>
                <li><a href="#" className="hover:text-brand-primary transition">會員福利活動</a></li>
                <li><a href="#" className="hover:text-brand-primary transition">RSS 訂閱</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">支援與規範</h3>
            <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition">常見問題 (FAQ)</a></li>
                <li><a href="#" className="hover:text-white transition">補丁安裝教學</a></li>
                <li><a href="#" className="hover:text-white transition">服務條款</a></li>
                <li><a href="#" className="hover:text-white transition">隱私權政策</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">每週精選</h3>
            <p className="text-xs text-slate-500 mb-4">輸入信箱，接收本週最新的漢化情報。</p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email" className="bg-slate-900 border border-slate-700 text-white text-sm rounded px-3 py-2 outline-none focus:border-brand-primary transition" />
                <button className="bg-slate-800 hover:bg-brand-primary hover:text-slate-900 text-white text-sm font-bold py-2 rounded transition">訂閱</button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-600">© 2024 PatchHub. All rights reserved. 18+</p>
            <div className="flex gap-6 text-xs text-slate-600">
                <span>Designed for Gamers</span>
            </div>
        </div>
      </div>
    </footer>
  );
};
