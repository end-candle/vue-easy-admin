import type { RouteRecordName } from 'vue-router';

/**
 * 路由名称
 */
export const ROUTE_NAME: Record<string, RouteRecordName> = {
  HOME: 'home',
  LOGIN: 'login',
  REGISTER: 'register',
  PROFILE: 'profile',
  DASHBOARD: 'dashboard',
  SETTINGS: 'settings',
  NOT_FOUND: 'notFound',
  ERROR: 'error',
  ERROR_404: 'error404',
};

/**
 * 白名单
 */
export const WHITE_LIST: RouteRecordName[] = [
  ROUTE_NAME.LOGIN,
  ROUTE_NAME.REGISTER,
  ROUTE_NAME.NOT_FOUND,
  ROUTE_NAME.ERROR,
  ROUTE_NAME.ERROR_404,
];
