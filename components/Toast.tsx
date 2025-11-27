import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
      <div className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-2xl border ${
        type === 'success' 
          ? 'bg-slate-900/95 border-brand-primary/50 text-white shadow-brand-primary/20' 
          : 'bg-slate-900/95 border-blue-500/50 text-white shadow-blue-500/20'
      } backdrop-blur-md min-w-[300px]`}>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${type === 'success' ? 'bg-brand-primary/20 text-brand-primary' : 'bg-blue-500/20 text-blue-400'}`}>
             <i className={`${type === 'success' ? 'fas fa-check' : 'fas fa-info'}`}></i>
        </div>
        <div>
            <h4 className="font-bold text-sm">{type === 'success' ? '成功' : '提示'}</h4>
            <p className="text-slate-300 text-sm">{message}</p>
        </div>
        <button onClick={onClose} className="ml-auto text-slate-500 hover:text-white">
            <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};