<script setup>
// 版面尚未切版，暫時僅提供路由切換入口
</script>

<template>
  <nav>
    <RouterLink to="/">作品集</RouterLink>
    <RouterLink to="/about">個人介紹</RouterLink>
  </nav>

  <main>
    <RouterView />
  </main>
</template>
