import { readonly, ref } from 'vue'

// 模組層級的共用狀態：作品清單在右側內容欄，進度指示在左側側欄，
// 兩者是不同元件樹的分支，需要一個中介傳遞捲動位置
const current = ref(0)
const total = ref(0)

/**
 * 作品清單的捲動位置
 * @returns {{
 *   current: import('vue').Ref<number>,
 *   total: import('vue').Ref<number>,
 *   setProgress: (position: number) => void,
 *   setTotal: (count: number) => void,
 *   reset: () => void,
 * }}
 */
export const useWorkProgress = () => ({
  current: readonly(current),
  total: readonly(total),
  setProgress: (position) => {
    current.value = position
  },
  setTotal: (count) => {
    total.value = count
    current.value = count > 0 ? 1 : 0
  },
  // 離開作品集頁時清空，側欄才不會在其他頁面顯示進度
  reset: () => {
    current.value = 0
    total.value = 0
  },
})
