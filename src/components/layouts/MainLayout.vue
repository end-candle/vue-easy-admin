<template>
  <ElContainer class="min-h-screen">
    <ElAside
      :width="asideWidth"
      class="fixed top-0 left-0 h-full bg-#001529 color-white"
    >
      <TheLogo></TheLogo>
      <TheSideMenu :fold="fold"></TheSideMenu>
    </ElAside>
    <ElAside
      class="main-layout__aside-placeholder"
      :width="asideWidth"
    ></ElAside>
    <ElContainer>
      <ElHeader
        :height="headerHeight"
        class="fixed top-0 right-0"
        :style="{ left: asideWidth }"
      >
        <TheHeader
          :fold="fold"
          @change-fold="handleToggleFold"
        ></TheHeader>
        <TheTabs ref="tabs"></TheTabs>
      </ElHeader>
      <div
        class="main-layout__header-placeholder"
        :style="{ height: headerHeight }"
      ></div>
      <ElMain class="p-t-0">
        <router-view />
      </ElMain>
      <ElFooter>
        <TheFooter></TheFooter>
      </ElFooter>
    </ElContainer>
  </ElContainer>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

const fold = ref(false);

const headerHeight = ref('108px');

const asideWidth = computed(() => {
  return fold.value ? '64px' : '256px';
});

function handleToggleFold() {
  fold.value = !fold.value;
}
</script>
