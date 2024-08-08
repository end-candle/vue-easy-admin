<template>
  <ElContainer class="main-layout">
    <ElAside
      :width="asideWidth"
      class="main-layout__aside better-scroller"
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
        height="108px"
        class="main-layout__header"
        :style="{ left: asideWidth }"
      >
        <TheHeader
          :fold="fold"
          @change-fold="handleToggleFold"
        ></TheHeader>
        <TheTabs ref="tabs"></TheTabs>
      </ElHeader>
      <div class="main-layout__header-placeholder"></div>
      <ElMain>
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

const asideWidth = computed(() => {
  return fold.value ? '64px' : '256px';
});

function handleToggleFold() {
  fold.value = !fold.value;
}
</script>

<style scoped>
.main-layout {
  min-height: 100vh;
}

.main-layout__aside {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: #001529;
  color: #fff;
}

.main-layout__header {
  position: fixed;
  top: 0;
  right: 0;
}

.main-layout__header-placeholder {
  height: 108px;
}
</style>
