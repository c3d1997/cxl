<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="profile-section">
    <h2 class="profile-section__label">{{ label }}</h2>

    <div class="profile-section__body">
      <slot />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/styles/variables' as v;

// 標籤欄在左、內容在右，沿用索引頁的髮絲線分隔節奏
.profile-section {
  display: grid;
  grid-template-columns: 8rem 1fr;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-top: 1px solid v.$color-rule;
}

.profile-section__label {
  margin: 0;
  font-size: v.$font-size-meta;
  font-weight: 400;
  letter-spacing: v.$letter-spacing-meta;
}

@media (max-width: v.$breakpoint-md) {
  .profile-section {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
}
</style>
