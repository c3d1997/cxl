/**
 * 個人介紹頁內容
 *
 * @typedef {Object} TimelineEntry
 * @property {string} period
 * @property {string} title
 * @property {string} description
 * @property {string[]} skills
 * @property {string} [link]
 *
 * @typedef {Object} TimelineSection
 * @property {string} id
 * @property {string} label
 * @property {TimelineEntry[]} entries
 */

export const profile = {
  name: '李承熹',
  role: '前端工程師',
  roleEn: 'Front-end developer',
}

/** 開場自述 */
export const intro = [
  '我是名熱情的跨領域轉職者，現在專注於前端開發領域，擁有一年的實務經驗。我的轉職之旅始於對技術的強烈興趣，這驅使我在利用業餘時間學習中迅速掌握了前端開發的核心技術，包括 HTML5、CSS3 和 JavaScript。我對高質量網站開發的專注不僅限於現有技術，目前正在積極自學 Vue3 框架並探索其他編程語言和框架，以豐富我的技術棧和視野。',
  '我對追蹤前端開發的最新趨勢充滿熱情，並將這些知識運用於創建美觀且用戶友好的網站。在團隊合作中，我致力於追求卓越，並將從學習到實踐的每一步作為成長和進步的機會。我所做的每一步努力都源於對技術的熱愛和對於專業轉型的堅定決心，這驅動我在這個充滿挑戰與機會的領域不斷進取。',
]

/** @type {TimelineSection[]} */
export const timeline = [
  {
    id: 'work',
    label: '工作經歷',
    entries: [
      {
        period: '2022.07 — 2023.08',
        title: '光曜町數位行銷 — Hikaru Digital Marketing',
        link: 'https://www.hikaru.com.tw/',
        description:
          '在光曜町數位行銷的一年工作經歷中，我不僅負責網頁維護，還參與一頁式網站、官方網站、Line 內互動網頁及 CMS 後台的 UI/UX 設計與前端開發。我熟練掌握 HTML5、CSS3、jQuery 和 JavaScript，與設計團隊緊密合作，致力於提升用戶體驗和滿足客戶需求。我的技能涵蓋從界面設計到功能實現，展現了我在前端開發領域的專業能力與多元化。',
        skills: [
          'Figma',
          'HTML5',
          'CSS3',
          'jQuery',
          'JavaScript',
          'GSAP',
          'RESTful API',
        ],
      },
    ],
  },
  {
    id: 'learning',
    label: '學習經歷',
    entries: [
      {
        period: '2023.10 — 至今',
        title: 'Vue 3.x 全家桶完全指南與實戰',
        link: 'https://www.udemy.com/share/107eRc3@-dfou4YcjzWyLdho2qMa_r_sKdADImzW0JnmEu-jrhmbhmW1yE_2eSelfrUDsCjoAA==/',
        description:
          '在過去一年的工作中，我意識到提升前端技能的重要性，因此投入學習 Vue.js。透過不斷實踐，我正在從初學者逐步邁向熟練開發者，雖尚未精通，但每一步的進步都加深了我對前端開發的熱情與期待。',
        skills: ['Vue3', 'Vite', 'Vue Router'],
      },
      {
        period: '2022.01 — 2022.06',
        title: 'UIUX 互動式網站 UI/UX 設計師就業養成班',
        description:
          '畢業一年後，我專注於 UI/UX 和前端開發。精通 AI、PS、Figma，並具備使用者分析和流程規劃能力。在前端，我熟練於 HTML5、CSS3、jQuery 和 JavaScript，也了解 MySQL 和 PHP。我致力於結合設計與技術創造優質網頁體驗。',
        skills: [
          'Figma',
          'HTML5',
          'CSS3',
          'jQuery',
          'JavaScript',
          'PHP',
          'MySQL',
        ],
      },
      {
        period: '2016.08 — 2020.06',
        title: '中國科技大學 數位多媒體',
        description:
          '主修 3D 建模、2D 繪圖、平面視覺，選修影片剪輯、UIUX、AE 特效。畢業專題中擔任組長，負責主角 3D 建模和動畫製作，有效整合組員資訊，並與教授合作確定開發方向。',
        skills: [
          'After Effects',
          'Photoshop',
          'Illustrator',
          'Premiere',
          'Blender',
        ],
      },
    ],
  },
]

/** @type {{ label: string, href: string }[]} */
export const links = [
  { label: 'C3D1997@GMAIL.COM', href: 'mailto:c3d1997@gmail.com' },
  { label: 'GITHUB @C3D1997', href: 'https://github.com/c3d1997' },
]
