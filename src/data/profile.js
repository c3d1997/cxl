/**
 * 個人介紹頁內容（示意文字，待替換）
 *
 * @typedef {Object} TimelineEntry
 * @property {string} period - 期間，例如 2023—
 * @property {string} title - 職稱或學位
 * @property {string} org - 單位名稱
 *
 * @typedef {Object} TimelineSection
 * @property {string} id
 * @property {string} label
 * @property {TimelineEntry[]} entries
 */

/** 開場自述，建議兩到三句 */
export const intro =
  '這裡放一段自述。說明你是誰、專注在什麼樣的工作、在意什麼。文字不需要長，留白會替它說話。'

/** @type {TimelineSection[]} */
export const timeline = [
  {
    id: 'experience',
    label: '經歷',
    entries: [
      { period: '2023—', title: '職稱', org: '公司或單位名稱' },
      { period: '2021—23', title: '職稱', org: '公司或單位名稱' },
      { period: '2019—21', title: '職稱', org: '公司或單位名稱' },
    ],
  },
  {
    id: 'education',
    label: '學歷',
    entries: [{ period: '2015—19', title: '科系名稱', org: '學校名稱' }],
  },
]

/** @type {{ label: string, items: string[] }[]} */
export const skillGroups = [
  { label: '前端', items: ['Vue 3', 'JavaScript', 'SCSS', 'Vite'] },
  { label: '設計', items: ['Figma', '版面設計', '視覺識別'] },
]

/** @type {{ label: string, href: string }[]} */
export const links = [
  { label: 'EMAIL', href: 'mailto:c3d1997@gmail.com' },
  { label: 'GITHUB', href: 'https://github.com/c3d1997' },
]
