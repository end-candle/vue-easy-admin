/**
 * 标准响应
 */
export type StandardResponse<T> = {
  /**
   * 状态码
   */
  code: number;
  /**
   * 响应数据
   */
  data?: T;
  /**
   * 响应消息
   */
  message?: string;
};

/**
 * 分页对象
 */
export type PageBean<T> = {
  /**
   * 当前页
   */
  number: number;
  /**
   * 每页条数
   */
  size: number;
  /**
   * 总条数
   */
  totalElements: number;
  /**
   * 总页数
   */
  totalPages: number;
  /**
   * 是否是第一页
   */
  first: boolean;
  /**
   * 是否是最后一页
   */
  last: boolean;
  /**
   * 数据集合
   */
  content: T[];
};

/**
 * 标准分页响应
 */
export type StandardPageResponse<T> = StandardResponse<PageBean<T>>;
