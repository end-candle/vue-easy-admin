import { cloneDeep } from 'lodash-es';
import { asyncRoutes } from '@router/routes';
import { getAuthRole } from '@helpers/auth';

/**
 * 序列化路由菜单
 * @param routes 路由集合
 */
export function normalizeRoutes(routes = []) {
    const normalizedRoutes = [];
    routes.forEach((route) => {
        // 判断是否隐藏节点于菜单
        if (!route.meta?.hideInMenu) {
            const { name, path, meta, redirect } = route;
            const normalizedRoute = { name, path: redirect ?? path, meta };
            // 判断是否隐藏子节点于菜单
            if (!route.meta?.hideChildrenInMenu && route.children?.length) {
                normalizedRoute.children = normalizeRoutes(route.children);
            }
            normalizedRoutes.push(normalizedRoute);
        }
    });
    return normalizedRoutes.sort((a, b) => {
        const sortA = a.meta?.sort ?? 0;
        const sortB = b.meta?.sort ?? 0;
        return sortB - sortA;
    });
}

/**
 * 对路由进行排序
 * @param routes 待排序路由
 */
export function sortRoutes(routes = []) {
    const sortedRoutes = [];
    routes.forEach((route) => {
        // 判断是否隐藏子节点于菜单
        if (route.children?.length) {
            route.children = sortRoutes(route.children);
        }
        sortedRoutes.push(route);
    });
    return sortedRoutes.sort((a, b) => {
        const sortA = a.meta?.sort ?? 0;
        const sortB = b.meta?.sort ?? 0;
        return sortB - sortA;
    });
}

/**
 * 过滤非法路由（未授权路由）
 * @param routes 路由集合
 * @param role 角色
 */
export function filterIllegalRoutes(routes, role) {
    const legalRoutes = [];
    routes.forEach((route) => {
        let roles = route.meta?.role;
        if (roles) {
            roles = Array.isArray(roles) ? roles : [roles];
            if (!roles.includes(role)) {
                return false;
            }
        }
        if (route.children?.length) {
            route.children = filterIllegalRoutes(route.children, role);
        }
        legalRoutes.push(route);
    });
    return legalRoutes;
}

/**
 * 根据角色格式化面包屑
 * @param breadcrumbs 面包屑集合
 * @param role 角色
 */
export function formatBreadcrumbs(breadcrumbs, role) {
    if (Array.isArray(breadcrumbs)) {
        return breadcrumbs.map((breadcrumb) => {
            if (typeof breadcrumb === 'string') {
                return {
                    title: breadcrumb
                };
            }
            const { title, route } = breadcrumb;
            const roleBreadCrumb = breadcrumb[role] || {};
            return {
                title,
                route,
                ...roleBreadCrumb
            };
        });
    }
    if (typeof breadcrumbs === 'string') {
        return {
            title: breadcrumbs
        };
    }
    return [];
}

/**
 * 根据角色格式化路由面包屑
 * @param routes 路由集合
 * @param role 角色
 */
export function formatRoutesBreadcrumbs(routes, role) {
    const formatRoutes = [];
    routes.forEach((route) => {
        const { breadcrumbs = [] } = route.meta;
        if (breadcrumbs?.length) {
            route.meta.breadcrumbs = formatBreadcrumbs(breadcrumbs, role);
        }
        if (route.children?.length) {
            route.children = formatRoutesBreadcrumbs(route.children, role);
        }
        formatRoutes.push(route);
    });
    return formatRoutes;
}

/**
 * 获取路由列表
 */
export function getRoutes() {
    const role = getAuthRole();
    return sortRoutes(
        formatRoutesBreadcrumbs(filterIllegalRoutes(cloneDeep(asyncRoutes), role), role)
    );
}
