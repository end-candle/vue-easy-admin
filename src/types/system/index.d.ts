import type { Menu } from './Menu';
import type { Role } from './role';

export type SystemModel = {
  /**
   * 角色列表
   */
  roleList: Role[];
  /**
   * 菜单
   */
  menus: Menu[];
};
