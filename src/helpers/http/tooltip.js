import { Notification } from 'element-ui';

const tooltip = {
    error(msg) {
        Notification.error(msg);
    },
    success(msg) {
        Notification.success(msg);
    }
};

export default tooltip;
