import BasicForm from '@views/form/BasicForm';
import { MAIN_LAYOUT } from '@router/routes/basic';

const form = {
    path: '/',
    redirect: '/form',
    component: MAIN_LAYOUT,
    meta: {
        title: '表单页',
        icon: 'el-icon-edit-outline'
    },
    children: [
        {
            path: '/form',
            name: 'BasicForm',
            component: BasicForm,
            meta: {
                title: '基础表单'
            }
        },
        {
            path: '/steps/form',
            name: 'StepForm',
            component: BasicForm,
            meta: {
                title: '分步表单'
            }
        }
    ]
};

export default form;
