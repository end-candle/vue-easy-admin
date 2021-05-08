import Exception from '@views/Exception';

/**
 * 空白布局
 * @returns {Promise<*>}
 * @constructor
 */
export const BLANK_LAYOUT = () => import('@layouts/BlankLayout');

/**
 * 主页面布局
 * @returns {Promise<*>}
 * @constructor
 */
export const MAIN_LAYOUT = () => import('@layouts/main/MainLayout');

/**
 * 异常路由
 */
export const EXCEPTION_ROUTE = {
    path: '*',
    name: 'Exception',
    component: Exception,
    meta: {
        title: '404'
    }
};
