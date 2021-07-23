import { MAIN_LAYOUT } from '@router/routes/basic';
import UserBaseSetting from '@views/user/UserBaseSetting';
import UserSecuritySetting from '@views/user/UserSecuritySetting';
import UserCustomSetting from '@views/user/UserCustomSetting';

const user = {
    path: '/',
    redirect: '/user/setting/base',
    component: MAIN_LAYOUT,
    meta: {
        hideInMenu: true,
        title: '个人中心页',
        icon: 'el-icon-user'
    },
    children: [
        {
            path: '/user/settings/base',
            name: 'UserBaseSetting',
            component: UserBaseSetting,
            meta: {
                title: '基础设置'
            }
        },
        {
            path: '/user/settings/security',
            name: 'UserSecuritySetting',
            component: UserSecuritySetting,
            meta: {
                title: '安全设置'
            }
        },
        {
            path: '/user/settings/custom',
            name: 'UserCustomSetting',
            component: UserCustomSetting,
            meta: {
                title: '个性化'
            }
        }
    ]
};

export default user;
