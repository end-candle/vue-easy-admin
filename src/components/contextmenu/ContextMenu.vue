<template>
  <div
    ref="contextmenu"
    class="contextmenu"
    @contextmenu="handleContextmenu"
    @click="handleClick"
  >
    <slot name="default"></slot>
  </div>
  <Teleport to="body">
    <div
      v-if="visible"
      ref="contextmenuPanel"
      class="contextmenu-panel fixed shadow-md bg-white z-101"
      :style="position"
    >
      <slot name="menu"></slot>
    </div>
  </Teleport>
</template>

<script lang="ts" setup generic="T">
import { onClickOutside, useEventBus } from '@vueuse/core';
import { shallowRef, ref, onMounted, provide, type CSSProperties, onUnmounted, useId } from 'vue';
import type { ContextmenuEmits, ContextmenuProvider, BusEvent } from './types/contextmenu';
import { CONTEXTMENU } from '@/components/contextmenu/constants';
const contextmenu = shallowRef<HTMLElement>();
const contextmenuPanel = shallowRef<HTMLElement>();
const timeout = ref<ReturnType<typeof setTimeout>>();
const visible = ref(false);
const position = ref<CSSProperties>({});
const bus = useEventBus<BusEvent, T | string>(CONTEXTMENU.bus);
const emit = defineEmits<ContextmenuEmits<T>>();
const key = useId();

function handleMenuItemClick(command: T) {
  emit('command', command);
}

function show() {
  bus.emit('hideOther', key);
  clearTimeout(timeout.value);
  timeout.value = setTimeout(() => {
    visible.value = true;
  }, 0);
}

function hideContextmenu() {
  clearTimeout(timeout.value);
  timeout.value = setTimeout(() => {
    visible.value = false;
  }, 0);
}

function handleClick() {
  if (visible.value) {
    hideContextmenu();
  }
}

function handleContextmenu(e: MouseEvent) {
  e.preventDefault();
  show();
  position.value = {
    left: e.clientX + 'px',
    top: e.clientY + 'px',
  };
  return false;
}

function initEvent() {
  onClickOutside(contextmenuPanel, hideContextmenu);
  const unsubscribe = bus.on((event: string, args?: T | string) => {
    if (event === 'hideOther' && args !== key) {
      hideContextmenu();
    }
  });
  onUnmounted(unsubscribe);
}

provide<ContextmenuProvider<T>>(CONTEXTMENU.provider, {
  hideContextmenu,
  handleMenuItemClick,
});

onMounted(initEvent);
</script>
