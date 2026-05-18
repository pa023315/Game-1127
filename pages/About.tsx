import React from 'react';

interface AboutProps {
    onNavigateEditorDetail: () => void;
}

export const About: React.FC<AboutProps> = ({ onNavigateEditorDetail }) => {
    return (
        <div className="min-h-screen pt-24 pb-20 bg-brand-mainBg">
            <div className="max-w-4xl mx-auto px-4">
                
                {/* 站長區塊 */}
                <div className="bg-brand-card rounded-2xl border border-gray-200 shadow-sm p-8 md:p-12 mb-8 text-center animate-fade-in-up">
                    <div className="w-24 h-24 mx-auto rounded-full bg-brand-mainBg border-2 border-[#D8CBB6] flex items-center justify-center text-[#B8873A] text-4xl mb-6 shadow-sm">
                        <i className="fas fa-gamepad"></i>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">色色倉鼠</h1>
                    <p className="text-[#B8873A] font-bold mb-8 text-sm md:text-base tracking-wide">Hgamer 紳士玩家 站長</p>
                    
                    <div className="flex items-center justify-center gap-4 text-[#D8CBB6] mb-8">
                        <div className="w-24 h-[1px] bg-[#D8CBB6]"></div>
                        <i className="far fa-heart"></i>
                        <div className="w-24 h-[1px] bg-[#D8CBB6]"></div>
                    </div>

                    <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto text-left md:text-center">
                        遊戲宅社畜，人到中年對 3A 大作反而提不起勁，發現小黃遊更能讓我提起精神。本身有蒐集整理的習慣，就想不如架個站放上網，方便自己也方便廣大的紳士玩家們。<br/><br/>
                        合作邀約請寄信至：<a href="mailto:hgamertw@gmail.com" className="text-brand-primary hover:text-[#B8873A] transition underline underline-offset-4">hgamertw@gmail.com</a>
                    </p>
                </div>

                {/* 其他編輯區塊 */}
                <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    
                    {/* 編輯 1: 歪力 */}
                    <div 
                        className="bg-brand-card rounded border border-gray-900 shadow-sm flex flex-col md:flex-row group cursor-pointer hover:border-[#B8873A] transition overflow-hidden"
                        onClick={onNavigateEditorDetail}
                    >
                        <div className="w-full md:w-64 shrink-0 border-b md:border-b-0 md:border-r border-gray-900 relative">
                            {/* Assuming a playful representation of the image since we don't have the exact image */}
                            <img src="https://picsum.photos/id/1025/400/400" alt="歪力" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition duration-500" />
                        </div>
                        <div className="p-6 md:p-8 flex-1">
                            <h3 className="text-2xl md:text-3xl text-[#4A6487] mb-6 flex items-center justify-between font-serif">
                                <span>作者／歪力</span>
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-base md:text-lg text-justify font-serif">
                                資深遊戲人，半路上車老司機。喜好劇情向與動作射擊遊戲。從前信仰聖光，後來才知道是另一種會擋住關鍵畫面的聖光，矢志探求那道光後面潛藏的人體奧妙。
                            </p>
                        </div>
                    </div>

                    {/* 編輯 2: 衝田 */}
                    <div 
                        className="bg-brand-card rounded border border-gray-900 shadow-sm flex flex-col md:flex-row group cursor-pointer hover:border-[#B8873A] transition overflow-hidden"
                        onClick={onNavigateEditorDetail}
                    >
                        <div className="w-full md:w-64 shrink-0 border-b md:border-b-0 md:border-r border-gray-900 relative">
                            <img src="https://picsum.photos/id/1012/400/400" alt="衝田" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition duration-500" />
                        </div>
                        <div className="p-6 md:p-8 flex-1">
                            <h3 className="text-2xl md:text-3xl text-[#4A6487] mb-6 flex items-center justify-between font-serif">
                                <span>編輯／紳選組　衝田</span>
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-base md:text-lg text-justify font-serif">
                                臨危受命的紳士玩家編輯長（假）。玩蘭斯系列長大的老紳士，曹氏宗親後援會會員，因年紀關係開始喜歡熟女，但 NYKD 先不要。
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};
