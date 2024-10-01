<template>
  <div
    :class="[
      {
        'cursor-not-allowed color-gray': disabled,
        'border-b border-b-solid border-b-#e4e7ed': divided,
      },
      'contextmenu__item',
      'px-3',
      'lh-8',
      'cursor-pointer',
      'text-sm',
      'hover:bg-#ecf5ff',
      'hover:color-blue',
      'rounded-sm',
    ]"
    :aria-disabled="disabled"
    :tabindex="disabled ? undefined : -1"
    @click="handleClick"
  >
    <i
      v-if="icon"
      :class="icon"
    ></i>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup generic="T">
import { inject } from 'vue';
import type { ContextmenuItemProps } from './types/contextmenu-item';
import type { ContextmenuProvider } from './types/contextmenu';

const props = withDefaults(defineProps<ContextmenuItemProps<T>>(), {
  disabled: false,
  divided: false,
});

const { bus } = inject('contextmenu') as ContextmenuProvider<T>;

function handleClick() {
  if (props.disabled) {
    return;
  }
  bus.emit('command', props.command);
}
</script>
