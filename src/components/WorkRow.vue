<script setup>
defineProps({
  work: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="work-row">
    <!-- 中繼資料列，欄位對齊下方圖片網格 -->
    <header class="work-row__meta">
      <span class="work-row__field">{{ work.index }}. {{ work.title }}</span>
      <span class="work-row__field">{{ work.client }}</span>
      <span class="work-row__field">{{ work.category }}</span>
      <span class="work-row__field">{{ work.year }}</span>
    </header>

    <div class="work-row__grid">
      <div
        v-for="item in work.items"
        :key="item.label"
        class="work-row__item"
        :style="{ backgroundColor: item.tone }"
      >
        <span class="work-row__label">{{ item.label }}</span>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@use '../assets/styles/variables' as v;

.work-row__meta {
  display: grid;
  grid-template-columns: repeat(v.$grid-columns, 1fr);
  padding: 0.4rem 0;
  border-top: 1px solid v.$color-rule;
}

.work-row__field {
  // 每欄等量內縮，維持與下方圖片網格的欄位對應
  padding-left: 0.5rem;
  padding-right: 1rem;
  font-size: v.$font-size-meta;
  letter-spacing: v.$letter-spacing-meta;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

// 圖與圖之間不留間距，連成整片
.work-row__grid {
  display: grid;
  grid-template-columns: repeat(v.$grid-columns, 1fr);
}

.work-row__item {
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
}

// 佔位文字，實際圖片就位後移除
.work-row__label {
  color: rgba(255, 255, 255, 0.5);
  font-size: v.$font-size-meta;
  letter-spacing: v.$letter-spacing-meta;
  mix-blend-mode: difference;
}

@media (max-width: v.$breakpoint-md) {
  .work-row__meta {
    grid-template-columns: 1fr auto;
    gap: 0.5rem;
  }

  .work-row__field:nth-child(2) {
    display: none;
  }

  .work-row__field:nth-child(3) {
    display: none;
  }

  .work-row__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
