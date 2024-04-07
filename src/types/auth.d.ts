/**
 * 用户信息
 */
export type User = {
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 删除标志（0代表未删除，1代表已删除）
   */
  delFlag?: number;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 用户性别（0保密，1男，2女）
   */
  gender?: number;
  /**
   * ID 编号
   */
  id: number;
  /**
   * 昵称
   */
  nickName: string;
  /**
   * 手机号
   */
  phoneNumber?: string;
  /**
   * 账号状态（0未激活 1正常 2停用 3过期 4锁定）
   */
  status?: number;
  /**
   * 用户名
   */
  userName: string;
  /**
   * 用户类型（0游客，1普通用户，2管理员，3超级管理员）
   */
  userType?: number;
};
