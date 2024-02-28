<script setup lang="ts">
import { RouterView } from 'vue-router';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
</script>

<template>
  <ElConfigProvider :locale="zhCn">
    <RouterView />
  </ElConfigProvider>
</template>
