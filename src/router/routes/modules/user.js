import { MAIN_LAYOUT } from '@router/routes/basic';
import User from '@views/User';

const user = {
    path: '/',
    redirect: '/user',
    component: MAIN_LAYOUT,
    meta: {
        hideChildrenInMenu: true,
        title: '个人中心页',
        icon: 'el-icon-user'
    },
    children: [
        {
            path: '/user',
            name: 'User',
            component: User,
            meta: {
                title: '个人中心页'
            }
        }
    ]
};

export default user;
