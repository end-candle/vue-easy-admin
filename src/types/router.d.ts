import type { Router } from 'vue-router';

/**
 * 扩展ruoter-meta的类型 此处必须要export {} 不然找不到类型
 */
declare module 'vue-router' {
  interface RouteMeta {
    title?: string;
    hideInMenu?: boolean;
    hideChildrenInMenu?: boolean;
    affix?: boolean;
    keepAlive?: boolean;
    permissions?: string[];
  }
}

export type RouteGuard = (router: Router) => void;

export {};
