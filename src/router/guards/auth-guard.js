import { filterIllegalRoutes, formatRoutesBreadcrumbs, sortRoutes } from '@helpers/route';
import { cloneDeep } from 'lodash-es';
import { asyncRoutes } from '@router/routes';
import { EXCEPTION_ROUTE } from '@router/routes/basic';
import { checkLoginAuth, getAuthRole } from '@helpers/auth';

const createAuthGuard = (router) => {
    let added = false;
    router.beforeEach((to, from, next) => {
        const token = checkLoginAuth();
        if (token && !added) {
            added = true;
            const role = getAuthRole();
            sortRoutes(
                formatRoutesBreadcrumbs(filterIllegalRoutes(cloneDeep(asyncRoutes), role), role)
            ).forEach((route) => {
                router.addRoute(route);
            });
            router.addRoute(EXCEPTION_ROUTE);
            next({ ...to, replace: true });
        } else {
            next();
        }
    });
};

export default createAuthGuard;
