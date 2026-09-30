<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

import { findWorkBySlug } from '@/data/works'

const route = useRoute()
const router = useRouter()

const work = computed(() => findWorkBySlug(route.params.slug))

// 編號補零，與索引頁的顯示規則一致
const paddedIndex = computed(() =>
  work.value ? String(work.value.index).padStart(3, '0') : '',
)

const closeDetail = () => {
  router.push({ name: 'home' })
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    closeDetail()
  }
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <div class="work-detail">
    <button type="button" class="work-detail__close" @click="closeDetail">
      (Close)
    </button>

    <template v-if="work">
      <!-- 左欄：文字說明 -->
      <div class="work-detail__text">
        <p class="work-detail__index">{{ paddedIndex }}</p>
        <h1 class="work-detail__title">{{ work.title }}</h1>

        <dl class="work-detail__meta">
          <dt>客戶</dt>
          <dd>{{ work.client }}</dd>
          <dt>類型</dt>
          <dd>{{ work.category }}</dd>
          <dt>年份</dt>
          <dd>{{ work.year }}</dd>
        </dl>

        <p class="work-detail__description">{{ work.description }}</p>
      </div>

      <!-- 右欄：大圖 -->
      <div class="work-detail__gallery">
        <figure
          v-for="item in work.items"
          :key="item.label"
          class="work-detail__figure"
          :style="{ backgroundColor: item.tone }"
        >
          <figcaption class="work-detail__caption">{{ item.label }}</figcaption>
        </figure>
      </div>
    </template>

    <p v-else class="work-detail__missing">
      找不到這件作品。
      <RouterLink to="/">回到作品集</RouterLink>
    </p>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/variables' as v;

.work-detail {
  display: flex;
  align-items: flex-start;
  min-height: 100vh;
  background-color: v.$color-canvas;
}

.work-detail__close {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 1;
  padding: 0.5rem;
  border: 0;
  background: none;
  color: v.$color-ink;
  font-family: inherit;
  font-size: v.$font-size-nav;
  cursor: pointer;
}

// 左欄文字隨右側捲動固定
.work-detail__text {
  position: sticky;
  top: 0;
  flex: 0 0 v.$sidebar-width;
  padding: 1.5rem;
}

.work-detail__index {
  font-size: v.$font-size-meta;
  letter-spacing: v.$letter-spacing-meta;
}

.work-detail__title {
  margin: 0.25rem 0 1.5rem;
  font-size: 1.5rem;
}

.work-detail__meta {
  display: grid;
  grid-template-columns: 4rem 1fr;
  gap: 0.25rem 0.5rem;
  margin: 0 0 1.5rem;
  font-size: v.$font-size-meta;
  letter-spacing: v.$letter-spacing-meta;
}

.work-detail__meta dd {
  margin: 0;
}

.work-detail__description {
  max-width: 32em;
  font-size: v.$font-size-nav;
  line-height: 1.8;
}

.work-detail__gallery {
  flex: 1 1 auto;
  min-width: 0;
  // 頂端留白帶，讓 (Close) 落在底色上而非疊在大圖上
  padding-top: 3.5rem;
}

.work-detail__figure {
  display: flex;
  align-items: flex-end;
  margin: 0;
  // 大圖以 4:3 呈現，比索引頁的方形更接近實際作品照
  aspect-ratio: 4 / 3;
}

.work-detail__caption {
  padding: 0.5rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: v.$font-size-meta;
  letter-spacing: v.$letter-spacing-meta;
  mix-blend-mode: difference;
}

.work-detail__missing {
  padding: 1.5rem;
  font-size: v.$font-size-nav;
}

@media (max-width: v.$breakpoint-md) {
  .work-detail {
    flex-direction: column;
    align-items: stretch;
  }

  .work-detail__text {
    position: static;
    flex: none;
  }
}
</style>
