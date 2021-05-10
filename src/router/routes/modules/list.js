import { MAIN_LAYOUT } from '@router/routes/basic';
import List from '@views/List';

const list = {
    path: '/',
    redirect: '/list',
    component: MAIN_LAYOUT,
    meta: {
        hideChildrenInMenu: true,
        title: '列表页',
        icon: 'el-icon-document'
    },
    children: [
        {
            path: '/list',
            name: 'List',
            component: List,
            meta: {
                title: '列表页'
            }
        }
    ]
};

export default list;
