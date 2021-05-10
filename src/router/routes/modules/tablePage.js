import { MAIN_LAYOUT } from '@router/routes/basic';
import TablePage from '@views/TablePage';

const table = {
    path: '/',
    redirect: '/table',
    component: MAIN_LAYOUT,
    meta: {
        hideChildrenInMenu: true,
        title: '表格页',
        icon: 'el-icon-table-lamp'
    },
    children: [
        {
            path: '/table',
            name: 'TablePage',
            component: TablePage,
            meta: {
                title: '表格页'
            }
        }
    ]
};

export default table;
