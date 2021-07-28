import { checkLoginAuth } from '@helpers/auth';
import { WHITE_LIST } from '@router/routes/basic';

const createLoginAuthGuard = (router) => {
    router.beforeEach((to, from, next) => {
        const token = checkLoginAuth();
        if (WHITE_LIST.includes(to.name) || token) {
            if (token && to.name === 'Login') {
                next({
                    path: to.query?.redirectUrl ?? '/',
                    replace: true
                });
            } else {
                next();
            }
        } else {
            const { href } = router.resolve(to);
            next({
                name: 'Login',
                query: {
                    redirectUrl: href
                },
                replace: true
            });
        }
    });
};

export default createLoginAuthGuard;
