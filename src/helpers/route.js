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
    return normalizedRoutes.sort((a, b) => (a.meta?.sort ?? 9998) - (b.meta?.sort ?? 9999));
}
