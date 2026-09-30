# cxl

> 專案簡介待補。

## 技術棧

- **框架**：Vue 3（Composition API）
- **語言**：JavaScript（ES Modules）
- **樣式**：SCSS

## 環境需求

- Node.js 18 以上
- npm / pnpm

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

## 專案結構

```
cxl/
├── src/
│   ├── assets/       # 靜態資源
│   ├── components/   # 共用元件（PascalCase.vue）
│   ├── composables/  # 組合式函式（camelCase.js）
│   ├── views/        # 頁面元件
│   ├── utils/        # 工具函式
│   └── main.js       # 進入點
├── public/           # 不經打包的靜態檔案
└── index.html
```

## 環境變數

複製範例檔並填入實際數值：

```bash
cp .env.example .env
```

## 開發規範

- 命名：變數/函式 `camelCase`、常數 `UPPER_SNAKE_CASE`、元件 `PascalCase`
- 布林值以 `is` / `has` / `should` 為前綴
- 統一使用具名導出（named exports）
- 所有 async 函式需包含 try-catch，錯誤以 `console.error` 記錄
- SCSS 自定義樣式採 BEM 命名，巢狀最多 3 層

## 授權

待定。
