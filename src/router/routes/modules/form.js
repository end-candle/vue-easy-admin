import BasicForm from '@views/form/BasicForm';
import { MAIN_LAYOUT } from '@router/routes/basic';
import StepForm from '@views/form/StepForm';
import AdvanceForm from '@views/form/AdvanceForm';
// import DForm from '@views/form/DForm';

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
            component: StepForm,
            meta: {
                title: '分步表单'
            }
        },
        {
            path: '/advance/form',
            name: 'AdvanceForm',
            component: AdvanceForm,
            meta: {
                title: '高级表单'
            }
        }
        // {
        //     path: '/dynamic/form',
        //     name: 'DForm',
        //     component: DForm,
        //     meta: {
        //         title: '动态表单'
        //     }
        // }
    ]
};

export default form;
