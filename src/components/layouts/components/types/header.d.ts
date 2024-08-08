export type TheHeaderProps = {
  /**
   * 是否收缩
   */
  fold?: boolean;
};

export type TheHeaderEmits = {
  /**
   * 是否折叠修改
   */
  changeFold: [fold: boolean];
};
