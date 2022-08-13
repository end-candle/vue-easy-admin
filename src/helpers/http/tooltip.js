import { Notification } from 'element-ui';

const tooltip = {
    error(msg) {
        Notification({
            type: 'error',
            title: '系统提示',
            message: msg
        });
    },
    success(msg) {
        Notification({
            type: 'success',
            title: '系统提示',
            message: msg
        });
    },
    closeAll() {
        Notification.closeAll();
    }
};

export default tooltip;
