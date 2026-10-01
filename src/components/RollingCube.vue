<script setup>
// 純 CSS 3D 立方體，不需 JavaScript 參與動畫
const FACES = ['front', 'back', 'right', 'left', 'top', 'bottom']
</script>

<template>
  <!-- 純裝飾元素，對輔助技術隱藏 -->
  <div class="rolling-cube" aria-hidden="true">
    <div class="rolling-cube__body">
      <span
        v-for="face in FACES"
        :key="face"
        class="rolling-cube__face"
        :class="`rolling-cube__face--${face}`"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/variables' as v;

$size: 72px;
$half: calc($size / 2);

.rolling-cube {
  // perspective 決定透視強度，數值越大越接近正交投影
  perspective: 600px;
  width: $size;
  height: $size;
}

.rolling-cube__body {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: rolling-cube-tumble 24s linear infinite;
}

.rolling-cube__face {
  position: absolute;
  inset: 0;
  border: 1px solid v.$color-ink;
  opacity: 0.35;
}

.rolling-cube__face--front {
  transform: translateZ($half);
}

.rolling-cube__face--back {
  transform: rotateY(180deg) translateZ($half);
}

.rolling-cube__face--right {
  transform: rotateY(90deg) translateZ($half);
}

.rolling-cube__face--left {
  transform: rotateY(-90deg) translateZ($half);
}

.rolling-cube__face--top {
  transform: rotateX(90deg) translateZ($half);
}

.rolling-cube__face--bottom {
  transform: rotateX(-90deg) translateZ($half);
}

// 兩軸同時轉動，避免看起來只是單純繞一軸自轉
@keyframes rolling-cube-tumble {
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }

  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}

// 尊重系統的減少動態設定，停在一個有立體感的角度
@media (prefers-reduced-motion: reduce) {
  .rolling-cube__body {
    animation: none;
    transform: rotateX(-24deg) rotateY(32deg);
  }
}

// 窄螢幕側欄收成橫列，沒有留白可放
@media (max-width: v.$breakpoint-md) {
  .rolling-cube {
    display: none;
  }
}
</style>
