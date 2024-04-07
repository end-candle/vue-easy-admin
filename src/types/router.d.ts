import type { Router } from 'vue-router';

/**
 * 扩展ruoter-meta的类型 此处必须要export {} 不然找不到类型
 */
declare module 'vue-router' {
  interface RouteMeta {
    /**
     * 菜单标题
     */
    title?: string;
    /**
     * 隐藏菜单
     */
    hideInMenu?: boolean;
    /**
     * 隐藏子菜单
     */
    hideChildrenInMenu?: boolean;
    /**
     * 是否固定
     */
    affix?: boolean;
    /**
     * 是否缓存
     */
    keepAlive?: boolean;
    /**
     * 权限点集合
     */
    permissions?: string[];
    /**
     * 任意用户可访问
     */
    anyOne?: boolean;
  }
}

export type RouteGuard = (router: Router) => void;

export {};
