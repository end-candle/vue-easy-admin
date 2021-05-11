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
