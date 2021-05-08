import NProgress from '@helpers/nprogress';

const createNProgressGuard = (router) => {
    router.beforeEach((to, from, next) => {
        NProgress.start();
        next();
    });

    router.afterEach((to, from) => {
        NProgress.done();
    });
};

export default createNProgressGuard;
