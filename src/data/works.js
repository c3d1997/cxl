/**
 * 作品資料（示意內容，待替換為實際作品）
 *
 * @typedef {Object} WorkItem
 * @property {string} label - 圖說，實際圖片就位前作為佔位文字
 * @property {string} tone - 佔位色塊的顏色
 *
 * @typedef {Object} Work
 * @property {number} index - 顯示編號，由大到小排列（新作在上）
 * @property {string} title
 * @property {string} client
 * @property {string} category
 * @property {number} year
 * @property {WorkItem[]} items
 */

/** @type {Work[]} */
export const works = [
  {
    index: 4,
    title: '專案名稱 D',
    client: '客戶名稱',
    category: 'WEB',
    year: 2025,
    items: [
      { label: '圖 01', tone: '#2b2b2b' },
      { label: '圖 02', tone: '#8d8d8d' },
      { label: '圖 03', tone: '#d6d6d6' },
      { label: '圖 04', tone: '#4f4f4f' },
    ],
  },
  {
    index: 3,
    title: '專案名稱 C',
    client: '客戶名稱',
    category: 'BRANDING',
    year: 2024,
    items: [
      { label: '圖 01', tone: '#bcbcbc' },
      { label: '圖 02', tone: '#3a3a3a' },
      { label: '圖 03', tone: '#6e6e6e' },
      { label: '圖 04', tone: '#e2e2e2' },
    ],
  },
  {
    index: 2,
    title: '專案名稱 B',
    client: '客戶名稱',
    category: 'BOOK',
    year: 2024,
    items: [
      { label: '圖 01', tone: '#5c5c5c' },
      { label: '圖 02', tone: '#dcdcdc' },
      { label: '圖 03', tone: '#252525' },
      { label: '圖 04', tone: '#a3a3a3' },
    ],
  },
  {
    index: 1,
    title: '專案名稱 A',
    client: '客戶名稱',
    category: 'IDENTITY',
    year: 2023,
    items: [
      { label: '圖 01', tone: '#9a9a9a' },
      { label: '圖 02', tone: '#333333' },
      { label: '圖 03', tone: '#cfcfcf' },
      { label: '圖 04', tone: '#787878' },
    ],
  },
]
