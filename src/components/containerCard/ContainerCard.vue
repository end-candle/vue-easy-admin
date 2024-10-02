<template>
  <div class="container-card">
    <div
      v-if="slots.header"
      class="container-card__header flex"
    >
      <slot name="header"></slot>
    </div>
    <div :class="['container-card__body', bodyClass]">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ContainerCardProps, ContainerCardSlots } from './types/container-card';

defineProps<ContainerCardProps>();

const slots = defineSlots<ContainerCardSlots>();
</script>

<style lang="css">
.container-card {
  border-radius: var(--el-border-radius-base);
  background-color: var(--el-color-white);

  & + & {
    margin-top: var(--el-main-padding);
  }
}

.container-card__header {
  min-height: 48px;
  padding: 12px var(--el-main-padding);
  border-bottom: 1px solid var(--el-border-color-light);
}

.container-card__body {
  padding: var(--el-main-padding);
}
</style>
