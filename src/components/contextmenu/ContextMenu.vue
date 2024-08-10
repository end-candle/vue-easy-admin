<template>
  <div
    ref="contextmenu"
    class="contextmenu"
  >
    <slot name="default"></slot>
  </div>
  <Teleport to="body">
    <div
      v-if="visible"
      ref="contextmenuPanel"
      class="contextmenu-panel fixed shadow-md bg-white"
      :style="position"
    >
      <slot name="menu"></slot>
    </div>
  </Teleport>
</template>

<script lang="ts" setup generic="T">
import { onClickOutside, useEventBus, useEventListener } from '@vueuse/core';
import { shallowRef, ref, onMounted, provide, type CSSProperties, onUnmounted } from 'vue';
import type { ContextmenuEmits, ContextmenuProvider } from './types/contextmenu';
const contextmenu = shallowRef<HTMLElement>();
const contextmenuPanel = shallowRef<HTMLElement>();
const timeout = ref<number>();
const visible = ref(false);
const position = ref<CSSProperties>({});
const bus = useEventBus<string, T>('command');
const emit = defineEmits<ContextmenuEmits<T>>();

function handleMenuItemClick(command?: T) {
  emit('command', command);
}

function show() {
  clearTimeout(timeout.value);
  timeout.value = setTimeout(() => {
    visible.value = true;
  }, 0);
}

function hide() {
  clearTimeout(timeout.value);
  timeout.value = setTimeout(() => {
    visible.value = false;
  }, 0);
}

function handleClick() {
  if (visible.value) {
    hide();
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
  useEventListener(contextmenu, 'contextmenu', handleContextmenu);
  useEventListener(contextmenu, 'click', handleClick);
  onClickOutside(contextmenuPanel, hide);
  const unsubscribe = bus.on((event: string, command?: T) => {
    hide();
    if (event === 'command') {
      handleMenuItemClick(command);
    }
  });
  onUnmounted(unsubscribe);
}

provide<ContextmenuProvider<T>>('contextmenu', {
  bus,
  hide,
});

onMounted(() => {
  initEvent();
});
</script>
