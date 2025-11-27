
import React, { useState } from 'react';
import { Button } from '../components/Button';

interface SignUpProps {
    onLogin: () => void;
    onShowToast: (msg: string, type?: 'success' | 'info') => void;
}

export const SignUp: React.FC<SignUpProps> = ({ onLogin, onShowToast }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onShowToast('註冊成功！正在登入...', 'success');
    setTimeout(() => {
        onLogin();
    }, 1500);
  };

  return (
    <div className="relative flex-grow flex items-center justify-center py-20 px-4 min-h-[calc(100vh-64px)] animate-fade-in">
        
        {/* Fixed Background Layers for this page */}
        <div className="fixed inset-0 bg-[url('https://picsum.photos/id/180/1920/1080')] bg-cover bg-center bg-no-repeat z-0 pointer-events-none"></div>
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-0 pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
            
            {/* Top Gradient Line */}
            <div className="h-1 w-full bg-gradient-to-r from-brand-primary via-emerald-400 to-brand-accent"></div>

            <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-white">建立您的白金帳戶</h1>
                    <p className="text-sm text-slate-400 mt-2">加入社群，解鎖高速下載與獨家內容</p>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <button className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white py-2.5 rounded-lg border border-slate-600 transition text-sm font-medium">
                        <i className="fab fa-google text-red-500"></i> Google
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white py-2.5 rounded-lg border border-transparent transition text-sm font-medium">
                        <i className="fab fa-discord"></i> Discord
                    </button>
                </div>

                {/* Divider */}
                <div className="relative flex py-2 items-center mb-6">
                    <div className="flex-grow border-t border-slate-700"></div>
                    <span className="flex-shrink-0 mx-4 text-slate-500 text-xs uppercase tracking-wider">或是</span>
                    <div className="flex-grow border-t border-slate-700"></div>
                </div>

                {/* Form */}
                <form className="space-y-5" onSubmit={handleSubmit}>
                    
                    <div>
                        <label className="block text-slate-400 text-sm font-medium mb-1.5">使用者名稱</label>
                        <div className="relative group focus-within:ring-1 focus-within:ring-brand-primary rounded-lg transition duration-200">
                            <i className="fas fa-user absolute left-3 top-3.5 text-slate-500 group-focus-within:text-brand-primary transition-colors"></i>
                            <input 
                                type="text" 
                                placeholder="設定您的暱稱" 
                                className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg py-3 pl-10 pr-4 outline-none placeholder-slate-600 focus:border-brand-primary transition-colors"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-slate-400 text-sm font-medium mb-1.5">電子信箱</label>
                        <div className="relative group focus-within:ring-1 focus-within:ring-brand-primary rounded-lg transition duration-200">
                            <i className="fas fa-envelope absolute left-3 top-3.5 text-slate-500 group-focus-within:text-brand-primary transition-colors"></i>
                            <input 
                                type="email" 
                                placeholder="name@example.com" 
                                className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg py-3 pl-10 pr-4 outline-none placeholder-slate-600 focus:border-brand-primary transition-colors"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-slate-400 text-sm font-medium mb-1.5">設定密碼</label>
                        <div className="relative group focus-within:ring-1 focus-within:ring-brand-primary rounded-lg transition duration-200">
                            <i className="fas fa-lock absolute left-3 top-3.5 text-slate-500 group-focus-within:text-brand-primary transition-colors"></i>
                            <input 
                                type={showPassword ? "text" : "password"} 
                                placeholder="至少 8 個字元" 
                                className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg py-3 pl-10 pr-10 outline-none placeholder-slate-600 focus:border-brand-primary transition-colors"
                            />
                            <button 
                                type="button" 
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3.5 text-slate-500 hover:text-white transition"
                            >
                                <i className={`far ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                            </button>
                        </div>
                    </div>

                    <div className="space-y-3 pt-2">
                        <label className="flex items-start gap-3 cursor-pointer group">
                            <input 
                                type="checkbox" 
                                required 
                                className="mt-1 w-4 h-4 rounded bg-slate-950 border-slate-600 text-brand-primary focus:ring-brand-primary accent-brand-primary"
                            />
                            <span className="text-sm text-slate-400 group-hover:text-slate-300 transition leading-snug">
                                [必填] 我已年滿 <span className="text-brand-accent font-bold">18 歲</span>，並同意服務條款。
                            </span>
                        </label>
                        
                        <label className="flex items-start gap-3 cursor-pointer group">
                            <input 
                                type="checkbox" 
                                defaultChecked 
                                className="mt-1 w-4 h-4 rounded bg-slate-950 border-slate-600 text-brand-primary focus:ring-brand-primary accent-brand-primary"
                            />
                            <span className="text-sm text-slate-400 group-hover:text-slate-300 transition leading-snug">
                                [選填] 訂閱電子報，獲取每週補丁更新通知。
                            </span>
                        </label>
                    </div>

                    <Button 
                        variant="primary" 
                        size="lg" 
                        className="w-full shadow-lg hover:shadow-emerald-500/30 font-bold text-lg py-3.5"
                    >
                        立即註冊
                    </Button>

                </form>
            </div>

            {/* Footer Area inside card */}
            <div className="bg-slate-950/50 py-4 text-center border-t border-slate-800">
                <p className="text-sm text-slate-500">
                    已經有帳號了嗎？ 
                    <button onClick={onLogin} className="ml-1 text-brand-primary hover:text-emerald-400 font-bold transition hover:underline">
                        登入
                    </button>
                </p>
            </div>
        </div>
    </div>
  );
};
