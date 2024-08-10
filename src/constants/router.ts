import type { RouteRecordName } from 'vue-router';

/**
 * 路由名称
 */
export const ROUTE_NAME: Record<string, RouteRecordName> = {
  HOME: 'home',
  LOGIN: 'login',
  REGISTER: 'register',
  REDIRECT: 'redirect',
  PROFILE: 'profile',
  DASHBOARD: 'dashboard',
  SETTINGS: 'settings',
  NOT_FOUND: 'notFound',
  ERROR: 'error',
  ERROR_404: 'error404',
};
