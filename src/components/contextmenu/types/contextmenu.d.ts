export type BusEvent = 'command' | 'hideOther';

export type ContextmenuEmits<T> = {
  /**
   * 指令
   */
  command: [command: T];
};

export type ContextmenuProvider<T> = {
  hideContextmenu: () => void;
  /**
   * 处理菜单点击
   * @param command 指令
   * @returns void
   */
  handleMenuItemClick: (command: T) => void;
};
