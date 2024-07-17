import type { GetRoutes } from '@/types/router';
import type { App } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

interface RoutesModule {
  default?: GetRoutes;
}

/**
 * 获取所有动态路由
 * @param app 应用实例
 */
export const getAllDynamicRoutes = async (app: App<Element>): Promise<readonly RouteRecordRaw[]> => {
  const modules = import.meta.glob<RoutesModule>(['./**/*.ts', '!./**/static*.ts'], { eager: true });
  return getRoutesByGlob(app, modules);
};

/**
 * 获取所有静态路由
 * @param app 应用实例
 */
export const getAllStaticRoutes = (app: App<Element>): Promise<readonly RouteRecordRaw[]> => {
  const modules = import.meta.glob<RoutesModule>('./**/static*.ts', { eager: true });
  return getRoutesByGlob(app, modules);
};

/**
 * 获取路由
 * @param app 应用实例
 * @param modules 路由文件模块
 */
async function getRoutesByGlob(app: App<Element>, modules: Record<string, RoutesModule>) {
  const routes = await Promise.all(
    Object.keys(modules).map((key) => {
      return modules[key]?.default?.(app);
    }),
  );
  return routes.filter((route) => route).flat();
}
