import Dashboard from '@views/Dashboard';
import { MAIN_LAYOUT } from '@router/routes/basic';

const dashboard = {
    path: '/',
    redirect: '/index.html',
    component: MAIN_LAYOUT,
    meta: {
        hideChildrenInMenu: true,
        title: '首页',
        icon: 'el-icon-odometer',
        sort: 1
    },
    children: [
        {
            path: '/index.html',
            name: 'Dashboard',
            component: Dashboard,
            meta: {
                title: '首页'
            }
        }
    ]
};

export default dashboard;
