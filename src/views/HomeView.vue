<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import WorkFilter from '@/components/WorkFilter.vue'
import WorkRow from '@/components/WorkRow.vue'
import { useWorkProgress } from '@/composables/useWorkProgress'
import { WORK_CATEGORIES, works } from '@/data/works'

const route = useRoute()
const { setProgress, setTotal, reset } = useWorkProgress()

const DEFAULT_CATEGORY = WORK_CATEGORIES[0].value

// 僅接受已定義的分類，網址帶入未知值時退回預設分類而非空清單
const activeCategory = computed(() => {
  const requested = route.query.category
  const isKnown = WORK_CATEGORIES.some((item) => item.value === requested)

  return isKnown ? requested : DEFAULT_CATEGORY
})

const visibleWorks = computed(() =>
  works.filter((work) => work.category === activeCategory.value),
)

/** 各分類的作品數量，顯示在書籤上 */
const counts = computed(() =>
  Object.fromEntries(
    WORK_CATEGORIES.map(({ value }) => [
      value,
      works.filter((work) => work.category === value).length,
    ]),
  ),
)

const shelf = ref(null)
let rows = []
let isTicking = false

// 判定線：視窗上緣往下 20%，越過此線的最後一列即為「目前看到的」
const BAND_RATIO = 0.2

const updateProgress = () => {
  if (rows.length === 0) return

  const line = window.innerHeight * BAND_RATIO
  let position = 1

  rows.forEach((row, index) => {
    if (row.getBoundingClientRect().top <= line) position = index + 1
  })

  setProgress(position)
}

// 以 rAF 節流，避免每次捲動事件都觸發版面量測
const handleScroll = () => {
  if (isTicking) return

  isTicking = true
  requestAnimationFrame(() => {
    updateProgress()
    isTicking = false
  })
}

const refreshRows = () => {
  rows = [...(shelf.value?.querySelectorAll('.work-row') ?? [])]
  updateProgress()
}

watch(
  visibleWorks,
  async (list) => {
    setTotal(list.length)
    await nextTick()
    refreshRows()
  },
  { immediate: true },
)

onMounted(() => {
  refreshRows()
  window.addEventListener('scroll', handleScroll, { passive: true })
  // 圖片延遲載入會改變列高，載入後需重新判定
  window.addEventListener('load', updateProgress)
  window.addEventListener('resize', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('load', updateProgress)
  window.removeEventListener('resize', handleScroll)
  reset()
})
</script>

<template>
  <h1 class="home-view__title">作品集</h1>

  <div class="home-view">
    <WorkFilter
      :categories="WORK_CATEGORIES"
      :active-category="activeCategory"
      :counts="counts"
    />

    <div ref="shelf" class="home-view__shelf">
      <WorkRow v-for="work in visibleWorks" :key="work.slug" :work="work" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/variables' as v;

// 書籤在左、作品清單在右
.home-view {
  display: flex;
  align-items: flex-start;
}

.home-view__shelf {
  flex: 1 1 auto;
  min-width: 0;
}

// 標題僅供輔助技術與 SEO 使用，視覺上隱藏
.home-view__title {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

@media (max-width: v.$breakpoint-md) {
  .home-view {
    display: block;
  }
}
</style>
