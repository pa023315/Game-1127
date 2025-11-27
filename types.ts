
export enum Page {
  HOME = 'HOME',
  NEWS = 'NEWS',
  PATCHES = 'PATCHES', // Maps to PatchLibrary
  GAME_DETAIL = 'GAME_DETAIL', // New Detail Page
  SUBSCRIBE = 'SUBSCRIBE', // Maps to EventHub (formerly CampaignLanding)
  NEWS_DETAIL = 'NEWS_DETAIL', // New Article Page
  SIGN_UP = 'SIGN_UP', // New Fullscreen Registration Page
  DASHBOARD = 'DASHBOARD', // User Dashboard
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  category: '新聞' | '評測' | '更新日誌' | '模組';
  date: string;
  imageUrl: string;
  isFeatured?: boolean;
  linkedPatchId?: string;
}

export interface PatchItem {
  id: string;
  gameTitle: string;
  version: string;
  size: string;
  date: string;
  downloads: number;
  imageUrl: string;
  tags: string[];
}

export interface GameDetail {
  id: string;
  title: string;
  titleEn: string;
  developer: string;
  releaseDate: string;
  description: string;
  tags: string[];
  coverUrl: string;
  price: string;
  platforms: string[];
  patch: {
    version: string;
    size: string;
    updateDate: string;
    features: string[];
    changelog: string[];
    installPath: string;
  }
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  type: 'raffle' | 'freebie' | 'exclusive' | 'challenge';
  typeLabel: string;
  timeLeft?: string;
  participants?: number;
  maxParticipants?: number; // If applicable
  requirement: 'Member' | 'VIP' | 'None';
  status: 'active' | 'ended';
}

export interface LatestNewsItem {
    id: string;
    title: string;
    imageUrl: string;
    category: string;
    categoryColor: string; // Tailwind bg class
    timeAgo: string;
    likes: number;
    comments: number;
}

// --- New Mock Data for Headlines ---

export const MOCK_HEADLINE_MAIN = {
  id: 'h1',
  title: '《星空 Starfield》必裝 MOD 總整理：UI 優化、畫質提升與成人模組指南',
  summary: 'Bethesda 新作發售首週，社群模組數量已突破 500 個。我們為您精選了 10 款能顯著改善遊戲體驗的核心模組，以及如何安全安裝它們的教學...',
  category: '深度評測',
  date: '4 小時前',
  imageUrl: 'https://picsum.photos/id/102/1200/800'
};

export const MOCK_HEADLINE_SIDE = [
    {
        id: 'hs1',
        category: '補丁情報',
        categoryColor: 'text-brand-primary',
        title: '《幻獸帕魯》v0.1.4 更新發布：修復崩潰問題並優化伺服器延遲',
        imageUrl: 'https://picsum.photos/id/103/200/150'
    },
    {
        id: 'hs2',
        category: '漢化更新',
        categoryColor: 'text-brand-accent',
        title: '美少女萬華鏡 -理與迷宮的少女- 官方中文修正補丁釋出',
        imageUrl: 'https://picsum.photos/id/104/200/150'
    },
    {
        id: 'hs3',
        category: '社群投稿',
        categoryColor: 'text-blue-400',
        title: '[教學] 如何使用 Cheat Engine 修改《柏德之門 3》好感度數值',
        imageUrl: 'https://picsum.photos/id/106/200/150'
    },
    {
        id: 'hs4',
        category: '影片',
        categoryColor: 'text-slate-400',
        title: '本週紳士遊戲回顧：11月必玩的 3 款新作推薦',
        imageUrl: 'https://picsum.photos/id/108/200/150',
        isVideo: true
    }
];

// -----------------------------------

export const MOCK_GAME_DETAIL: GameDetail = {
  id: 'nier',
  title: '尼爾：自動人形',
  titleEn: 'NieR: Automata',
  developer: 'PlatinumGames',
  releaseDate: '2017-03-17',
  description: '《尼爾：自動人形》講述了機器人 2B、9S 和 A2 的故事，以及他們為奪回被強大機器佔領的機器驅動的反烏托邦而戰鬥的故事。本作融合了動作與 RPG 元素，在開放世界中展開流暢而爽快的戰鬥。',
  tags: ['3D', 'NTR', '科幻', '開放世界', '動作'],
  coverUrl: 'https://picsum.photos/id/1/600/800',
  price: 'NT$ 1,190',
  platforms: ['steam', 'windows'],
  patch: {
    version: 'v2.0 Final',
    size: '1.2 GB',
    updateDate: '2023-11-20',
    features: ['完整繁體中文化', '4K 高畫質材質包', '去碼無修補丁', '解鎖 60FPS 上限'],
    changelog: [
      '修正 DLC 服裝顯示錯誤',
      '移除過場動畫中的聖光遮擋',
      '優化 4K 解析度下的 UI 顯示',
      '新增對 DualSense 手把的支援'
    ],
    installPath: 'C:\\Program Files (x86)\\Steam\\steamapps\\common\\NierAutomata'
  }
};

