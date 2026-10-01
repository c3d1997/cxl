<script setup>
import { RouterLink } from 'vue-router'

import PageTabs from '@/components/PageTabs.vue'
import RollingCube from '@/components/RollingCube.vue'
</script>

<template>
  <aside class="site-sidebar">
    <!-- 頂部：識別 -->
    <div class="site-sidebar__head">
      <RouterLink to="/" class="site-sidebar__logo">CXL</RouterLink>
    </div>

    <!-- 中段：唯一的動態元素，串起上下兩端 -->
    <div class="site-sidebar__middle">
      <RollingCube />
    </div>

    <!-- 底部：分頁切換與聯絡方式 -->
    <div class="site-sidebar__foot">
      <PageTabs />
      <p class="site-sidebar__contact">C3D1997@GMAIL.COM</p>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
@use '../assets/styles/variables' as v;

.site-sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  background-color: v.$color-sidebar;
}

.site-sidebar__middle {
  display: flex;
  justify-content: center;
}

.site-sidebar__logo {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.site-sidebar__contact {
  margin-top: 1rem;
  font-size: v.$font-size-meta;
  letter-spacing: v.$letter-spacing-meta;
}

@media (max-width: v.$breakpoint-md) {
  .site-sidebar {
    flex-direction: row;
    align-items: center;
    padding: 1rem;
  }

  .site-sidebar__middle,
  .site-sidebar__contact {
    display: none;
  }
}
</style>
