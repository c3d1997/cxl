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

.page-tabs__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.page-tabs__tab {
  display: inline-flex;
  align-items: center;
  // 維持最小觸控尺寸
  min-height: v.$tap-target-min;
  font-size: v.$font-size-nav;
  letter-spacing: v.$letter-spacing-meta;
}

.page-tabs__tab.router-link-exact-active {
  text-decoration: underline;
  text-underline-offset: 0.25em;
}

@media (max-width: v.$breakpoint-md) {
  .page-tabs__list {
    display: flex;
    gap: 1rem;
  }
}
</style>
