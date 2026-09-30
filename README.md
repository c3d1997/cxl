# cxl

李承熹的個人作品集與經歷網站。內容自 [2023profile](https://github.com/c3d1997/2023profile) 遷移而來，改以極簡負空間風格重新設計。

## 技術棧

- **框架**：Vue 3（Composition API）
- **路由**：Vue Router 4
- **語言**：JavaScript（ES Modules）
- **樣式**：SCSS
- **建置**：Vite

## 環境需求

- Node.js 18 以上
- npm

## 快速開始

```bash
# 安裝相依套件
npm install

# 啟動開發伺服器
npm run dev

# 建置正式版
npm run build

# 預覽建置結果
npm run preview
```

## 頁面

| 路徑 | 說明 |
|---|---|
| `/` | 作品集索引，作品以書架式列表由上往下堆疊 |
| `/work/:slug` | 作品詳細頁，左側說明、右側大圖、右上角關閉 |
| `/about` | 個人介紹，含自述、工作與學習經歷 |

## 專案結構

```
cxl/
├── docs/
│   └── design-spec.md    # 設計規格與待辦
├── src/
│   ├── assets/
│   │   ├── styles/       # SCSS 變數與全域樣式
│   │   └── works/        # 作品圖片
│   ├── components/       # 共用元件（PascalCase.vue）
│   ├── data/             # 內容資料（works.js、profile.js）
│   ├── router/
│   ├── views/            # 頁面元件
│   └── main.js
├── public/
└── index.html
```

## 修改內容

網站內容與版面分離，改文字不需要動元件：

- **作品** → [`src/data/works.js`](src/data/works.js)。新增作品時加一筆物件即可，`index` 編號會自動依陣列順序產生。圖片放在 `src/assets/works/`，以 `image` 欄位指定檔名（不含副檔名）；未提供圖片時以 `tone` 指定色塊顏色。
- **個人介紹** → [`src/data/profile.js`](src/data/profile.js)。
- **配色與尺寸** → [`src/assets/styles/_variables.scss`](src/assets/styles/_variables.scss)。

## 開發規範

- 命名：變數/函式 `camelCase`、常數 `UPPER_SNAKE_CASE`、元件 `PascalCase`
- 布林值以 `is` / `has` / `should` 為前綴
- 統一使用具名導出（named exports）
- 所有 async 函式需包含 try-catch，錯誤以 `console.error` 記錄
- SCSS 自定義樣式採 BEM 命名，巢狀最多 3 層

## 授權

待定。
