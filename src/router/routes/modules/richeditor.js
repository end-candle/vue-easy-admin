import { MAIN_LAYOUT } from '@router/routes/basic';
import WEditor from '@views/richeditor/WEditor';

const richEditor = {
    path: '/',
    redirect: '/rich-editor',
    component: MAIN_LAYOUT,
    meta: {
        title: '富文本编辑器',
        icon: 'el-icon-tickets'
    },
    children: [
        {
            path: '/rich-editor',
            name: 'WEditor',
            component: WEditor,
            meta: {
                title: 'WangEditor'
            }
        }
    ]
};

export default richEditor;
