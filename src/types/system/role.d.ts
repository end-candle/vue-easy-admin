/**
 * 角色
 */
export type Role = {
  /**
   * 申请时间
   */
  applyDate: string;
  /**
   * 角色编码
   */
  code: string;
  /**
   * 删除标志（0代表未删除，1代表已删除）
   */
  delFlag: number;
  /**
   * 过期时间
   */
  expiredDate: string;
  /**
   * ID 编号
   */
  id: number;
  /**
   * 角色名称
   */
  name: string;
  /**
   * 权限列表
   */
  permissions: string[];
};
