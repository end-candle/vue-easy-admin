import { MAIN_LAYOUT } from '@router/routes/basic';
import TypographyPage from '@views/TypographyPage';

const about = {
    path: '/',
    redirect: '/typography',
    component: MAIN_LAYOUT,
    meta: {
        hideChildrenInMenu: true,
        title: '排版',
        icon: 'el-icon-chat-round'
    },
    children: [
        {
            path: '/typography',
            name: 'Typography',
            component: TypographyPage,
            meta: {
                title: '排版'
            }
        }
    ]
};

export default about;
