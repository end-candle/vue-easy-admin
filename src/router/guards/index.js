import createNProgressGuard from '@router/guards/nprogress-guard';
import createTitleGuard from '@router/guards/title-guard';

/**
 * 设置路由导航守卫
 * @param router 路由
 */
const createRouterGuards = (router) => {
    createNProgressGuard(router);
    createTitleGuard(router);
};

export default createRouterGuards;
