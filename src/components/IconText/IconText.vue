<script setup lang="ts">
import { computed } from 'vue';
import type { IconTextProps } from './types/icon-text';
import { Color } from '@helpers/color';
const props = withDefaults(defineProps<IconTextProps>(), {
  size: '1.4em',
});

const iconText = computed(() => props.text[0]);
const iconColor = computed(() => {
  if (props.iconColor) {
    return props.iconColor;
  }
  const arr = new Uint8Array(3);
  crypto.getRandomValues(arr);
  const color = new Color({ R: arr[0], G: arr[1], B: arr[2] });
  return color.highContrastColor().hexColor;
});
</script>

<template>
  <div class="icon-text">
    <slot name="icon" :iconText="iconText" :iconColor="iconColor">
      <span class="icon-text__icon">
        {{ iconText }}
      </span>
    </slot>
    <span class="icon-text__body">{{ text }}</span>
  </div>
</template>

<style scoped>
.icon-text__icon {
  display: inline-block;
  width: v-bind('$props.size');
  height: v-bind('$props.size');
  background-color: v-bind('iconColor');
  color: #fff;
  line-height: v-bind('$props.size');
  text-align: center;
}
</style>
