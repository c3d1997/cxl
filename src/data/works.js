/**
 * 作品資料
 *
 * @typedef {Object} Work
 * @property {string} slug - 網址代稱，對應 /work/:slug
 * @property {number} index - 顯示編號，由大到小排列（新作在上）
 * @property {string} title
 * @property {string} status - 上線狀態，例如 在線／已下架
 * @property {string} description - 尚未撰寫時為空字串
 * @property {string[]} skills - 尚未確認時為空陣列
 * @property {string} [link] - 外部連結，無則不顯示
 * @property {string} [image] - 圖片檔名（不含副檔名）；未提供時以色塊代替
 * @property {string} [tone] - 無圖片時的色塊顏色
 */

// Vite 於建置時解析圖片路徑並加上雜湊，此處一次載入為對照表
const imageModules = import.meta.glob('../assets/works/*.jpg', {
  eager: true,
  import: 'default',
})

/**
 * 取得圖片網址
 * @param {string} [name] - 檔名（不含副檔名）
 * @returns {string | undefined}
 */
const resolveImage = (name) =>
  name ? imageModules[`../assets/works/${name}.jpg`] : undefined

/** @type {Work[]} */
const rawWorks = [
  // ====== 現職專案（圖片與說明待補）======
  {
    slug: 'line-parking',
    title: 'LINE PARKING',
    status: '待補畫面',
    description: '',
    skills: [],
    tone: '#2b2b2b',
  },
  {
    slug: 'line-hotel',
    title: 'LINE HOTEL',
    status: '待補畫面',
    description: '',
    skills: [],
    tone: '#4f4f4f',
  },
  {
    slug: 'coupon-checkin',
    title: '酷碰打卡',
    status: '待補畫面',
    description: '',
    skills: [],
    tone: '#8d8d8d',
  },
  {
    slug: 'blue-monkey-home',
    title: '藍猴首頁',
    status: '待補畫面',
    description: '',
    skills: [],
    tone: '#3a3a3a',
  },
  {
    slug: 'guoge-talk',
    title: '果哥敲敲話',
    status: '待補畫面',
    description: '',
    skills: [],
    tone: '#6e6e6e',
  },
  {
    slug: 'good-calendar',
    title: '好日曆',
    status: '待補畫面',
    description: '',
    skills: [],
    tone: '#bcbcbc',
  },
  {
    slug: 'winter-melon',
    title: '冬瓜',
    status: '待補畫面',
    description: '',
    skills: [],
    tone: '#5c5c5c',
  },

  // ====== 現職後台專案（無畫面）======
  {
    slug: 'message-center',
    title: '訊息中心',
    status: '無法提供畫面',
    description: '',
    skills: [],
    tone: '#252525',
  },
  {
    slug: 'game-module',
    title: '遊戲模組',
    status: '無法提供畫面',
    description: '',
    skills: [],
    tone: '#787878',
  },
  {
    slug: 'used-car',
    title: '二手車',
    status: '無法提供畫面',
    description: '',
    skills: [],
    tone: '#9a9a9a',
  },
  {
    slug: 'headhunting',
    title: '獵頭',
    status: '無法提供畫面',
    description: '',
    skills: [],
    tone: '#333333',
  },
  {
    slug: 'coupon',
    title: '酷碰',
    status: '無法提供畫面',
    description: '',
    skills: [],
    tone: '#a3a3a3',
  },

  // ====== 2023 年前作品 ======
  {
    slug: 'starvibe',
    title: '星達威鉑數位整合行銷',
    status: '在線',
    description:
      '協助公司製作形象官網，使用 HTML5、SCSS、jQuery 快速構建。',
    skills: ['SCSS', 'HTML5', 'jQuery'],
    link: 'https://starvibe.com.tw/',
    image: 'starvibe',
  },
  {
    slug: 'lotte-xylitol-bts',
    title: 'LOTTE XYLITOL x BTS 防彈少年團',
    status: '已下架（可查看網頁截圖）',
    description:
      '製作方向為活動網站，使用 HTML5、CSS3、jQuery 快速構建，提供給與後端工程師，以便於將抽獎資料記錄到後台。',
    skills: ['CSS', 'HTML5', 'jQuery', 'AJAX'],
    link: 'https://www.behance.net/gallery/184689285/_?',
    image: 'lotte-xylitol-bts',
  },
  {
    slug: 'yuga-tea',
    title: 'yuga 法國茶道活動網頁',
    status: '已下架（經同意掛載）',
    description:
      '此網頁為接案製作，架構為活動網站，使用 HTML5、CSS3、jQuery 快速構建。',
    skills: ['SCSS', 'HTML5', 'jQuery'],
    link: 'https://c3d1997.github.io/yuga/',
    image: 'yuga-tea',
  },
  {
    slug: 'shinkong-watermelon-line',
    title: '新光西瓜活動集點 Line 活動網頁',
    status: '已下架（可查看網頁截圖）',
    description:
      '此網頁主要服務於 Line 應用程式內，客戶僅要求製作手機板型，內容較多數據紀錄性質，本專案主要負責切版以及彈出視窗呈現，並優化 UX 體驗。',
    skills: ['SCSS', 'HTML5', 'jQuery'],
    link: 'https://www.behance.net/gallery/184733365/Line',
    image: 'shinkong-watermelon-line',
  },
  {
    slug: 'hsbc-foreign-currency',
    title: '外幣刷卡活動 — 滙豐（台灣）',
    status: '在線',
    description: '協助匯豐製作資訊網頁，使用 HTML5、CSS3、jQuery 快速構建。',
    skills: ['CSS3', 'HTML5', 'jQuery'],
    link: 'https://shop.hsbc.com.tw/International/',
    image: 'hsbc-foreign-currency',
  },
  {
    slug: 'hsbc-shop',
    title: '刷卡優惠 — 滙豐（台灣）',
    status: '在線',
    description: '協助匯豐製作資訊網頁，使用 HTML5、CSS3、jQuery 快速構建。',
    skills: ['CSS3', 'HTML5', 'jQuery'],
    link: 'https://shop.hsbc.com.tw/',
    image: 'hsbc-shop',
  },
  {
    slug: 'jpmorgan-fund',
    title: '摩根投資基金',
    status: '已下架（可查看網頁截圖）',
    description:
      '協助摩根投資基金製作一頁式資訊網頁，使用 HTML5、SCSS、jQuery 快速構建。',
    skills: ['SCSS', 'HTML5', 'jQuery'],
    link: 'https://www.behance.net/gallery/184734613/_',
    image: 'jpmorgan-fund',
  },
  {
    slug: 'jpmorgan-coffee-line',
    title: '摩根咖啡集點活動 Line 網頁',
    status: '已下架（可查看網頁截圖）',
    description:
      '協助摩根製作 Line 使用的集點網頁，使用 HTML5、SCSS、jQuery 快速構建，並且有簡單使用 GSAP 製作動態。',
    skills: ['SCSS', 'HTML5', 'jQuery', 'GSAP'],
    link: 'https://www.behance.net/gallery/184735439/-LINE-',
    image: 'jpmorgan-coffee-line',
  },
  {
    slug: 'nutrilite-line',
    title: '紐崔萊 1+1 營養密技 Line 活動網頁',
    status: '已下架（可查看網頁截圖）',
    description:
      '協助紐崔萊製作 Line 使用的活動網頁，使用 HTML5、SCSS、jQuery 快速構建，並且有簡單使用 GSAP 製作動態。',
    skills: ['SCSS', 'HTML5', 'jQuery', 'GSAP'],
    link: 'https://www.behance.net/gallery/184735831/11',
    image: 'nutrilite-line',
  },
  {
    slug: 'shinkong-life-60th',
    title: '新光人壽 60 週年 Line 慶祝活動',
    status: '已下架（可查看網頁截圖）',
    description:
      '協助新光人壽製作 Line 使用的活動網頁，使用 HTML5、SCSS、jQuery、AJAX 快速構建，並且有簡單使用 GSAP 製作動態，但由於 API 已經關閉，無法獲取更多的網頁畫面。',
    skills: ['SCSS', 'HTML5', 'jQuery', 'GSAP', 'AJAX'],
    link: 'https://www.behance.net/gallery/184736229/60LINE',
    image: 'shinkong-life-60th',
  },
  {
    slug: 'kgi-securities-system',
    title: '凱基證券共銷查詢系統',
    status: '無法提供畫面',
    description:
      '協助凱基證券製作後台操作系統，內容主要皆為數據傳出以及查找資料，我主要負責 UI/UX 設計並且進行畫面切版，並協助後端確認資料來源，過程非常有趣。',
    skills: ['SCSS', 'HTML5', 'jQuery', 'Bootstrap5'],
    tone: '#5c5c5c',
  },
  {
    slug: 'shinkong-watermelon-admin',
    title: '新光西瓜點數後台紀錄系統',
    status: '無法提供畫面',
    description:
      '協助新光人壽製作後台活動查詢系統，內容主要為查看點數紀錄詳情以及中獎紀錄，我主要負責 UI/UX 設計並且進行畫面切版。',
    skills: ['SCSS', 'HTML5', 'jQuery', 'Bootstrap5'],
    tone: '#8d8d8d',
  },
  {
    slug: 'shinkong-painting-admin',
    title: '新光全國繪畫比賽後台',
    status: '無法提供畫面',
    description:
      '協助新光人壽製作繪畫比賽後台操作系統，內容主要服務於繪畫比賽案件報名，查看報名紀錄，我主要負責 UI/UX 設計並且進行畫面切版。',
    skills: ['SCSS', 'HTML5', 'jQuery', 'Bootstrap5'],
    tone: '#3a3a3a',
  },
]

// 編號由大到小，最上方為清單首筆
export const works = rawWorks.map((work, position) => ({
  ...work,
  index: rawWorks.length - position,
  imageSrc: resolveImage(work.image),
}))

/**
 * 依網址代稱取得單一作品
 * @param {string} slug
 * @returns {Work | undefined}
 */
export const findWorkBySlug = (slug) => works.find((work) => work.slug === slug)
