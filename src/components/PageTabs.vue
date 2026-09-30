<script setup>
import { computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

// 直接由路由表產生分頁，新增路由時只要填 meta.title 即會出現
const tabs = computed(() =>
  router.options.routes.filter((route) => Boolean(route.meta?.title)),
)
</script>

<template>
  <nav class="page-tabs" aria-label="頁面切換">
    <p class="page-tabs__hint">切換頁面</p>

    <ul class="page-tabs__list">
      <li v-for="tab in tabs" :key="tab.name">
        <RouterLink :to="tab.path" class="page-tabs__tab">
          {{ tab.meta.title }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@use '../assets/styles/variables' as v;

.page-tabs__hint {
  margin-bottom: 0.5rem;
  color: v.$color-muted;
  font-size: v.$font-size-meta;
  letter-spacing: v.$letter-spacing-meta;
}

.page-tabs__list {
  display: inline-flex;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid v.$color-ink;
  border-radius: 999px;
  overflow: hidden;
}

.page-tabs__tab {
  display: inline-flex;
  align-items: center;
  // 維持最小觸控尺寸
  min-height: v.$tap-target-min;
  padding: 0 1rem;
  font-size: v.$font-size-nav;
  letter-spacing: v.$letter-spacing-meta;
  transition: background-color 0.15s ease, color 0.15s ease;
}

// 作用中分頁反白，與未選取分頁拉開對比
.page-tabs__tab.router-link-exact-active {
  background-color: v.$color-ink;
  color: v.$color-reverse;
}

.page-tabs__tab:not(.router-link-exact-active):hover {
  background-color: rgba(17, 17, 17, 0.08);
}
</style>
