<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import { onBeforeMount, ref } from 'vue';
import { RouterView } from 'vue-router';
import { useSystemStore } from './stores/system';
import { ElLoading } from 'element-plus';
import 'element-plus/theme-chalk/el-loading.css';
import { useI18n } from 'vue-i18n';

const isInit = ref(false);
const i18n = useI18n();

async function init() {
  if (isInit.value) {
    return;
  }
  const loading = ElLoading.service({
    lock: true,
    fullscreen: true,
    text: i18n.t('system.init'),
  });
  try {
    await useSystemStore().initSystem();
  } finally {
    isInit.value = true;
    loading.close();
  }
}

onBeforeMount(init);
</script>

<template>
  <ElConfigProvider :locale="zhCn">
    <RouterView v-if="isInit" />
  </ElConfigProvider>
</template>
