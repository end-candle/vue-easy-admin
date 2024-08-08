<template>
  <ElMenu
    :default-active="$route.path"
    :router="true"
    :collapse="fold"
    :collapse-transition="false"
    active-text-color="#ffffff"
    text-color="#ffffffa6"
    class="sider-menu"
  >
    <TheSideMenuItem
      v-for="menu in displayMenus"
      :key="menu.path"
      :menu="menu"
    ></TheSideMenuItem>
  </ElMenu>
</template>

<script lang="ts" setup>
import type { TheSideMenuProps } from './types/side-menu';
import { storeToRefs } from 'pinia';
import { useSystemStore } from '@/stores/system';

withDefaults(defineProps<TheSideMenuProps>(), {
  fold: false,
});

const { displayMenus } = storeToRefs(useSystemStore());
</script>
