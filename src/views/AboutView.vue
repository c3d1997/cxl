<script setup>
import ProfileSection from '@/components/ProfileSection.vue'
import { intro, links, skillGroups, timeline } from '@/data/profile'
</script>

<template>
  <div class="about-view">
    <h1 class="about-view__heading">個人介紹</h1>

    <!-- 自述獨立於分隔線之上，四周留白讓它成為視覺起點 -->
    <p class="about-view__intro">{{ intro }}</p>

    <ProfileSection
      v-for="section in timeline"
      :key="section.id"
      :label="section.label"
    >
      <ul class="about-view__list">
        <li v-for="entry in section.entries" :key="entry.period" class="about-view__entry">
          <span class="about-view__period">{{ entry.period }}</span>
          <span class="about-view__role">{{ entry.title }}</span>
          <span class="about-view__org">{{ entry.org }}</span>
        </li>
      </ul>
    </ProfileSection>

    <ProfileSection label="技能">
      <dl class="about-view__skills">
        <template v-for="group in skillGroups" :key="group.label">
          <dt class="about-view__skill-label">{{ group.label }}</dt>
          <dd class="about-view__skill-items">{{ group.items.join('、') }}</dd>
        </template>
      </dl>
    </ProfileSection>

    <ProfileSection label="聯絡">
      <ul class="about-view__list">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="about-view__link" target="_blank" rel="noopener">
            {{ link.label }}
          </a>
        </li>
      </ul>
    </ProfileSection>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/variables' as v;

.about-view {
  padding: 1.5rem 1.5rem 6rem;
}

// 標題僅供輔助技術與 SEO 使用，視覺上隱藏
.about-view__heading {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

.about-view__intro {
  max-width: 24em;
  margin: 4rem 0 6rem;
  font-size: v.$font-size-lead;
  line-height: 1.7;
}

.about-view__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

// 期間欄固定寬度，讓多筆經歷的年份對齊成一直線
.about-view__entry {
  display: grid;
  grid-template-columns: 7rem 1fr;
  gap: 0 1rem;
  padding: 0.35rem 0;
  font-size: v.$font-size-body;
}

.about-view__period {
  grid-row: span 2;
  font-size: v.$font-size-meta;
  letter-spacing: v.$letter-spacing-meta;
  line-height: 1.9;
}

.about-view__org {
  color: v.$color-secondary;
}

.about-view__skills {
  display: grid;
  grid-template-columns: 7rem 1fr;
  gap: 0.35rem 1rem;
  margin: 0;
  font-size: v.$font-size-body;
}

.about-view__skill-label {
  font-size: v.$font-size-meta;
  letter-spacing: v.$letter-spacing-meta;
}

.about-view__skill-items {
  margin: 0;
}

.about-view__link {
  display: inline-flex;
  align-items: center;
  // 維持最小觸控尺寸
  min-height: v.$tap-target-min;
  font-size: v.$font-size-body;
  letter-spacing: v.$letter-spacing-meta;
  text-decoration: underline;
  text-underline-offset: 0.25em;
}

@media (max-width: v.$breakpoint-md) {
  .about-view__intro {
    margin: 2rem 0 3rem;
    font-size: v.$font-size-nav * 1.25;
  }

  .about-view__entry,
  .about-view__skills {
    grid-template-columns: 1fr;
    gap: 0.15rem;
  }

  .about-view__period {
    grid-row: auto;
  }
}
</style>
