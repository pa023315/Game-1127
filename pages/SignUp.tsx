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
    <div className="relative flex-grow flex items-center justify-center py-20 px-4 min-h-[calc(100vh-64px)] animate-fade-in pt-20">
        
        {/* Fixed Background Layers for this page */}
        <div className="fixed inset-0 bg-[url('https://picsum.photos/id/180/1920/1080')] bg-cover bg-center bg-no-repeat z-0 pointer-events-none"></div>
        <div className="fixed inset-0 bg-brand-mainBg/90 backdrop-blur-sm z-0 pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-md bg-brand-card border border-gray-200 rounded-2xl shadow-xl overflow-hidden animate-fade-in-up">
            
            {/* Top Gradient Line */}
            <div className="h-1 w-full bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent"></div>

            <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">建立您的白金帳戶</h1>
                    <p className="text-sm text-gray-500 mt-2">加入社群，解鎖高速下載與獨家內容</p>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 py-2.5 rounded-lg border border-gray-200 transition text-sm font-medium shadow-sm">
                        <i className="fab fa-google text-red-500"></i> Google
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white py-2.5 rounded-lg border border-transparent transition text-sm font-medium shadow-sm">
                        <i className="fab fa-discord"></i> Discord
                    </button>
                </div>

                {/* Divider */}
                <div className="relative flex py-2 items-center mb-6">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink-0 mx-4 text-gray-400 text-xs uppercase tracking-wider">或是</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                </div>

                {/* Form */}
                <form className="space-y-5" onSubmit={handleSubmit}>
                    
                    <div>
                        <label className="block text-gray-600 text-sm font-medium mb-1.5">使用者名稱</label>
                        <div className="relative group focus-within:ring-1 focus-within:ring-brand-primary rounded-lg transition duration-200">
                            <i className="fas fa-user absolute left-3 top-3.5 text-gray-400 group-focus-within:text-brand-primary transition-colors"></i>
                            <input 
                                type="text" 
                                placeholder="設定您的暱稱" 
                                className="w-full bg-white border border-gray-200 text-gray-900 rounded-lg py-3 pl-10 pr-4 outline-none placeholder-gray-400 focus:border-brand-primary transition-colors shadow-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-600 text-sm font-medium mb-1.5">電子信箱</label>
                        <div className="relative group focus-within:ring-1 focus-within:ring-brand-primary rounded-lg transition duration-200">
                            <i className="fas fa-envelope absolute left-3 top-3.5 text-gray-400 group-focus-within:text-brand-primary transition-colors"></i>
                            <input 
                                type="email" 
                                placeholder="name@example.com" 
                                className="w-full bg-white border border-gray-200 text-gray-900 rounded-lg py-3 pl-10 pr-4 outline-none placeholder-gray-400 focus:border-brand-primary transition-colors shadow-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-600 text-sm font-medium mb-1.5">設定密碼</label>
                        <div className="relative group focus-within:ring-1 focus-within:ring-brand-primary rounded-lg transition duration-200">
                            <i className="fas fa-lock absolute left-3 top-3.5 text-gray-400 group-focus-within:text-brand-primary transition-colors"></i>
                            <input 
                                type={showPassword ? "text" : "password"} 
                                placeholder="至少 8 個字元" 
                                className="w-full bg-white border border-gray-200 text-gray-900 rounded-lg py-3 pl-10 pr-10 outline-none placeholder-gray-400 focus:border-brand-primary transition-colors shadow-sm"
                            />
                            <button 
                                type="button" 
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600 transition"
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
                                className="mt-1 w-4 h-4 rounded bg-white border-gray-300 text-brand-primary focus:ring-brand-primary accent-brand-primary"
                            />
                            <span className="text-sm text-gray-500 group-hover:text-gray-700 transition leading-snug">
                                [必填] 我已年滿 <span className="text-brand-adult font-bold">18 歲</span>，並同意服務條款。
                            </span>
                        </label>
                        
                        <label className="flex items-start gap-3 cursor-pointer group">
                            <input 
                                type="checkbox" 
                                defaultChecked 
                                className="mt-1 w-4 h-4 rounded bg-white border-gray-300 text-brand-primary focus:ring-brand-primary accent-brand-primary"
                            />
                            <span className="text-sm text-gray-500 group-hover:text-gray-700 transition leading-snug">
                                [選填] 訂閱電子報，獲取每週補丁更新通知。
                            </span>
                        </label>
                    </div>

                    <Button 
                        variant="primary" 
                        size="lg" 
                        className="w-full shadow-md font-bold text-lg py-3.5"
                    >
                        立即註冊
                    </Button>

                </form>
            </div>

            {/* Footer Area inside card */}
            <div className="bg-gray-50 py-4 text-center border-t border-gray-200">
                <p className="text-sm text-gray-500">
                    已經有帳號了嗎？ 
                    <button onClick={onLogin} className="ml-1 text-brand-primary hover:text-brand-secondary font-bold transition hover:underline">
                        登入
                    </button>
                </p>
            </div>
        </div>
    </div>
  );
};