import type { Router } from 'vue-router';
import type { MaybePromise } from './common';
import type { Menu } from './system/Menu';

/**
 * 扩展router-meta的类型 此处必须要export {} 不然找不到类型
 */
declare module 'vue-router' {
  interface RouteMeta extends Partial<Menu> {
    /**
     * 任意用户可访问
     */
    anyOne?: boolean;
  }
}

/**
 * 路由守卫
 */
export type RouteGuard = (app: App<Element>, router: Router) => void;

/**
 * 获取路由
 */
export type GetRoutes = (app?: App<Element>) => MaybePromise<readonly RouteRecordRaw[]>;

export {};
