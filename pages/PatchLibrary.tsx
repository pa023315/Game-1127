import React, { useState } from 'react';
import { MOCK_PATCHES } from '../types';

interface PatchLibraryProps {
    onNavigateToDetail: (id: string) => void;
    onShowToast: (msg: string, type?: 'success' | 'info') => void;
}

export const PatchLibrary: React.FC<PatchLibraryProps> = ({ onNavigateToDetail }) => {
  const [sort, setSort] = useState('更新時間');
  
  // Fake "Hot" Data
  const hotPatches = MOCK_PATCHES.slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in min-h-screen pt-24">
       
       {/* 1. 頂部篩選器 (Filter Bar) */}
       <div className="bg-brand-card border border-gray-100 rounded-lg p-4 mb-12 flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm">
          <div className="flex gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              <div className="flex items-center gap-2 min-w-fit">
                  <span className="text-gray-500 text-sm font-bold"><i className="fas fa-sort mr-1"></i> 排序:</span>
                  <select 
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded px-3 py-1.5 focus:border-brand-primary focus:outline-none"
                  >
                      <option>更新時間</option>
                      <option>下載量</option>
                      <option>評分</option>
                  </select>
              </div>
              <div className="flex items-center gap-2 min-w-fit">
                  <span className="text-gray-500 text-sm font-bold"><i className="fas fa-tags mr-1"></i> 標籤:</span>
                  <select className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded px-3 py-1.5 focus:border-brand-primary focus:outline-none">
                      <option>所有標籤</option>
                      <option>漢化</option>
                      <option>去碼</option>
                      <option>魔改</option>
                  </select>
              </div>
          </div>

          <div className="relative w-full md:w-64">
              <input 
                type="text" 
                placeholder="搜尋補丁..."
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded px-4 py-2 pl-10 focus:border-brand-primary focus:outline-none transition-all placeholder-gray-400"
              />
              <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
          </div>
       </div>

       {/* 2. 本週熱門補丁 (Weekly Hot) */}
       <div className="mb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center border-l-4 border-brand-primary pl-3">
              <i className="fas fa-fire-alt text-brand-primary mr-2"></i> 本週熱門 Top 4
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {hotPatches.map((patch, index) => (
                  <div 
                    key={`hot-${patch.id}`}
                    onClick={() => onNavigateToDetail(patch.id)}
                    className="group block bg-brand-card rounded-xl overflow-hidden border border-gray-100 hover:border-brand-primary/50 transition duration-300 shadow-sm hover:shadow-md relative cursor-pointer"
                  >
                      {/* Ranking Badge */}
                      <div className="absolute top-2 left-2 z-10">
                          <span className="bg-brand-primary text-white text-xs font-bold px-2 py-1 rounded shadow shadow-brand-primary/50">
                                #{index + 1}
                          </span>
                      </div>

                      <div className="aspect-[4/3] overflow-hidden relative bg-gray-100">
                          <img src={patch.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-in-out" alt={patch.gameTitle} />
                          <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center backdrop-blur-[1px]">
                                <span className="text-gray-900 font-bold border border-gray-300 px-3 py-1.5 rounded-full backdrop-blur-md bg-white/50 text-xs">
                                    查看詳情
                                </span>
                          </div>
                      </div>
                      
                      <div className="p-4">
                          <h3 className="text-gray-900 font-bold text-base leading-tight truncate group-hover:text-brand-primary transition">
                                {patch.gameTitle}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                                <span className="text-[10px] font-mono text-brand-primary bg-brand-primary/10 px-1.5 py-0.5 rounded border border-brand-primary/20">
                                    {patch.version}
                                </span>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
       </div>

       {/* 3. 主要列表 (Main Grid View) */}
       <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center border-l-4 border-brand-primary pl-3">
                    <i className="fas fa-th-large text-brand-primary mr-3"></i> 所有補丁資源
                </h2>
                <span className="text-xs text-gray-500">共 {MOCK_PATCHES.length * 3} 筆結果</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...MOCK_PATCHES, ...MOCK_PATCHES, ...MOCK_PATCHES].map((patch, idx) => (
                    <div 
                        key={`${patch.id}-${idx}`}
                        onClick={() => onNavigateToDetail(patch.id)} 
                        className="group block bg-brand-card rounded-xl overflow-hidden border border-gray-100 hover:border-brand-primary/50 transition duration-300 relative shadow-sm hover:shadow-md cursor-pointer"
                    >
                        <div className="aspect-video overflow-hidden relative bg-gray-100">
                            {/* Placeholder for loading state could go here */}
                            <img 
                                src={patch.imageUrl} 
                                alt={patch.gameTitle} 
                                className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-in-out" 
                            />
                            
                            <div className="absolute top-2 left-2">
                                <span className="bg-black/60 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded border border-white/10 uppercase tracking-wide">
                                    Patch Ready
                                </span>
                            </div>

                            <div className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                <i className="fas fa-expand text-brand-primary text-3xl transform scale-50 group-hover:scale-100 transition duration-300"></i>
                            </div>
                        </div>

                        <div className="p-4 relative bg-brand-card">
                            <h3 className="text-gray-900 font-bold text-lg leading-tight mb-1 truncate group-hover:text-brand-primary transition">
                                {patch.gameTitle}
                            </h3>
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-500 font-mono bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">
                                    {patch.version}
                                </span>
                                <i className="fas fa-chevron-right text-xs text-gray-400 group-hover:text-brand-primary transition-transform group-hover:translate-x-1"></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-12 flex justify-center gap-2">
                <button className="w-10 h-10 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition flex items-center justify-center"><i className="fas fa-chevron-left"></i></button>
                <button className="w-10 h-10 rounded-lg bg-brand-primary text-white font-bold flex items-center justify-center shadow-md">1</button>
                <button className="w-10 h-10 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition flex items-center justify-center">2</button>
                <button className="w-10 h-10 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition flex items-center justify-center"><i className="fas fa-chevron-right"></i></button>
            </div>
       </div>
    </div>
  );
};