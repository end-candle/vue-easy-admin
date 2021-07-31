import tooltip from '@helpers/http/tooltip';
import axios from 'axios';
import { formatError, formatStatusCodeMessage } from '@helpers/http/utils';

const errorHandler = (error) => {
    if (axios.isCancel(error)) {
        // 被取消的请求不做提示
        return Promise.reject(error);
    }
    if (axios.isAxiosError(error)) {
        const { data, status } = error.response;
        if (data.errMsg) {
            error.message = formatError(data);
        } else if (error.code) {
            error.message = `连接服务器失败(${error.code})!`;
        } else {
            error.message = formatStatusCodeMessage(status);
        }
    }
    tooltip.error(error.message);
    return Promise.reject(error);
};

export default errorHandler;
