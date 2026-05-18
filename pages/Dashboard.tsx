import React from 'react';

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className="flex-grow flex flex-col relative bg-[url('https://picsum.photos/id/180/1920/1080')] bg-fixed bg-cover animate-fade-in pt-20">
        <div className="absolute inset-0 bg-brand-mainBg/90 pointer-events-none"></div>

        <main className="container mx-auto px-4 py-8 flex-grow relative z-10">
            
            <div className="mb-6 flex items-center gap-2">
                <span className="text-gray-500 text-sm">首頁 /</span>
                <span className="text-gray-900 text-sm font-bold">會員控制台</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left Sidebar: Profile & Wallet */}
                <aside className="lg:col-span-3 space-y-6">
                    
                    {/* Profile Card */}
                    <div className="bg-brand-card shadow-sm border border-gray-100 rounded-2xl p-6 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-purple-100/50 to-transparent z-0"></div>
                        
                        <div className="relative z-10">
                            <div className="relative inline-block mb-4 group cursor-pointer">
                                <img src="https://picsum.photos/id/64/150/150" className="w-24 h-24 rounded-full border-4 border-white shadow-xl group-hover:border-brand-primary transition duration-300" alt="Avatar" />
                                <div className="absolute bottom-0 right-0 bg-brand-primary text-white w-8 h-8 flex items-center justify-center rounded-full border-2 border-white shadow-lg" title="白金會員">
                                    <i className="fas fa-crown text-sm"></i>
                                </div>
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 mb-1">GentleGamer</h2>
                            <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-4 shadow-sm shadow-purple-500/20">
                                Platinum Member
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-4 mt-2">
                                <div>
                                    <div className="text-xs text-gray-500 mb-1">加入時間</div>
                                    <div className="text-sm text-gray-900 font-mono">2023/11/01</div>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 mb-1">累計下載</div>
                                    <div className="text-sm text-gray-900 font-mono">42 次</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Menu */}
                    <div className="bg-brand-card shadow-sm border border-gray-100 rounded-2xl p-4 mt-6">
                        <ul className="space-y-1">
                            <li>
                                <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-brand-primary hover:bg-gray-50 px-3 py-2 rounded transition group">
                                    <i className="fas fa-user-cog w-5 text-center text-gray-400 group-hover:text-brand-primary transition"></i> 帳號設定
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-brand-primary hover:bg-gray-50 px-3 py-2 rounded transition group">
                                    <i className="fas fa-key w-5 text-center text-gray-400 group-hover:text-brand-primary transition"></i> 修改密碼
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-brand-primary hover:bg-gray-50 px-3 py-2 rounded transition group">
                                    <i className="fas fa-envelope w-5 text-center text-gray-400 group-hover:text-brand-primary transition"></i> 訂閱電子報
                                </a>
                            </li>
                            <div className="h-px bg-gray-100 my-1"></div>
                            <li>
                                <a href="#" className="flex items-center gap-3 text-red-500 hover:text-red-600 hover:bg-red-50 px-3 py-2 rounded transition">
                                    <i className="fas fa-sign-out-alt w-5 text-center"></i> 登出
                                </a>
                            </li>
                        </ul>
                    </div>

                </aside>

                {/* Right Content */}
                <div className="lg:col-span-9 space-y-8">
                    
                    {/* Tracked Games */}
                    <section>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                <i className="fas fa-heart text-brand-primary"></i> 我的追蹤
                            </h3>
                            <a href="#" className="text-xs text-gray-500 hover:text-brand-primary transition">管理名單 &gt;</a>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {/* Item 1 */}
                            <div className="group relative bg-brand-card shadow-sm rounded-lg overflow-hidden border border-gray-100 cursor-pointer hover:border-brand-primary/50 transition duration-300">
                                <div className="absolute top-2 right-2 z-10">
                                    <span className="flex h-3 w-3">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                    </span>
                                </div>
                                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                                     <img src="https://picsum.photos/id/122/300/400" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="Cover" />
                                </div>
                                <div className="p-3 bg-white relative">
                                    <h4 className="text-sm font-bold text-gray-900 truncate group-hover:text-brand-primary transition">Cyberpunk 2077</h4>
                                    <p className="text-xs text-brand-primary mt-1 font-bold flex items-center gap-1">
                                        <i className="fas fa-arrow-up"></i> v2.12b 更新
                                    </p>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="group bg-brand-card shadow-sm rounded-lg overflow-hidden border border-gray-100 cursor-pointer hover:border-brand-primary/50 transition duration-300">
                                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                                    <img src="https://picsum.photos/id/184/300/400" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="Cover" />
                                </div>
                                <div className="p-3 bg-white">
                                    <h4 className="text-sm font-bold text-gray-900 truncate">Elden Ring</h4>
                                    <p className="text-xs text-gray-500 mt-1">最新: v1.09</p>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="group bg-brand-card shadow-sm rounded-lg overflow-hidden border border-gray-100 cursor-pointer hover:border-brand-primary/50 transition duration-300">
                                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                                     <img src="https://picsum.photos/id/54/300/400" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="Cover" />
                                </div>
                                <div className="p-3 bg-white">
                                    <h4 className="text-sm font-bold text-gray-900 truncate">Baldur's Gate 3</h4>
                                    <p className="text-xs text-gray-500 mt-1">最新: Patch 5</p>
                                </div>
                            </div>

                            {/* Add New */}
                            <div className="border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center text-gray-400 hover:text-brand-primary hover:border-brand-primary/50 hover:bg-gray-50 transition cursor-pointer min-h-[200px] bg-brand-card shadow-sm">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2 group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition">
                                    <i className="fas fa-plus text-xl"></i>
                                </div>
                                <span className="text-sm font-bold">新增追蹤</span>
                            </div>
                        </div>
                    </section>

                    {/* Activity Log (Optional per prompt, added simple table) */}
                    <section>
                         <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
                            <i className="fas fa-history text-gray-400"></i> 最近活動
                        </h3>
                        <div className="bg-brand-card shadow-sm rounded-xl overflow-hidden border border-gray-100">
                            <table className="w-full text-left text-sm text-gray-600">
                                <thead className="bg-gray-50 text-xs uppercase font-bold text-gray-500">
                                    <tr>
                                        <th className="p-3 pl-4">活動</th>
                                        <th className="p-3">項目</th>
                                        <th className="p-3 text-right pr-4">時間</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr>
                                        <td className="p-3 pl-4 text-brand-primary">下載補丁</td>
                                        <td className="p-3 text-gray-900">Nier: Automata v2.0 Final</td>
                                        <td className="p-3 text-right pr-4">2 小時前</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 pl-4 text-brand-secondary">參加抽獎</td>
                                        <td className="p-3 text-gray-900">原神 刻晴 1/7 手辦模型</td>
                                        <td className="p-3 text-right pr-4">昨天</td>
                                    </tr>
                                     <tr>
                                        <td className="p-3 pl-4 text-brand-rating">獲得積分</td>
                                        <td className="p-3 text-gray-900">每日登入獎勵 (+5G)</td>
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