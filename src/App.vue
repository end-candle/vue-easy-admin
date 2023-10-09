<script setup lang="ts">
import { RouterView } from 'vue-router';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
</script>

<template>
  <ElConfigProvider :locale="zhCn">
    <RouterView />
  </ElConfigProvider>
</template>