export const MOCK_NEWS: NewsItem[] = [
  {
    id: '1',
    title: '《電馭叛客 2077》「夜之城無修版」Mod v4.0 深度評測',
    summary: '徹底重製了戀愛系統與模型物理效果。此模組以開發者未曾設想的方式讓城市鮮活起來...',
    category: '評測',
    date: '2023-10-27',
    imageUrl: 'https://picsum.photos/id/201/400/300'
  },
  {
    id: '2',
    title: '《幻獸帕魯》裸體模組 v0.5 發布，修正穿模問題',
    summary: '最新的版本修復了在騎乘飛行帕魯時的模型錯誤，並新增了三套可替換的皮膚。',
    category: '模組',
    date: '2023-10-24',
    imageUrl: 'https://picsum.photos/id/202/400/300',
    linkedPatchId: 'palworld'
  },
  {
    id: '3',
    title: '【漢化】Baldr Sky 潛水員線完整漢化補丁釋出',
    summary: '歷時三年的大型漢化工程終於完工。本次更新包含所有 DLC 內容與隱藏劇情。',
    category: '新聞',
    date: '2023-10-23',
    imageUrl: 'https://picsum.photos/id/203/400/300',
    linkedPatchId: 'baldr'
  },
  {
    id: '4',
    title: 'Honey Select 2 DX 新增 50 張高質量角色卡分享',
    summary: '本週精選社群投稿，包含熱門動漫角色還原與原創高模。',
    category: '模組',
    date: '2023-10-22',
    imageUrl: 'https://picsum.photos/id/204/400/300'
  },
  {
    id: '5',
    title: '《星空》DLSS 3.0 補丁安裝教學與效能實測',
    summary: '對於 N 卡用戶來說是必裝的補丁，我們實測發現 FPS 提升了近 40%。',
    category: '評測',
    date: '2023-10-20',
    imageUrl: 'https://picsum.photos/id/205/400/300'
  }
];

export const MOCK_PATCHES: PatchItem[] = [
  {
    id: 'nier',
    gameTitle: 'Nier: Automata',
    version: 'v1.0.4 Final',
    size: '1.2 GB',
    date: '2023-11-20',
    downloads: 8900,
    imageUrl: 'https://picsum.photos/id/1/400/300',
    tags: ['漢化', '去碼', '最佳化']
  },
  {
    id: 'cyberpunk',
    gameTitle: 'Cyberpunk 2077',
    version: 'v2.12b',
    size: '540 MB',
    date: '2023-11-18',
    downloads: 12500,
    imageUrl: 'https://picsum.photos/id/2/400/300',
    tags: ['裸體模組', '4K 材質', '物理效果']
  },
  {
    id: 'honeyselect2',
    gameTitle: 'Honey Select 2',
    version: 'v5.0 DX',
    size: '15 GB',
    date: '2023-11-12',
    downloads: 34000,
    imageUrl: 'https://picsum.photos/id/3/400/300',
    tags: ['完整漢化', '角色卡', '解鎖補丁']
  },
  {
    id: 'eldenring',
    gameTitle: 'Elden Ring',
    version: 'v1.09',
    size: '2.4 GB',
    date: '2023-11-15',
    downloads: 6200,
    imageUrl: 'https://picsum.photos/id/4/400/300',
    tags: ['裸體模組', '無縫連線', '寬螢幕']
  },
  {
    id: 're4',
    gameTitle: 'Resident Evil 4',
    version: 'v1.2 Ada',
    size: '800 MB',
    date: '2023-11-10',
    downloads: 15000,
    imageUrl: 'https://picsum.photos/id/5/400/300',
    tags: ['服裝替換', '物理效果']
  },
  {
    id: 'ff7',
    gameTitle: 'Final Fantasy VII',
    version: 'v3.0 Tifa',
    size: '3.2 GB',
    date: '2023-11-05',
    downloads: 41000,
    imageUrl: 'https://picsum.photos/id/6/400/300',
    tags: ['4K 影片', '模型替換']
  },
  {
    id: 'baldr',
    gameTitle: 'Baldr Sky',
    version: 'v1.2 Final',
    size: '4.5 GB',
    date: '2023-10-30',
    downloads: 12042,
    imageUrl: 'https://picsum.photos/id/7/400/300',
    tags: ['完整漢化', '修正補丁']
  },
  {
    id: 'palworld',
    gameTitle: 'Palworld',
    version: 'v0.5.1',
    size: '120 MB',
    date: '2023-10-24',
    downloads: 5600,
    imageUrl: 'https://picsum.photos/id/8/400/300',
    tags: ['模型替換', '畫質優化']
  }
];

