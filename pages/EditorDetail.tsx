import React from 'react';
import { MOCK_LATEST_NEWS } from '../types';

interface EditorDetailProps {
    onBack: () => void;
    onShowToast: (msg: string, type?: 'success' | 'info') => void;
}

export const EditorDetail: React.FC<EditorDetailProps> = ({ onBack, onShowToast }) => {
    return (
        <div className="min-h-screen pt-24 pb-20 bg-brand-mainBg">
            <div className="max-w-4xl mx-auto px-4">
                
                {/* Breadcrumb */}
                <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
                    <button onClick={onBack} className="hover:text-brand-primary transition">關於站長</button>
                    <span>&gt;</span>
                    <span className="text-gray-900 font-bold">作者頁面</span>
                </div>

                {/* Editor Profile Header */}
                <div className="bg-brand-card rounded border border-gray-200 shadow-sm p-8 mb-8 flex flex-col md:flex-row gap-8 items-center md:items-start group">
                    <div className="w-32 h-32 shrink-0 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm relative">
                        <img src="https://picsum.photos/id/1025/400/400" alt="歪力" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2 font-serif">作者／歪力</h1>
                        <p className="text-gray-500 mb-4 text-sm font-mono tracking-wide">資深遊戲人，半路上車老司機。</p>
                        <p className="text-gray-700 leading-relaxed max-w-2xl font-serif text-justify">
                            喜好劇情向與動作射擊遊戲。從前信仰聖光，後來才知道是另一種會擋住關鍵畫面的聖光，矢志探求那道光後面潛藏的人體奧妙。
                        </p>
                    </div>
                </div>

                {/* Articles List */}
                <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2 flex justify-between items-center">
                        <span>過往撰寫文章</span>
                        <span className="text-sm font-normal text-gray-500">共 {MOCK_LATEST_NEWS.length} 篇</span>
                    </h2>
                    
                    <div className="space-y-4">
                        {MOCK_LATEST_NEWS.map(news => (
                            <div key={news.id} onClick={() => onShowToast('閱讀文章...', 'info')} className="group flex flex-col md:flex-row gap-4 bg-brand-card rounded-md p-2 hover:bg-gray-50 transition cursor-pointer border-l-2 border-transparent hover:border-[#B8873A] shadow-sm mb-4">
                                <div className="w-full md:w-48 aspect-[16/9] rounded-sm overflow-hidden shrink-0 relative bg-gray-100 border border-gray-100">
                                    <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                                </div>
                                <div className="flex-1 flex flex-col justify-between py-1">
                                    <div>
                                        <div className="flex justify-between items-start mb-1">
                                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded text-white ${news.categoryColor}`}>
                                                {news.category}
                                            </span>
                                            <span className="text-[10px] text-gray-400 font-mono flex items-center gap-1"><i className="far fa-clock"></i> {news.timeAgo}</span>
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-lg line-clamp-2 mb-2 group-hover:text-[#B8873A] transition">
                                            {news.title}
                                        </h3>
                                    </div>
                                    <div className="flex gap-4 text-xs text-gray-400 font-mono">
                                        <span className="flex items-center gap-1 group-hover:text-red-500 transition"><i className="fas fa-heart"></i> {news.likes}</span>
                                        <span className="flex items-center gap-1 group-hover:text-blue-500 transition"><i className="fas fa-comment"></i> {news.comments}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};
