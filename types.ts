
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
    summary: '徹底重製了戀愛系統與模型物理效果。此模組以開發者未曾設想的方式讓城市鮮活起來，帶來前所未有的沈浸體驗。',
    category: '評測',
    date: '2 小時前',
    imageUrl: 'https://picsum.photos/id/122/800/450',
    isFeatured: true,
    linkedPatchId: 'p1'
  },
  {
    id: '2',
    title: '《尼爾：自動人形》「2B 強化版」材質包更新',
    summary: '修復過場動畫材質閃爍問題，並新增全角色的 4K 高解析度皮膚紋理。',
    category: '更新日誌',
    date: '5 小時前',
    imageUrl: 'https://picsum.photos/id/21/200/150',
    linkedPatchId: 'p2'
  },
  {
    id: '3',
    title: '《柏德之門 3》全新戀愛選項模組發布',
    summary: '透過此粉絲製作的修復計畫，解鎖隱藏的對話樹與被官方刪減的親密場景。',
    category: '模組',
    date: '1 天前',
    imageUrl: 'https://picsum.photos/id/54/200/150'
  },
  {
    id: '4',
    title: '《艾爾登法環》「不再是無女巫」同伴擴充包',
    summary: '新增 3 位擁有完整語音演出與複雜任務線的同伴 NPC，旅途不再孤單。',
    category: '新聞',
    date: '2 天前',
    imageUrl: 'https://picsum.photos/id/88/200/150'
  }
];

export const MOCK_LATEST_NEWS: LatestNewsItem[] = [
    {
        id: 'ln1',
        title: '《Hades II》搶先體驗版推出首日好評如潮，新增繁體中文支援',
        imageUrl: 'https://picsum.photos/id/134/400/225',
        category: '多平台',
        categoryColor: 'bg-orange-600',
        timeAgo: '2 小時前',
        likes: 156,
        comments: 34
    },
    {
        id: 'ln2',
        title: '《幻獸帕魯》開發商澄清：沒有被任天堂收購的計畫，將保持獨立營運',
        imageUrl: 'https://picsum.photos/id/135/400/225',
        category: 'PC',
        categoryColor: 'bg-blue-600',
        timeAgo: '5 小時前',
        likes: 892,
        comments: 120
    },
    {
        id: 'ln3',
        title: '由《刀劍神域》團隊打造！新作動作 RPG《Fractured Daydream》公開首支預告',
        imageUrl: 'https://picsum.photos/id/136/400/225',
        category: '動漫',
        categoryColor: 'bg-pink-600',
        timeAgo: '昨天',
        likes: 45,
        comments: 8
    },
    {
        id: 'ln4',
        title: '《星露谷物語》v1.6 大型更新模組相容性列表整理：這 5 個必裝 Mod 已更新',
        imageUrl: 'https://picsum.photos/id/137/400/225',
        category: '補丁',
        categoryColor: 'bg-brand-primary',
        timeAgo: '昨天',
        likes: 230,
        comments: 56
    },
    {
        id: 'ln5',
        title: '【會員限定】PatchHub 周年慶抽獎活動開跑！最大獎 PS5 Slim 主機一台',
        imageUrl: 'https://picsum.photos/id/139/400/225',
        category: '活動',
        categoryColor: 'bg-purple-600',
        timeAgo: '2 天前',
        likes: 1200,
        comments: 800
    },
    {
        id: 'ln6',
        title: '《勝利女神：妮姬》全新角色「皇冠」技能數值解包，強度直逼 T0 級別',
        imageUrl: 'https://picsum.photos/id/140/400/225',
        category: '手遊',
        categoryColor: 'bg-brand-accent',
        timeAgo: '2 天前',
        likes: 340,
        comments: 99
    },
    {
        id: 'ln7',
        title: 'NVIDIA RTX 5090 規格傳聞流出：記憶體頻寬提升 50%，功耗恐突破 600W',
        imageUrl: 'https://picsum.photos/id/141/400/225',
        category: '硬體',
        categoryColor: 'bg-gray-600',
        timeAgo: '3 天前',
        likes: 56,
        comments: 12
    },
    {
        id: 'ln8',
        title: 'I社復活？全新成人遊戲品牌 Illgames 發表首款大作《Honey Come》',
        imageUrl: 'https://picsum.photos/id/142/400/225',
        category: 'R18',
        categoryColor: 'bg-red-600',
        timeAgo: '3 天前',
        likes: 2100,
        comments: 450
    }
];

