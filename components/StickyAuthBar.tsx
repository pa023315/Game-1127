
import React from 'react';
import { Button } from './Button';

interface StickyAuthBarProps {
    onLogin: () => void;
    onRegister: () => void;
}

export const StickyAuthBar: React.FC<StickyAuthBarProps> = ({ onLogin, onRegister }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-slate-900/90 backdrop-blur-md border-t border-slate-700 p-4 z-40 animate-fade-in-up">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-primary/20 rounded-full flex items-center justify-center text-brand-primary shrink-0 animate-pulse">
                    <i className="fas fa-exclamation"></i>
                </div>
                <div>
                    <div className="text-white font-bold text-sm md:text-base">您尚未登入</div>
                    <div className="text-slate-400 text-xs md:text-sm">登入後即可免費參加上述所有福利活動，並領取專屬獎勵。</div>
                </div>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
                <Button variant="ghost" size="sm" onClick={onLogin} className="flex-1 md:flex-none">
                    已有帳號？登入
                </Button>
                <Button variant="primary" size="sm" onClick={onRegister} className="flex-1 md:flex-none whitespace-nowrap">
                    快速註冊
                </Button>
            </div>
        </div>
    </div>
  );
};
