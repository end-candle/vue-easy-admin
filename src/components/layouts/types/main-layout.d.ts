import type { ComputedRef } from 'vue';

export type MainLayoutProps = {
  /**
   * 是否显示侧边栏
   * @default true
   */
  showSidebar?: boolean;
  /**
   * 是否显示头部
   * @default true
   */
  showHeader?: boolean;
  /**
   * 是否显示底部
   * @default true
   */
  showFooter?: boolean;
  /**
   * 是否显示标签页
   * @default true
   */
  showTab?: boolean;
};

export type MainLayoutProvider = {
  asideWidth: ComputedRef<string>;
};
