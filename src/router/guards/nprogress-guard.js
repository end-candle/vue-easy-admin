import { closeProgress, showProgress } from '@helpers/nprogress';

const createNProgressGuard = (router) => {
    router.beforeEach((to, from, next) => {
        showProgress();
        next();
    });

    router.afterEach((to, from) => {
        closeProgress();
    });
};

export default createNProgressGuard;
