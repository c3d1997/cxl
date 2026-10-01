<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  categories: {
    type: Array,
    required: true,
  },
  activeCategory: {
    type: [String, null],
    default: null,
  },
  counts: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <nav class="work-filter" aria-label="作品分類">
    <ul class="work-filter__list">
      <li v-for="category in categories" :key="category.label">
        <!--
          以網址查詢字串保存選取狀態，
          篩選結果因此可以分享，上一頁也能正確回到前一個分類
        -->
        <RouterLink
          :to="{ query: { category: category.value } }"
          class="work-filter__tab"
          :class="{ 'work-filter__tab--active': activeCategory === category.value }"
          :aria-current="activeCategory === category.value ? 'page' : 'false'"
        >
          {{ category.label }}
          <span class="work-filter__count">{{ counts[category.value] }}</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@use '../assets/styles/mixins' as m;
@use '../assets/styles/variables' as v;

// 寬度為 0 的定位錨點，書籤絕對定位於其右緣，
// 作品清單因此維持滿版，不會被往右推出一條淺色邊帶
.work-filter {
  position: sticky;
  top: 0;
  // flex 子項需設此值，sticky 才不會被拉伸成整欄高度而失效
  align-self: flex-start;
  flex: 0 0 0;
  width: 0;
}

// right: 0 讓每張書籤的右緣都貼齊作品清單左緣，
// 突出效果改由左側長度表現，右緣始終不脫開
.work-filter__list {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

// 直書紙片，無框線；圓角只給突出的左端
.work-filter__tab {
  display: inline-flex;
  // 直書下主軸為垂直、交錯軸為水平，兩軸皆置中即為上下左右置中
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  writing-mode: vertical-rl;
  min-width: v.$tap-target-min;
  padding: 1.25rem 0.5rem;
  text-align: center;
  border-radius: 3px 0 0 3px;
  // 未選取時與左欄同色，像仍收在粉色那一側
  background-color: v.$color-sidebar;
  @include m.paper-texture;
  color: v.$color-secondary-strong;
  font-size: v.$font-size-meta;
  font-weight: 500;
  letter-spacing: v.$letter-spacing-meta;
  box-shadow: v.$shadow-bookmark;
  // box-shadow 的模糊會往四面擴散，右側以 inset 0 切齊，
  // 其餘三邊給負值讓陰影得以溢出
  clip-path: inset(-#{v.$shadow-clip} 0 -#{v.$shadow-clip} -#{v.$shadow-clip});
  // 僅陰影帶過渡，其餘狀態變化即時切換
  transition: box-shadow 0.18s ease;
}

// 選取者換成右側畫布的白、字色與字重再加強、陰影加深；寬度維持一致
.work-filter__tab--active {
  background-color: v.$color-canvas;
  color: v.$color-ink;
  font-weight: 700;
  box-shadow: v.$shadow-bookmark-active;
}

.work-filter__tab:not(.work-filter__tab--active):hover {
  color: v.$color-ink;
}

// 直書下數字預設會旋轉 90 度；縱中橫讓數字維持水平並直立閱讀
.work-filter__count {
  text-combine-upright: all;
  font-size: 0.625rem;
}

// 窄螢幕沒有左側空間可容納直書書籤，改回橫向排列
@media (max-width: v.$breakpoint-md) {
  .work-filter {
    flex: none;
    width: auto;
    padding-top: 0;
  }

  .work-filter__list {
    position: static;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
    padding-left: 0.5rem;
  }

  .work-filter__tab {
    writing-mode: horizontal-tb;
    min-width: 0;
    min-height: v.$tap-target-min;
    padding: 0;
    border-radius: 0;
    background-color: transparent;
    background-image: none;
    box-shadow: none;
    clip-path: none;
  }

  .work-filter__tab--active {
    text-decoration: underline;
    text-underline-offset: 0.25em;
  }
}
</style>
