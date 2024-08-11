/**
 * 菜单
 */
export type Menu = {
  /**
   * 是否固定
   */
  affix?: boolean;
  /**
   * 子菜单
   */
  children?: Menu[];
  /**
   * 菜单编码
   */
  code: string;
  /**
   * 隐藏菜单
   */
  hideInMenu?: boolean;
  /**
   * ID 编号
   */
  id: number;
  /**
   * 是否缓存
   */
  keepAlive?: boolean;
  /**
   * 菜单标题
   */
  title: string;
  /**
   * 排序
   */
  sort?: number;
  /**
   * 父级ID
   */
  parentCode?: string;
  /**
   * 路径
   */
  path?: string;
};
