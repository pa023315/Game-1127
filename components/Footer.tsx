
import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="relative z-10 bg-brand-card pt-16 pb-16 border-t border-gray-200">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
                    
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-4">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-brand-rating rounded flex items-center justify-center font-bold text-white text-xl">
                                H
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-2xl font-bold text-gray-900 tracking-wide">Hgamer</span>
                                <span className="text-2xl font-bold text-brand-rating" style={{ fontFamily: '"Noto Sans TC", sans-serif' }}>紳士玩家</span>
                            </div>
                        </div>
                        <p className="text-[15px] text-gray-500 leading-relaxed mb-6 max-w-sm">
                            提供最完整的成人遊戲&小黃遊遊戲心得與評測，致力於為玩家帶來最佳遊戲體驗。
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-brand-rating hover:text-white transition"><i className="fab fa-x-twitter text-sm"></i></a>
                            <a href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-brand-rating hover:text-white transition"><i className="fab fa-discord text-sm"></i></a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="col-span-1 md:col-span-2 md:col-start-6">
                        <h3 className="text-gray-900 font-bold mb-6 tracking-wider text-[15px]">網站導覽</h3>
                        <ul className="space-y-4 text-[15px] text-gray-500">
                            <li><a href="#" className="hover:text-brand-rating transition">首頁</a></li>
                            <li><a href="#" className="hover:text-brand-rating transition">新聞</a></li>
                            <li><a href="#" className="hover:text-brand-rating transition">補丁資源</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-gray-900 font-bold mb-6 tracking-wider text-[15px]">支援</h3>
                        <ul className="space-y-4 text-[15px] text-gray-500">
                            <li><a href="#" className="hover:text-gray-900 transition">常見問題</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition">使用條款</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition">隱私政策</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition">聯絡我們</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-span-1 md:col-span-3">
                        <h3 className="text-gray-900 font-bold mb-6 tracking-wider text-[15px]">訂閱電子報</h3>
                        <p className="text-[15px] text-gray-500 mb-4">獲取最新成人遊戲&小黃遊資訊</p>
                        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input 
                                type="email" 
                                placeholder="Email" 
                                className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-[15px] rounded px-4 py-2 outline-none focus:border-brand-rating transition placeholder-gray-400" 
                            />
                            <button className="bg-brand-rating hover:brightness-110 text-white text-[15px] font-bold px-5 py-2 rounded transition whitespace-nowrap">
                                訂閱
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </footer>
    );
};