export const MOCK_EVENTS: EventItem[] = [
    {
        id: 'e1',
        title: '《艾爾登法環》Steam 正版序號 (3名)',
        description: '為慶祝 DLC 發售，特別提供 3 組標準版序號給會員抽獎。完全免費參加！',
        imageUrl: 'https://picsum.photos/id/112/600/400',
        type: 'raffle',
        typeLabel: '抽獎活動',
        timeLeft: '剩餘 2 天',
        participants: 1240,
        requirement: 'Member',
        status: 'active'
    },
    {
        id: 'e2',
        title: '2024 年度紳士遊戲漢化懶人包 (PDF)',
        description: '收錄本站精選的 50 款必玩遊戲與其對應的補丁連結，新手入門必備。',
        imageUrl: 'https://picsum.photos/id/113/600/400',
        type: 'freebie',
        typeLabel: '免費領取',
        participants: 5890,
        requirement: 'Member',
        status: 'active'
    },
    {
        id: 'e3',
        title: '原神 刻晴 1/7 手辦模型 (1名)',
        description: '感謝祭特別活動！由站長私人提供，全新未拆封。',
        imageUrl: 'https://picsum.photos/id/114/600/400',
        type: 'raffle',
        typeLabel: '周邊抽獎',
        timeLeft: '剩餘 12 小時',
        participants: 850,
        requirement: 'VIP',
        status: 'active'
    },
    {
        id: 'e4',
        title: '《電馭叛客 2077》攝影大賽',
        description: '分享你在夜之城拍下的最美（或最色）瞬間，贏取點數獎勵。',
        imageUrl: 'https://picsum.photos/id/115/600/400',
        type: 'challenge',
        typeLabel: '投稿活動',
        participants: 45,
        maxParticipants: 100,
        requirement: 'Member',
        status: 'active'
    },
    {
        id: 'e5',
        title: 'VIP 專屬：本月 4K 桌布包 Vol.12',
        description: '由繪師合作提供的 10 張高品質插畫，無浮水印。',
        imageUrl: 'https://picsum.photos/id/116/600/400',
        type: 'exclusive',
        typeLabel: '會員限定',
        participants: 230,
        requirement: 'VIP',
        status: 'active'
    }
];

export const MOCK_LATEST_NEWS: LatestNewsItem[] = [
    {
        id: 'n1',
        title: '《NtRIdol: Déjà Vu》地下偶像的命運，由你鏡頭下的私生活決定',
        imageUrl: '/test4.png',
        category: '紳士專區',
        categoryColor: 'bg-red-600',
        timeAgo: '1 小時前',
        likes: 1240,
        comments: 356
    },
    {
        id: 'n2',
        title: '《無人島社員旅行記》女同事們的生存戰略，與上司的荒島求生',
        imageUrl: '/test5.png',
        category: 'PC',
        categoryColor: 'bg-blue-600',
        timeAgo: '2 小時前',
        likes: 890,
        comments: 120
    },
    {
        id: 'n3',
        title: '《雀姬》x《與經紀人戀愛是絕對禁止 II》聯動確認！限定角色登場',
        imageUrl: '/test1.jpg',
        category: '活動',
        categoryColor: 'bg-purple-600',
        timeAgo: '4 小時前',
        likes: 2300,
        comments: 560
    },
    {
        id: 'n4',
        title: '《夏色四葉草》中文版更新：修復翻譯錯誤並追加 DLC 劇情',
        imageUrl: '/test2.jpg',
        category: '補丁',
        categoryColor: 'bg-brand-primary',
        timeAgo: '5 小時前',
        likes: 560,
        comments: 89
    },
    {
        id: 'n5',
        title: '夢幻共演：明星少女們的甜蜜假期，跨作品聯合活動開跑',
        imageUrl: '/test3.jpg',
        category: '活動',
        categoryColor: 'bg-purple-600',
        timeAgo: '6 小時前',
        likes: 1500,
        comments: 300
    },
    {
        id: 'n6',
        title: '《星露谷物語》v1.6 大型更新模組相容性列表整理',
        imageUrl: 'https://picsum.photos/id/20/400/225',
        category: '補丁',
        categoryColor: 'bg-brand-primary',
        timeAgo: '昨天',
        likes: 230,
        comments: 56
    },
    {
        id: 'n7',
        title: 'NVIDIA RTX 5090 規格傳聞流出：記憶體頻寬提升 50%',
        imageUrl: 'https://picsum.photos/id/24/400/225',
        category: '硬體',
        categoryColor: 'bg-gray-600',
        timeAgo: '3 天前',
        likes: 56,
        comments: 12
    },
    {
        id: 'n8',
        title: 'I社復活？全新成人遊戲品牌 Illgames 發表首款大作',
        imageUrl: 'https://picsum.photos/id/30/400/225',
        category: 'R18',
        categoryColor: 'bg-red-600',
        timeAgo: '3 天前',
        likes: 2100,
        comments: 450
    }
];
