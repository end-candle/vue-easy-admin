import type { RouteGuard } from '@/types/router';
import type { Router } from 'vue-router';

type RouteGuardModule = { default?: RouteGuard };

/**
 * 设置路由导航守卫
 * @param router 路由
 */
const createRouterGuards = async (router: Router) => {
  const modules = import.meta.glob<RouteGuardModule>('./*.ts', { eager: true });
  Object.keys(modules).map((key) => {
    console.log(modules[key]);
    return modules[key]?.default?.(router);
  });
};

export default createRouterGuards;
