<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  work: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <RouterLink
    :to="{ name: 'work-detail', params: { slug: work.slug } }"
    class="work-row"
  >
    <!-- 中繼資料列，欄位對齊下方圖片 -->
    <header class="work-row__meta">
      <span class="work-row__field">{{ work.index }}. {{ work.title }}</span>
      <span class="work-row__field">{{ work.status }}</span>
      <span class="work-row__field">{{ work.skills.join('・') }}</span>
    </header>

    <div class="work-row__visual" :style="{ backgroundColor: work.tone }">
      <img
        v-if="work.imageSrc"
        :src="work.imageSrc"
        :alt="work.title"
        class="work-row__image"
        loading="lazy"
      />
      <span v-else class="work-row__placeholder">無畫面</span>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped>
@use '../assets/styles/variables' as v;

.work-row {
  display: block;
}

.work-row__meta {
  display: grid;
  // 標題欄較寬，狀態與技術各佔一份
  grid-template-columns: 2fr 1fr 1fr;
  padding: 0.4rem 0;
  border-top: 1px solid v.$color-rule;
}

.work-row__field {
  // 每欄等量內縮，維持與下方圖片的對應
  padding-left: 0.5rem;
  padding-right: 1rem;
  font-size: v.$font-size-meta;
  letter-spacing: v.$letter-spacing-meta;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

// 網站截圖為橫向，以 16:9 完整呈現不裁切成方形
.work-row__visual {
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  transition: opacity 0.2s ease;
}

.work-row:hover .work-row__visual {
  opacity: 0.75;
}

.work-row__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.work-row__placeholder {
  color: rgba(255, 255, 255, 0.5);
  font-size: v.$font-size-meta;
  letter-spacing: v.$letter-spacing-meta;
  mix-blend-mode: difference;
}

@media (max-width: v.$breakpoint-md) {
  .work-row__meta {
    grid-template-columns: 1fr auto;
  }

  // 窄螢幕僅保留標題與狀態
  .work-row__field:nth-child(3) {
    display: none;
  }
}
</style>
