import Dashboard from '@views/Dashboard';
import { MAIN_LAYOUT } from '@router/routes/basic';

const dashboard = {
    path: '/',
    redirect: '/about',
    component: MAIN_LAYOUT,
    meta: {
        hideChildrenInMenu: true,
        title: '关于',
        icon: 'el-icon-chat-round'
    },
    children: [
        {
            path: '/about',
            name: 'About',
            component: Dashboard,
            meta: {
                title: '关于'
            }
        }
    ]
};

export default dashboard;
