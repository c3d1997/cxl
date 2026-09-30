<script setup>
import ProfileSection from '@/components/ProfileSection.vue'
import { intro, links, profile, timeline } from '@/data/profile'
</script>

<template>
  <div class="about-view">
    <h1 class="about-view__heading">個人介紹</h1>

    <!-- 姓名與職稱獨立於分隔線之上，四周留白讓它成為視覺起點 -->
    <header class="about-view__identity">
      <p class="about-view__name">{{ profile.name }}</p>
      <p class="about-view__role">
        {{ profile.role }}
        <span class="about-view__role-en">{{ profile.roleEn }}</span>
      </p>
    </header>

    <div class="about-view__intro">
      <p v-for="paragraph in intro" :key="paragraph">{{ paragraph }}</p>
    </div>

    <ProfileSection
      v-for="section in timeline"
      :key="section.id"
      :label="section.label"
    >
      <ul class="about-view__list">
        <li
          v-for="entry in section.entries"
          :key="entry.period"
          class="about-view__entry"
        >
          <span class="about-view__period">{{ entry.period }}</span>

          <div class="about-view__body">
            <a
              v-if="entry.link"
              :href="entry.link"
              class="about-view__entry-title about-view__entry-title--link"
              target="_blank"
              rel="noopener"
            >
              {{ entry.title }} ↗
            </a>
            <p v-else class="about-view__entry-title">{{ entry.title }}</p>

            <p class="about-view__entry-text">{{ entry.description }}</p>

            <p class="about-view__entry-skills">{{ entry.skills.join('・') }}</p>
          </div>
        </li>
      </ul>
    </ProfileSection>

    <ProfileSection label="聯絡">
      <ul class="about-view__list">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="about-view__link"
            target="_blank"
            rel="noopener"
          >
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

.about-view__identity {
  margin-top: 4rem;
}

.about-view__name {
  font-size: v.$font-size-lead;
  letter-spacing: 0.04em;
}

.about-view__role {
  margin-top: 0.35rem;
  font-size: v.$font-size-meta;
  letter-spacing: v.$letter-spacing-meta;
}

.about-view__role-en {
  margin-left: 0.75rem;
  color: v.$color-secondary;
}

.about-view__intro {
  max-width: 34em;
  margin: 2.5rem 0 6rem;
  font-size: v.$font-size-body;
  line-height: 1.9;
  text-align: justify;
}

.about-view__intro p + p {
  margin-top: 1.25rem;
}

.about-view__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

// 期間欄固定寬度，讓多筆經歷的年份對齊成一直線
.about-view__entry {
  display: grid;
  grid-template-columns: 9rem 1fr;
  gap: 0 1.5rem;
  font-size: v.$font-size-body;
}

.about-view__entry + .about-view__entry {
  margin-top: 2rem;
}

.about-view__period {
  font-size: v.$font-size-meta;
  letter-spacing: v.$letter-spacing-meta;
  line-height: 1.9;
}

.about-view__body {
  max-width: 34em;
}

.about-view__entry-title {
  font-weight: 700;
  line-height: 1.7;
}

.about-view__entry-title--link {
  text-decoration: underline;
  text-underline-offset: 0.25em;
}

.about-view__entry-text {
  margin-top: 0.5rem;
  color: v.$color-secondary;
  line-height: 1.9;
  text-align: justify;
}

.about-view__entry-skills {
  margin-top: 0.75rem;
  color: v.$color-secondary;
  font-size: v.$font-size-meta;
  letter-spacing: v.$letter-spacing-meta;
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
  .about-view__identity {
    margin-top: 2rem;
  }

  .about-view__intro {
    margin: 1.5rem 0 3rem;
  }

  .about-view__entry {
    grid-template-columns: 1fr;
    gap: 0.35rem;
  }
}
</style>
