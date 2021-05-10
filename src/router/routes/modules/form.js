import FormPage from '@views/FormPage';
import { MAIN_LAYOUT } from '@router/routes/basic';

const form = {
    path: '/',
    redirect: '/form',
    component: MAIN_LAYOUT,
    meta: {
        hideChildrenInMenu: true,
        title: '表单页',
        icon: 'el-icon-edit-outline'
    },
    children: [
        {
            path: '/form',
            name: 'Form',
            component: FormPage,
            meta: {
                title: '表单页'
            }
        }
    ]
};

export default form;
