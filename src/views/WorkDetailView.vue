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
          <dt>狀態</dt>
          <dd>{{ work.status }}</dd>
        </dl>

        <p class="work-detail__description">{{ work.description }}</p>

        <ul class="work-detail__skills">
          <li v-for="skill in work.skills" :key="skill" class="work-detail__skill">
            {{ skill }}
          </li>
        </ul>

        <a
          v-if="work.link"
          :href="work.link"
          class="work-detail__link"
          target="_blank"
          rel="noopener"
        >
          前往網站 ↗
        </a>
      </div>

      <!-- 右欄：大圖 -->
      <div class="work-detail__gallery">
        <figure class="work-detail__figure" :style="{ backgroundColor: work.tone }">
          <img
            v-if="work.imageSrc"
            :src="work.imageSrc"
            :alt="work.title"
            class="work-detail__image"
          />
          <figcaption v-else class="work-detail__caption">無畫面</figcaption>
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
  line-height: 1.4;
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
  font-size: v.$font-size-body;
  line-height: 1.9;
}

.work-detail__skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1.5rem 0 0;
  padding: 0;
  list-style: none;
}

.work-detail__skill {
  padding: 0.25rem 0.6rem;
  border: 1px solid v.$color-rule;
  color: v.$color-secondary;
  font-size: v.$font-size-meta;
  letter-spacing: v.$letter-spacing-meta;
}

.work-detail__link {
  display: inline-flex;
  align-items: center;
  // 維持最小觸控尺寸
  min-height: v.$tap-target-min;
  margin-top: 1rem;
  font-size: v.$font-size-body;
  text-decoration: underline;
  text-underline-offset: 0.25em;
}

.work-detail__gallery {
  flex: 1 1 auto;
  min-width: 0;
  // 頂端留白帶，讓 (Close) 落在底色上而非疊在大圖上
  padding-top: 3.5rem;
}

.work-detail__figure {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

// 無圖片時以色塊填補，維持與有圖列相同的高度節奏
.work-detail__figure:not(:has(img)) {
  aspect-ratio: 16 / 9;
}

.work-detail__image {
  width: 100%;
  height: auto;
}

.work-detail__caption {
  color: rgba(255, 255, 255, 0.5);
  font-size: v.$font-size-meta;
  letter-spacing: v.$letter-spacing-meta;
  mix-blend-mode: difference;
}

.work-detail__missing {
  padding: 1.5rem;
  font-size: v.$font-size-body;
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

  // 標題保留右側空間，避免被固定的 (Close) 壓住
  .work-detail__title {
    padding-right: 5rem;
  }
}
</style>
