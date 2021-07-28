import createNProgressGuard from '@router/guards/nprogress-guard';
import createTitleGuard from '@router/guards/title-guard';
import createLoginAuthGuard from '@router/guards/login-auth-guard';
import createAuthGuard from '@router/guards/auth-guard';

/**
 * 设置路由导航守卫
 * @param router 路由
 */
const createRouterGuards = (router) => {
    createLoginAuthGuard(router);
    createAuthGuard(router);
    createNProgressGuard(router);
    createTitleGuard(router);
};

export default createRouterGuards;
