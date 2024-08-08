<template>
  <ElSubMenu
    v-if="menu.children"
    :index="menu.path + '__parent'"
    :popper-append-to-body="false"
  >
    <template #title>
      <i
        v-if="menu.meta?.icon"
        :class="menu.meta?.icon"
      ></i>
      <span>{{ menu.meta?.title }}</span>
    </template>
    <TheSideMenuItem
      v-for="childMenu in menu.children"
      :key="childMenu.path"
      :menu="childMenu"
    ></TheSideMenuItem>
  </ElSubMenu>
  <ElMenuItem
    v-else
    :index="menu.path"
  >
    <i
      v-if="menu.meta?.icon"
      :class="menu.meta?.icon"
    ></i>
    <template #title>
      <span>{{ menu.meta?.title }}</span>
    </template>
  </ElMenuItem>
</template>

<script lang="ts" setup>
import type { TheSideMenuItemProps } from './types/side-menu-item';

defineProps<TheSideMenuItemProps>();
</script>
