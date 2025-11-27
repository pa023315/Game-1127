
import React from 'react';
import { Button } from '../components/Button';

interface DashboardProps {
    onShowToast: (msg: string, type?: 'success' | 'info') => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onShowToast }) => {
  return (
    <div className="flex-grow flex flex-col relative bg-[url('https://picsum.photos/id/180/1920/1080')] bg-fixed bg-cover animate-fade-in">
        <div className="absolute inset-0 bg-slate-950/90 pointer-events-none"></div>

        <main className="container mx-auto px-4 py-8 flex-grow relative z-10">
            
            <div className="mb-6 flex items-center gap-2">
                <span className="text-slate-500 text-sm">首頁 /</span>
                <span className="text-white text-sm font-bold">會員控制台</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left Sidebar: Profile & Wallet */}
                <aside className="lg:col-span-3 space-y-6">
                    
                    {/* Profile Card */}
                    <div className="glass-panel rounded-2xl p-6 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-purple-900/50 to-transparent z-0"></div>
                        
                        <div className="relative z-10">
                            <div className="relative inline-block mb-4 group cursor-pointer">
                                <img src="https://picsum.photos/id/64/150/150" className="w-24 h-24 rounded-full border-4 border-slate-800 shadow-xl group-hover:border-brand-accent transition duration-300" alt="Avatar" />
                                <div className="absolute bottom-0 right-0 bg-brand-accent text-white w-8 h-8 flex items-center justify-center rounded-full border-2 border-slate-800 shadow-lg" title="白金會員">
                                    <i className="fas fa-crown text-sm"></i>
                                </div>
                            </div>
                            <h2 className="text-xl font-bold text-white mb-1">GentleGamer</h2>
                            <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-4 shadow-lg shadow-purple-500/20">
                                Platinum Member
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 border-t border-slate-700 pt-4 mt-2">
                                <div>
                                    <div className="text-xs text-slate-500 mb-1">加入時間</div>
                                    <div className="text-sm text-white font-mono">2023/11/01</div>
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 mb-1">累計下載</div>
                                    <div className="text-sm text-white font-mono">42 次</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Wallet Card */}
                    <div className="glass-panel rounded-2xl p-6">
                        <h3 className="text-slate-400 text-xs font-bold uppercase mb-4 flex items-center gap-2">
                            <i className="fas fa-wallet"></i> 我的資產 (G-Coins)
                        </h3>
                        <div className="flex items-end justify-between mb-2">
                            <span className="text-4xl font-bold text-white font-mono tracking-tight text-shadow-lg">1,280</span>
                            <span className="text-yellow-400 text-lg mb-1 animate-bounce"><i className="fas fa-coins"></i></span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-1.5 mb-4 overflow-hidden">
                            <div className="bg-brand-primary h-1.5 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" style={{width: '70%'}}></div>
                        </div>
                        <div className="flex gap-2">
                            <button className="flex-1 bg-brand-primary hover:bg-emerald-500 text-slate-900 font-bold py-2 rounded text-sm transition shadow-lg shadow-emerald-500/20">
                                去抽獎
                            </button>
                            <button className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-2 rounded text-sm transition border border-slate-600">
                                積分紀錄
                            </button>
                        </div>
                    </div>

                    {/* Quick Menu */}
                    <div className="glass-panel rounded-2xl p-4">
                        <ul className="space-y-1">
                            <li>
                                <a href="#" className="flex items-center gap-3 text-slate-300 hover:text-white hover:bg-slate-800/50 px-3 py-2 rounded transition group">
                                    <i className="fas fa-user-cog w-5 text-center text-slate-500 group-hover:text-brand-primary transition"></i> 帳號設定
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 text-slate-300 hover:text-white hover:bg-slate-800/50 px-3 py-2 rounded transition group">
                                    <i className="fas fa-key w-5 text-center text-slate-500 group-hover:text-brand-primary transition"></i> 修改密碼
                                </a>
                            </li>
                            <div className="h-px bg-slate-800 my-1"></div>
                            <li>
                                <a href="#" className="flex items-center gap-3 text-red-400 hover:text-red-300 hover:bg-red-900/10 px-3 py-2 rounded transition">
                                    <i className="fas fa-sign-out-alt w-5 text-center"></i> 登出
                                </a>
                            </li>
                        </ul>
                    </div>

                </aside>

                {/* Right Content */}
                <div className="lg:col-span-9 space-y-8">
                    
                    {/* Quest Board */}
                    <section>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <i className="fas fa-scroll text-brand-primary"></i> 每日任務
                            </h3>
                            <span className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                                <i className="far fa-clock mr-1"></i> 每日 00:00 重置
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Quest 1 (Completed) */}
                            <div className="bg-slate-900/80 border border-brand-primary/30 rounded-xl p-4 relative overflow-hidden group hover:bg-slate-900 transition">
                                <div className="absolute right-2 top-2 text-brand-primary opacity-20 group-hover:opacity-40 transition"><i className="fas fa-check-circle text-4xl"></i></div>
                                <div className="flex justify-between items-start mb-2 relative z-10">
                                    <span className="text-white font-bold">每日登入</span>
                                    <span className="bg-brand-primary/20 text-brand-primary text-xs px-2 py-0.5 rounded font-bold">+5 G</span>
                                </div>
                                <p className="text-xs text-slate-400 mb-3 relative z-10">登入網站即可完成。</p>
                                <div className="w-full bg-slate-800 rounded-full h-1.5 mb-2 overflow-hidden">
                                    <div className="bg-brand-primary h-1.5 rounded-full" style={{width: '100%'}}></div>
                                </div>
                                <button disabled className="w-full bg-slate-800 text-brand-primary text-xs font-bold py-1.5 rounded cursor-default border border-brand-primary/20 flex items-center justify-center gap-1">
                                    <i className="fas fa-check"></i> 已領取
                                </button>
                            </div>

                            {/* Quest 2 (In Progress) */}
                            <div className="glass-panel rounded-xl p-4 border-slate-700 hover:border-slate-600 transition">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-white font-bold">閱讀文章</span>
                                    <span className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-0.5 rounded font-bold">+15 G</span>
                                </div>
                                <p className="text-xs text-slate-400 mb-3">閱讀 3 篇新聞或評測。</p>
                                <div className="flex justify-between text-[10px] text-slate-500 mb-1">
                                    <span>進度</span>
                                    <span>1 / 3</span>
                                </div>
                                <div className="w-full bg-slate-800 rounded-full h-1.5 mb-2 overflow-hidden">
                                    <div className="bg-yellow-400 h-1.5 rounded-full" style={{width: '33%'}}></div>
                                </div>
                                <button onClick={() => onShowToast('前往新聞區...', 'info')} className="w-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold py-1.5 rounded transition border border-slate-600">
                                    去閱讀
                                </button>
                            </div>

                            {/* Quest 3 (Not Started) */}
                            <div className="glass-panel rounded-xl p-4 border-slate-700 hover:border-slate-600 transition">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-white font-bold">分享補丁</span>
                                    <span className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-0.5 rounded font-bold">+20 G</span>
                                </div>
                                <p className="text-xs text-slate-400 mb-3">將任一補丁頁面分享至社群。</p>
                                <div className="flex justify-between text-[10px] text-slate-500 mb-1">
                                    <span>進度</span>
                                    <span>0 / 1</span>
                                </div>
                                <div className="w-full bg-slate-800 rounded-full h-1.5 mb-2">
                                    <div className="bg-slate-700 h-1.5 rounded-full" style={{width: '0%'}}></div>
                                </div>
                                <button onClick={() => onShowToast('請選擇補丁進行分享', 'info')} className="w-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold py-1.5 rounded transition border border-slate-600">
                                    去分享
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Tracked Games */}
                    <section>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <i className="fas fa-heart text-pink-500"></i> 我的追蹤
                            </h3>
                            <a href="#" className="text-xs text-slate-400 hover:text-white transition">管理名單 &gt;</a>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {/* Item 1 */}
                            <div className="group relative bg-slate-900 rounded-lg overflow-hidden border border-slate-700 cursor-pointer hover:border-brand-primary/50 transition duration-300">
                                <div className="absolute top-2 right-2 z-10">
                                    <span className="flex h-3 w-3">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                    </span>
                                </div>
                                <div className="aspect-[3/4] overflow-hidden">
                                     <img src="https://picsum.photos/id/122/300/400" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="Cover" />
                                </div>
                                <div className="p-3 bg-slate-900 relative">
                                    <h4 className="text-sm font-bold text-white truncate group-hover:text-brand-primary transition">Cyberpunk 2077</h4>
                                    <p className="text-xs text-red-400 mt-1 font-bold flex items-center gap-1">
                                        <i className="fas fa-arrow-up"></i> v2.12b 更新
                                    </p>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="group bg-slate-900 rounded-lg overflow-hidden border border-slate-700 cursor-pointer hover:border-slate-500 transition duration-300">
                                <div className="aspect-[3/4] overflow-hidden">
                                    <img src="https://picsum.photos/id/184/300/400" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="Cover" />
                                </div>
                                <div className="p-3 bg-slate-900">
                                    <h4 className="text-sm font-bold text-white truncate">Elden Ring</h4>
                                    <p className="text-xs text-slate-500 mt-1">最新: v1.09</p>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="group bg-slate-900 rounded-lg overflow-hidden border border-slate-700 cursor-pointer hover:border-slate-500 transition duration-300">
                                <div className="aspect-[3/4] overflow-hidden">
                                     <img src="https://picsum.photos/id/54/300/400" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="Cover" />
                                </div>
                                <div className="p-3 bg-slate-900">
                                    <h4 className="text-sm font-bold text-white truncate">Baldur's Gate 3</h4>
                                    <p className="text-xs text-slate-500 mt-1">最新: Patch 5</p>
                                </div>
                            </div>

                            {/* Add New */}
                            <div className="border-2 border-dashed border-slate-800 rounded-lg flex flex-col items-center justify-center text-slate-500 hover:text-white hover:border-brand-primary hover:bg-slate-900/50 transition cursor-pointer min-h-[200px]">
                                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-2 group-hover:bg-brand-primary group-hover:text-slate-900 transition">
                                    <i className="fas fa-plus text-xl"></i>
                                </div>
                                <span className="text-sm font-bold">新增追蹤</span>
                            </div>
                        </div>
                    </section>

                    {/* Activity Log (Optional per prompt, added simple table) */}
                    <section>
                         <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                            <i className="fas fa-history text-slate-400"></i> 最近活動
                        </h3>
                        <div className="glass-panel rounded-xl overflow-hidden border border-slate-700">
                            <table className="w-full text-left text-sm text-slate-400">
                                <thead className="bg-slate-900 text-xs uppercase font-bold text-slate-500">
                                    <tr>
                                        <th className="p-3 pl-4">活動</th>
                                        <th className="p-3">項目</th>
                                        <th className="p-3 text-right pr-4">時間</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800">
                                    <tr>
                                        <td className="p-3 pl-4 text-brand-primary">下載補丁</td>
                                        <td className="p-3 text-white">Nier: Automata v2.0 Final</td>
                                        <td className="p-3 text-right pr-4">2 小時前</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 pl-4 text-blue-400">參加抽獎</td>
                                        <td className="p-3 text-white">原神 刻晴 1/7 手辦模型</td>
                                        <td className="p-3 text-right pr-4">昨天</td>
                                    </tr>
                                     <tr>
                                        <td className="p-3 pl-4 text-yellow-400">獲得積分</td>
                                        <td className="p-3 text-white">每日登入獎勵 (+5G)</td>
                                        <td className="p-3 text-right pr-4">昨天</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                </div>
            </div>
        </main>
    </div>
  );
};
