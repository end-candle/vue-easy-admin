import tooltip from '@helpers/http/tooltip';
import axios from 'axios';
import { formatError, formatStatusCodeMessage } from '@helpers/http/utils';
import { clearAuth } from '@helpers/auth';

const errorHandler = (error) => {
    if (axios.isCancel(error)) {
        // 被取消的请求不做提示
        return Promise.reject(error);
    }
    if (axios.isAxiosError(error)) {
        const { data = {}, status } = error.response ?? {};
        if (data.errMsg) {
            error.message = formatError(data);
        } else {
            error.message = formatStatusCodeMessage(status, error.code);
            if (status === 401) {
                handle401Error();
            }
        }
    }
    tooltip.error(error.message);

    return Promise.reject(error);
};

let timer = null;
function clearTimer() {
    if (timer) {
        clearTimeout(timer);
        timer = null;
    }
}

/**
 * 处理401异常
 */
function handle401Error() {
    tooltip.closeAll();
    if (timer) {
        return false;
    }
    timer = setTimeout(() => {
        clearTimer();
        clearAuth();
        location.reload();
    }, 3000);
}

export default errorHandler;
