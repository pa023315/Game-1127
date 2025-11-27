import React from 'react';
import { MOCK_PATCHES } from '../types';

interface PatchRepoProps {
    onShowToast: (msg: string, type?: 'success' | 'info') => void;
}

export const PatchRepository: React.FC<PatchRepoProps> = ({ onShowToast }) => {
  const handleDownload = (gameTitle: string) => {
    onShowToast(`開始下載 ${gameTitle} 資源...`, 'success');
  };

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
       <div className="flex flex-col md:flex-row justify-between items-end mb-8">
            <div>
                 <h2 className="text-3xl font-bold flex items-center gap-3 text-white">
                    <i className="fas fa-database text-brand-primary"></i> 
                    補丁資料庫
                </h2>
                <p className="text-slate-400 mt-2">瀏覽完整的驗證模組與漢化索引。</p>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
                <button className="bg-slate-800 text-white p-2 rounded hover:bg-slate-700 transition"><i className="fas fa-list"></i></button>
                <button className="bg-transparent text-slate-500 p-2 rounded hover:text-white transition"><i className="fas fa-th-large"></i></button>
            </div>
       </div>
    
        <div className="glass-panel rounded-lg overflow-hidden border border-slate-700 shadow-2xl">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse whitespace-nowrap md:whitespace-normal">
                    <thead>
                        <tr className="bg-slate-950/80 text-slate-400 text-xs uppercase tracking-wider border-b border-slate-700">
                            <th className="p-4 pl-6 font-medium">遊戲名稱</th>
                            <th className="p-4 font-medium hidden md:table-cell">版本</th>
                            <th className="p-4 font-medium hidden sm:table-cell">大小</th>
                            <th className="p-4 font-medium hidden lg:table-cell">更新日期</th>
                            <th className="p-4 font-medium text-center hidden md:table-cell">標籤</th>
                            <th className="p-4 pr-6 font-medium text-right">操作</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                        {MOCK_PATCHES.map((patch) => (
                            <tr key={patch.id} className="hover:bg-slate-800/40 transition group">
                                <td className="p-4 pl-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded overflow-hidden bg-slate-800 flex-shrink-0">
                                            <img src={patch.imageUrl} className="w-full h-full object-cover" alt="icon"/>
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-200 group-hover:text-brand-primary transition-colors">{patch.gameTitle}</div>
                                            <div className="text-xs text-slate-500">ID: {patch.id.toUpperCase()} <span className="md:hidden">• {patch.version}</span></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4 hidden md:table-cell">
                                    <span className="font-mono text-sm bg-slate-900 border border-slate-700 px-2 py-1 rounded text-brand-light">
                                        {patch.version}
                                    </span>
                                </td>
                                <td className="p-4 text-slate-400 text-sm font-mono hidden sm:table-cell">{patch.size}</td>
                                <td className="p-4 text-slate-400 text-sm hidden lg:table-cell">{patch.date}</td>
                                <td className="p-4 text-center hidden md:table-cell">
                                    <div className="flex gap-1 justify-center">
                                        {patch.tags.map(tag => (
                                            <span key={tag} className="text-[10px] border border-slate-700 text-slate-500 px-1.5 py-0.5 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                                <td className="p-4 pr-6 text-right">
                                    <button 
                                        onClick={() => handleDownload(patch.gameTitle)}
                                        className="text-brand-primary hover:text-emerald-400 hover:bg-emerald-500/10 p-2 rounded-full transition-all"
                                        title="下載"
                                    >
                                        <i className="fas fa-download text-lg"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {/* Duplicate rows for visual density */}
                        {[...Array(3)].map((_, i) => (
                             <tr key={i} className="hover:bg-slate-800/40 transition group opacity-50">
                                <td className="p-4 pl-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded bg-slate-800 animate-pulse"></div>
                                        <div>
                                            <div className="font-bold text-slate-200">封存記錄 #{1020 + i}</div>
                                            <div className="text-xs text-slate-500">舊版</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4 hidden md:table-cell"><span className="text-xs text-slate-600">v1.0</span></td>
                                <td className="p-4 text-slate-600 text-sm font-mono hidden sm:table-cell">--</td>
                                <td className="p-4 text-slate-600 text-sm hidden lg:table-cell">2021-01-01</td>
                                <td className="p-4 hidden md:table-cell"></td>
                                <td className="p-4 pr-6 text-right">
                                    <i className="fas fa-lock text-slate-700"></i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <div className="p-4 border-t border-slate-800 bg-slate-900/50 flex flex-col sm:flex-row gap-4 justify-between items-center text-xs text-slate-500">
                <span>顯示 1,240 筆中的 1-10 筆</span>
                <div className="flex gap-2">
                    <button className="hover:text-white px-2">上一頁</button>
                    <button className="text-white font-bold bg-slate-800 px-2 rounded">1</button>
                    <button className="hover:text-white px-2">2</button>
                    <button className="hover:text-white px-2">3</button>
                    <span className="px-1">...</span>
                    <button className="hover:text-white px-2">下一頁</button>
                </div>
            </div>
        </div>
    </div>
  );
};