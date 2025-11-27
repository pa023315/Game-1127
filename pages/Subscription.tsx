import React from 'react';
import { Button } from '../components/Button';

export const Subscription: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center py-12 px-4 relative overflow-hidden animate-fade-in">
      {/* Background FX */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        {/* Left: Benefits */}
        <div className="flex flex-col justify-center">
            <div className="inline-block mb-6">
                <span className="bg-gradient-to-r from-brand-accent to-fuchsia-600 text-white font-bold px-4 py-2 rounded-full text-sm shadow-[0_0_15px_rgba(217,70,239,0.5)]">
                    <i className="fas fa-crown mr-2"></i> 白金會員權限
                </span>
            </div>
            <h1 className="text-5xl font-black text-white mb-6 leading-tight">
                解鎖 <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">極致體驗。</span>
            </h1>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                支持社群並獲得無限制的高速下載、獨家 4K 內容與早期測試資格。
            </p>
            
            <div className="space-y-6">
                {[
                    { icon: 'fas fa-bolt', title: '下載速度無上限', desc: '不再需要等待。完全釋放您的頻寬潛力。' },
                    { icon: 'fas fa-eye', title: '無廣告瀏覽', desc: '乾淨、沈浸式的體驗，零干擾。' },
                    { icon: 'fas fa-star', title: 'Beta 測試資格', desc: '比其他人更早體驗未發布的模組。' },
                ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                        <div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-brand-primary text-xl flex-shrink-0">
                            <i className={item.icon}></i>
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-lg">{item.title}</h3>
                            <p className="text-slate-500 text-sm">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Right: Form */}
        <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl blur opacity-20"></div>
            <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-700 p-8 md:p-10 rounded-2xl shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">建立帳號</h2>
                
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-slate-400 text-xs uppercase font-bold mb-2">使用者名稱</label>
                            <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-white focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary transition" placeholder="Neo" />
                        </div>
                        <div>
                            <label className="block text-slate-400 text-xs uppercase font-bold mb-2">年齡驗證</label>
                            <select className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-white focus:border-brand-primary focus:outline-none">
                                <option>18-24</option>
                                <option>25+</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-slate-400 text-xs uppercase font-bold mb-2">電子信箱</label>
                        <input type="email" className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-white focus:border-brand-primary focus:outline-none transition" placeholder="you@example.com" />
                    </div>

                    <div>
                        <label className="block text-slate-400 text-xs uppercase font-bold mb-2">密碼</label>
                        <input type="password" className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-white focus:border-brand-primary focus:outline-none transition" placeholder="••••••••" />
                    </div>

                    <div className="pt-2">
                         <label className="flex items-start gap-3 cursor-pointer group">
                            <input type="checkbox" className="mt-1 accent-brand-primary w-4 h-4" />
                            <span className="text-xs text-slate-400 group-hover:text-slate-300">
                                我同意<span className="text-brand-primary">服務條款</span>並確認我已年滿 18 歲。
                            </span>
                        </label>
                    </div>

                    <Button variant="primary" size="lg" className="w-full mt-4">
                        開始免費試用
                    </Button>
                    
                    <p className="text-center text-xs text-slate-500 mt-4">
                        已有帳號？ <a href="#" className="text-brand-primary hover:underline">登入</a>
                    </p>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};