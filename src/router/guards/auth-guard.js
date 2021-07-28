import { EXCEPTION_ROUTE } from '@router/routes/basic';
import { checkLoginAuth } from '@helpers/auth';
import { getRoutes } from '@helpers/route';

const createAuthGuard = (router) => {
    let added = false;
    router.beforeEach((to, from, next) => {
        const token = checkLoginAuth();
        if (token && !added) {
            added = true;
            getRoutes().forEach((route) => {
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
