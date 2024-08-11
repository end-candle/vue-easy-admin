<template>
  <ElMenu
    :default-active="current"
    :collapse="fold"
    :collapse-transition="false"
    class="b-r-none"
  >
    <TheSideMenuItem
      v-for="menu in displayMenus"
      :key="menu.code"
      :menu="menu"
    ></TheSideMenuItem>
  </ElMenu>
</template>

<script lang="ts" setup>
import type { TheSideMenuProps } from './types/side-menu';
import { storeToRefs } from 'pinia';
import { useSystemStore } from '@/stores/system';
import { useRoute } from 'vue-router';
import { computed, watch } from 'vue';
import { useCssVar } from '@vueuse/core';
import type { ElMenu } from 'element-plus';
const route = useRoute();

const props = withDefaults(defineProps<TheSideMenuProps>(), {
  fold: false,
  backgroundColor: 'transparent',
  bgHoverColor: 'transparent',
  color: '#ffffff',
});
const bgColor = useCssVar('--el-menu-bg-color');
const color = useCssVar('--el-menu-text-color');
const bgHoverColor = useCssVar('--el-menu-hover-bg-color');

const { displayMenus } = storeToRefs(useSystemStore());

watch(
  [() => props.backgroundColor, () => props.color, () => props.bgHoverColor],
  ([backgroundColor, textColor, backgroundHoverColor]) => {
    bgColor.value = backgroundColor;
    color.value = textColor;
    bgHoverColor.value = backgroundHoverColor;
  },
  {
    immediate: true,
  },
);

const current = computed<string>(() => {
  return (route.name || '') as string;
});
</script>