export const MOCK_PATCHES: PatchItem[] = [
  {
    id: 'p1',
    gameTitle: 'Cyberpunk 2077',
    version: 'v2.12b',
    size: '4.5 GB',
    date: '2023-10-24',
    downloads: 12500,
    imageUrl: 'https://picsum.photos/id/122/600/338',
    tags: ['裸體模組', '4K 材質']
  },
  {
    id: 'p2',
    gameTitle: 'Nier: Automata',
    version: 'v1.0.4 Final',
    size: '1.2 GB',
    date: '2023-10-22',
    downloads: 8900,
    imageUrl: 'https://picsum.photos/id/21/600/338',
    tags: ['最佳化', '去碼無修']
  },
  {
    id: 'p3',
    gameTitle: 'Honey Select 2',
    version: 'v5.0 DX',
    size: '850 MB',
    date: '2023-10-20',
    downloads: 34200,
    imageUrl: 'https://picsum.photos/id/64/600/338',
    tags: ['完整漢化', '角色卡']
  },
  {
    id: 'p4',
    gameTitle: 'Resident Evil 4 Remake',
    version: 'v1.2 Ada',
    size: '2.1 GB',
    date: '2023-10-18',
    downloads: 15600,
    imageUrl: 'https://picsum.photos/id/96/600/338',
    tags: ['服裝替換', '物理效果']
  },
  {
    id: 'p5',
    gameTitle: 'Final Fantasy VII Remake',
    version: 'v3.0 Tifa',
    size: '3.0 GB',
    date: '2023-10-15',
    downloads: 41000,
    imageUrl: 'https://picsum.photos/id/111/600/338',
    tags: ['4K 影片', '模型替換']
  }
];

export const MOCK_EVENTS: EventItem[] = [
  {
    id: 'e1',
    title: '《艾爾登法環》Steam 正版序號 (3名)',
    description: '為慶祝 DLC 發售，特別提供 3 組標準版序號給會員抽獎。完全免費參加，中獎機率透明公開。',
    imageUrl: 'https://picsum.photos/id/30/600/400',
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
    description: '收錄本站精選的 50 款必玩遊戲與其對應的補丁連結，新手入門必備指南。含獨家安裝教學。',
    imageUrl: 'https://picsum.photos/id/42/600/400',
    type: 'freebie',
    typeLabel: '免費領取',
    requirement: 'Member',
    status: 'active'
  },
  {
    id: 'e3',
    title: '原神 刻晴 1/7 手辦模型 (1名)',
    description: '感謝祭特別活動！由站長私人提供，全新未拆封正版模型。VIP 會員享有 2 倍中獎機率。',
    imageUrl: 'https://picsum.photos/id/65/600/400',
    type: 'raffle',
    typeLabel: '周邊抽獎',
    timeLeft: '剩餘 12 小時',
    participants: 520,
    maxParticipants: 1000,
    requirement: 'VIP',
    status: 'active'
  },
  {
    id: 'e4',
    title: 'Cyberpunk 2077 私人伺服器測試資格',
    description: '參與我們自建的多人連線模組壓力測試。名額有限，先搶先贏。',
    imageUrl: 'https://picsum.photos/id/122/600/400',
    type: 'exclusive',
    typeLabel: '會員限定',
    timeLeft: '剩餘 5 天',
    participants: 88,
    maxParticipants: 100,
    requirement: 'VIP',
    status: 'active'
  },
  {
    id: 'e5',
    title: '每週截圖大賽：最美夜之城',
    description: '上傳您的遊戲截圖，獲得最多讚數的前三名可獲得 1 個月 VIP 資格。',
    imageUrl: 'https://picsum.photos/id/230/600/400',
    type: 'challenge',
    typeLabel: '社群挑戰',
    timeLeft: '剩餘 6 天',
    participants: 45,
    requirement: 'None',
    status: 'active'
  }
];
