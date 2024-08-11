<template>
  <ElSubMenu
    v-if="menu.children?.length"
    :index="menu.code + '__parent'"
    :popper-append-to-body="false"
  >
    <template #title>
      <span>{{ menu?.title }}</span>
    </template>
    <TheSideMenuItem
      v-for="childMenu in menu.children"
      :key="childMenu.code"
      :menu="childMenu"
    ></TheSideMenuItem>
  </ElSubMenu>
  <ElMenuItem
    v-else
    :index="menu.code"
    :route="{ name: menu.code, path: menu.path }"
  >
    <template #title>
      <span>{{ menu?.title }}</span>
    </template>
  </ElMenuItem>
</template>

<script lang="ts" setup>
import type { TheSideMenuItemProps } from './types/side-menu-item';

defineProps<TheSideMenuItemProps>();
</script>
