import type { UseEventBusReturn } from '@vueuse/core';

export type ContextmenuEmits<T> = {
  /**
   * 指令
   */
  command: [command?: T];
};

export type ContextmenuProvider<T> = {
  /**
   * 事件总线
   */
  bus: UseEventBusReturn<string, T>;
  hide: () => void;
};
