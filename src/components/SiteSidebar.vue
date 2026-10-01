<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

import PageTabs from '@/components/PageTabs.vue'
import { useWorkProgress } from '@/composables/useWorkProgress'
import { links, profile } from '@/data/profile'

const { current, total } = useWorkProgress()

/** 補零寬度隨總數變動，08 / 17 與 008 / 025 都能對齊 */
const padded = computed(() => {
  const width = String(total.value).length

  return {
    current: String(current.value).padStart(width, '0'),
    total: String(total.value).padStart(width, '0'),
  }
})

const currentYear = new Date().getFullYear()
</script>

<template>
  <aside class="site-sidebar">
    <!-- 頂部：識別，版面的支點 -->
    <div class="site-sidebar__head">
      <RouterLink to="/" class="site-sidebar__name">{{ profile.name }}</RouterLink>
      <p class="site-sidebar__role">
        {{ profile.role }}
        <span class="site-sidebar__role-en">{{ profile.roleEn }}</span>
      </p>
    </div>

    <!-- 中段：作品清單的捲動位置，僅在作品集頁有值 -->
    <p v-if="total > 0" class="site-sidebar__progress">
      {{ padded.current }}
      <span class="site-sidebar__progress-total">/ {{ padded.total }}</span>
    </p>
    <span v-else />

    <!-- 底部：分組資訊 -->
    <div class="site-sidebar__foot">
      <div class="site-sidebar__group">
        <p class="site-sidebar__group-label">導覽</p>
        <PageTabs />
      </div>

      <div class="site-sidebar__group">
        <p class="site-sidebar__group-label">聯絡</p>
        <ul class="site-sidebar__links">
          <li v-for="link in links" :key="link.href">
            <a
              :href="link.href"
              class="site-sidebar__link"
              target="_blank"
              rel="noopener"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>

      <p class="site-sidebar__copyright">© {{ currentYear }} {{ profile.name }}</p>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
@use '../assets/styles/mixins' as m;
@use '../assets/styles/variables' as v;

.site-sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  background-color: v.$color-sidebar;
  @include m.paper-texture;
}

.site-sidebar__name {
  display: block;
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1;
}

.site-sidebar__role {
  margin-top: 0.75rem;
  font-size: v.$font-size-meta;
  letter-spacing: v.$letter-spacing-meta;
}

.site-sidebar__role-en {
  margin-left: 0.75rem;
  color: v.$color-secondary;
}

// 中段唯一的元素：功能性的位置指示，非裝飾
.site-sidebar__progress {
  font-size: v.$font-size-meta;
  letter-spacing: v.$letter-spacing-meta;
  // 等寬數字，捲動時數字不會左右跳動
  font-variant-numeric: tabular-nums;
}

.site-sidebar__progress-total {
  color: v.$color-secondary;
}

.site-sidebar__group + .site-sidebar__group {
  margin-top: 1.25rem;
}

.site-sidebar__group-label {
  margin-bottom: 0.25rem;
  color: v.$color-secondary;
  font-size: v.$font-size-meta;
  letter-spacing: v.$letter-spacing-meta;
}

.site-sidebar__links {
  margin: 0;
  padding: 0;
  list-style: none;
}

.site-sidebar__link {
  display: inline-flex;
  align-items: center;
  // 維持最小觸控尺寸
  min-height: v.$tap-target-min;
  font-size: v.$font-size-meta;
  letter-spacing: v.$letter-spacing-meta;
}

.site-sidebar__copyright {
  margin-top: 1.25rem;
  color: v.$color-secondary;
  font-size: v.$font-size-meta;
  letter-spacing: v.$letter-spacing-meta;
}

@media (max-width: v.$breakpoint-md) {
  .site-sidebar {
    flex-direction: row;
    align-items: center;
    padding: 1rem;
  }

  .site-sidebar__name {
    font-size: 1.375rem;
  }

  // 窄螢幕僅保留識別與頁面導覽
  .site-sidebar__role,
  .site-sidebar__progress,
  .site-sidebar__group-label,
  .site-sidebar__links,
  .site-sidebar__copyright {
    display: none;
  }
}
</style>
