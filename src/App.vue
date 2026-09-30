<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import SiteSidebar from '@/components/SiteSidebar.vue'

const route = useRoute()

// 作品詳細頁佔滿整個畫面，不顯示側欄
const hasSidebar = computed(() => !route.meta?.isFullBleed)
</script>

<template>
  <div class="app-shell">
    <SiteSidebar v-if="hasSidebar" class="app-shell__sidebar" />

    <main class="app-shell__content">
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
@use './assets/styles/variables' as v;

.app-shell {
  display: flex;
  align-items: flex-start;
  min-height: 100vh;
}

// 左欄固定不動，右欄獨立捲動
.app-shell__sidebar {
  position: sticky;
  top: 0;
  flex: 0 0 v.$sidebar-width;
  height: 100vh;
}

.app-shell__content {
  flex: 1 1 auto;
  min-width: 0;
}

@media (max-width: v.$breakpoint-md) {
  .app-shell {
    flex-direction: column;
    // 直向排列時需改回 stretch，否則子元素會縮成內容寬度
    align-items: stretch;
  }

  .app-shell__sidebar {
    flex: none;
    width: 100%;
    height: auto;
  }
}
</style>
