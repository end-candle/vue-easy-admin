/**
 * token字段名
 */
export const TOKEN = 'Authorization';

/**
 * locale字段名
 */
export const LOCALE = 'locale';

/**
 * TAB_KEY字段名
 */
export const TAB_KEY = 'APP_TAB_LIST';

/**
 * 网络状态
 */
export const NETWORK = {
  /**
   * 网络请求成功
   */
  SUCCESS: 200,
  /**
   * 网络请求失败
   */
  ERROR: 500,
  /**
   * 禁止访问
   */
  FORBIDDEN: 403,
  /**
   * 未登录
   */
  UNAUTHORIZED: 401,
};

/**
 * 响应状态码
 */
export const STATUS_CODE = {
  /**
   * 非法访问
   */
  ILLEGAL: 4001,
  /**
   * token过期
   */
  TOKEN_IS_EXPIRED: 4002,
};

/**
 * 最大递归深度
 */
export const MAX_DEPTH = 10;
