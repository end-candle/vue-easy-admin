import type { RouteGuardModule, RoutesModule } from '@/types/router';
import type { App } from 'vue';
import type { Router, RouteRecordRaw } from 'vue-router';

/**
 * 获取所有动态路由记录。
 *
 * 它使用了ES模块的动态导入功能，结合glob模式来定位文件，根据特定的文件匹配规则，收集并返回所有路由模块。
 * 它不包括静态路由文件，确保只处理动态路由配置。
 *
 * @param app 应用程序实例，用于路由配置的上下文。
 * @returns 返回一个Promise，解析为一个只读的路由记录数组。
 */
export const getAllDynamicRoutes = async (app?: App<Element>): Promise<readonly RouteRecordRaw[]> => {
  // 使用import.meta.glob异步加载所有符合规则的路由模块。
  // 规则排除了静态路由文件，只包含动态路由配置。
  const modules = import.meta.glob<RoutesModule>(
    ['./modules/**/*.ts', '!./modules/**/static*.ts', '!./modules/static/**/*.ts'],
    {
      eager: true,
    },
  );

  // 调用getRoutesByGlob函数，处理加载的模块并返回路由记录。
  return getRoutesByGlob(app, modules);
};

/**
 * 获取所有静态路由的函数。
 *
 * 该函数通过动态导入匹配特定模式的文件来收集所有静态路由配置。
 * 它使用了ES模块的动态导入功能，结合glob模式来定位文件，确保了路由配置的模块化和可扩展性。
 *
 * @param app 一个包含应用相关信息的对象，用于路由配置的上下文。
 * @returns 返回一个Promise，解析为一个只读的路由记录数组，这些记录代表了应用中的所有静态路由。
 */
export const getAllStaticRoutes = (app: App<Element>): Promise<readonly RouteRecordRaw[]> => {
  // 使用动态导入和glob模式来获取所有匹配'./modules/**/static*.ts'和'./modules/static/**/*.ts'模式的文件。
  // 这里使用了eager选项，确保这些模块在导入时被立即执行，以便路由可以被及时注册。
  const modules = import.meta.glob<RoutesModule>(['./modules/**/static*.ts', './modules/static/**/*.ts'], {
    eager: true,
  });

  // 调用getRoutesByGlob函数，传入应用对象和动态导入的模块对象，来提取并返回所有的路由记录。
  // 这一步是将路由模块的配置转换为可注册的路由记录的过程。
  return getRoutesByGlob(app, modules);
};

/**
 * 根据glob模式获取路由配置。
 *
 * 此函数通过异步加载所有模块的路由配置，然后合并这些配置以构建完整的路由表。
 * 它使用Promise.all来并行处理模块的加载，提高加载效率。
 *
 * @param app 应用程序实例，路由模块可能需要访问应用程序的某些属性或方法。
 * @param modules 一个记录，其键是模块名称，值是路由模块对象。每个模块对象可能包含一个默认方法，该方法接受应用程序实例并返回路由配置。
 * @returns 返回一个Promise，解析为一个路由配置数组。这个数组包含了所有模块的路由配置，经过过滤和展平处理。
 */
async function getRoutesByGlob(app?: App<Element>, modules?: Record<string, RoutesModule>) {
  if (!modules) {
    return [];
  }
  // 并行加载所有模块的路由配置，并将结果作为一个数组返回
  const routes = await Promise.all(
    // 遍历模块记录的键（模块名称），并尝试获取每个模块的默认方法并调用它，传入应用程序实例
    Object.keys(modules).map((key) => {
      return modules[key]?.default?.(app);
    }),
  );
  // 过滤掉所有非路由配置项（即值为null或undefined的项），然后展平数组，以合并所有路由配置
  return routes.filter((route) => !!route).flat();
}

/**
 * 设置路由导航守卫
 * @param router 路由
 */
export const createRouterGuards = async (app: App<Element>, router: Router) => {
  const modules = import.meta.glob<RouteGuardModule>('./guards/*.ts', { eager: true });
  Object.keys(modules).forEach((key) => {
    modules[key]?.default?.(app, router);
  });
};
