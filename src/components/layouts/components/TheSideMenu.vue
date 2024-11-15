<template>
  <ElMenu
    :default-active="current"
    :collapse="fold"
    :collapse-transition="false"
    :router="true"
    class="!b-r-none side-menu"
  >
    <TheSideMenuItem
      v-for="menu in displayMenus"
      :key="menu.code"
      :menu="menu"
    ></TheSideMenuItem>
  </ElMenu>
</template>

<script lang="ts" setup>
import { useSystemStore } from '@/stores/system';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import type { TheSideMenuProps } from './types/side-menu';
const route = useRoute();

withDefaults(defineProps<TheSideMenuProps>(), {
  fold: false,
});

const { displayMenus } = storeToRefs(useSystemStore());

const current = computed<string>(() => {
  return (route.name || '') as string;
});
</script>

<style lang="css" scoped>
.side-menu {
  --el-menu-item-height: 40px;
  --el-menu-item-line-height: 40px;
  --el-menu-hover-bg-color: transparent;
  --el-menu-bg-color: transparent;
  --el-menu-text-color: rgb(255 255 255 / 65%);
  --el-menu-hover-text-color: #fff;
  --el-menu-active-color: #fff;
  --el-menu-active-bg-color: var(--el-color-primary);

  :deep(.el-sub-menu .el-menu-item) {
    --el-menu-sub-item-height: 40px;
    --el-menu-sub-item-line-height: 40px;
  }

  :deep(.el-menu-item) {
    margin: 4px 0;

    &.is-active {
      background-color: var(--el-menu-active-bg-color);
    }

    &:hover {
      color: var(--el-menu-hover-text-color);
    }
  }

  :deep(.el-sub-menu) {
    &.is-active {
      > .el-sub-menu__title {
        color: var(--el-menu-active-color);
      }
    }
  }
}
</style>
