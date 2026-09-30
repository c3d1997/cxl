<script setup>
import WorkRow from '@/components/WorkRow.vue'
import { works } from '@/data/works'
</script>

<template>
  <h1 class="home-view__title">作品集</h1>

  <div class="home-view__shelf">
    <WorkRow v-for="work in works" :key="work.index" :work="work" />
  </div>
</template>

<style lang="scss" scoped>
// 標題僅供輔助技術與 SEO 使用，視覺上隱藏
.home-view__title {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}
</style>
