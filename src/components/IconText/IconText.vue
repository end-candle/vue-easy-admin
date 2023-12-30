<script setup lang="ts">
import { computed } from 'vue';
import type { IconTextProps } from './types/icon-text';
const props = defineProps<IconTextProps>();

const iconText = computed(() => props.text[0]);
</script>

<template>
  <div class="icon-text">
    <slot name="icon">
      <span class="icon-text__icon">
        {{ iconText }}
      </span>
    </slot>
    <span class="icon-text__body">{{ text }}</span>
  </div>
</template>
