<template>
  <ElContainer class="min-h-screen">
    <ElAside
      v-if="showSidebar"
      :width="asideWidth"
      class="fixed top-0 left-0 h-full color-white main-layout__aside"
    >
      <TheLogo></TheLogo>
      <TheSideMenu :fold="fold"></TheSideMenu>
    </ElAside>
    <ElAside
      v-if="showSidebar"
      class="main-layout__aside-placeholder"
      :width="asideWidth"
    ></ElAside>
    <ElContainer class="bg-#f0f2f5">
      <ElHeader
        v-if="showHeader"
        :height="headerHeight"
        class="fixed top-0 right-0 z-100 bg-white"
        :style="{ left: asideWidth }"
      >
        <TheHeader
          :fold="fold"
          @change-fold="handleToggleFold"
        ></TheHeader>
        <TheTabs
          v-if="showTab"
          ref="tabs"
        ></TheTabs>
      </ElHeader>
      <div
        v-if="showHeader"
        class="main-layout__header-placeholder"
        :style="{ height: headerHeight }"
      ></div>
      <ElMain class="p-t-0">
        <router-view />
      </ElMain>
      <ElFooter v-if="showFooter">
        <TheFooter></TheFooter>
      </ElFooter>
    </ElContainer>
  </ElContainer>
</template>

<script lang="ts" setup>
import { computed, provide, ref } from 'vue';
import type { MainLayoutProps, MainLayoutProvider } from './types/main-layout';

const props = withDefaults(defineProps<MainLayoutProps>(), {
  showSidebar: true,
  showHeader: true,
  showFooter: true,
  showTab: true,
});

const fold = ref(false);

const headerHeight = ref('108px');

const asideWidth = computed(() => {
  return fold.value ? '64px' : '256px';
});

provide<MainLayoutProvider>('main-layout', {
  asideWidth,
});

function handleToggleFold() {
  fold.value = !fold.value;
}
</script>

<style lang="css">
:root {
  --main-layout__aside-bg-color: #001529;
}

.main-layout__aside {
  background-color: var(--main-layout__aside-bg-color);
}
</style>
