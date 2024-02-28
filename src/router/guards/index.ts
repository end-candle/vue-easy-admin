import type { RouteGuard } from '@/types/router';
import type { Router } from 'vue-router';

type RouteGuardModule = { default?: RouteGuard };

/**
 * 设置路由导航守卫
 * @param router 路由
 */
const createRouterGuards = async (router: Router) => {
  const modules = import.meta.glob<RouteGuardModule>('./*.ts');
  const guards = await Promise.all(
    Object.keys(modules).map((key) => {
      return modules[key]();
    }),
  );
  guards.forEach((guard) => {
    guard.default?.(router);
  });
};

export default createRouterGuards;
