export type ContextmenuItemProps<T> = {
  /**
   * 指令
   */
  command: T;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 分割线
   */
  divided?: boolean;
  /**
   * 图标
   */
  icon?: string;
};
