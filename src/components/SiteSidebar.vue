<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <aside class="site-sidebar">
    <!-- 頂部：識別 -->
    <div class="site-sidebar__head">
      <RouterLink to="/" class="site-sidebar__logo">CXL</RouterLink>
    </div>

    <!-- 中段刻意留空，構成負空間 -->

    <!-- 底部：導覽 -->
    <nav class="site-sidebar__foot">
      <ul class="site-sidebar__list">
        <li>
          <RouterLink to="/" class="site-sidebar__link">作品集</RouterLink>
        </li>
        <li>
          <RouterLink to="/about" class="site-sidebar__link">個人介紹</RouterLink>
        </li>
      </ul>

      <p class="site-sidebar__contact">C3D1997@GMAIL.COM</p>
    </nav>
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

.site-sidebar__logo {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.site-sidebar__list {
  margin: 0 0 1rem;
  padding: 0;
  list-style: none;
}

.site-sidebar__link {
  display: inline-block;
  padding: 0.15rem 0;
  font-size: v.$font-size-meta;
  letter-spacing: v.$letter-spacing-meta;
  text-transform: uppercase;
}

.site-sidebar__link.router-link-exact-active {
  text-decoration: underline;
  text-underline-offset: 0.25em;
}

.site-sidebar__contact {
  font-size: v.$font-size-meta;
  letter-spacing: v.$letter-spacing-meta;
}

@media (max-width: v.$breakpoint-md) {
  .site-sidebar {
    flex-direction: row;
    align-items: center;
    padding: 1rem;
  }

  .site-sidebar__list {
    display: flex;
    gap: 1rem;
    margin: 0;
  }

  .site-sidebar__contact {
    display: none;
  }
}
</style>
