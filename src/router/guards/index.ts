import type { RouteGuard } from '@/types/router';
import type { App } from 'vue';
import type { Router } from 'vue-router';

interface RouteGuardModule {
  default?: RouteGuard;
}

/**
 * 设置路由导航守卫
 * @param router 路由
 */
const createRouterGuards = async (app: App<Element>, router: Router) => {
  const modules = import.meta.glob<RouteGuardModule>('./*.ts', { eager: true });
  Object.keys(modules).forEach((key) => {
    modules[key]?.default?.(app, router);
  });
};

export default createRouterGuards;
