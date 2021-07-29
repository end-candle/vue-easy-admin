import tooltip from '@helpers/http/tooltip';

const errorHandler = (error) => {
    if (error.isAxiosError) {
        const status = error.response.status;
        switch (status) {
            case 400:
                error.message = '请求错误(400)';
                break;
            case 401:
                error.message = '未授权，请重新登录(401)';
                break;
            case 403:
                error.message = '拒绝访问(403)';
                break;
            case 404:
                error.message = '请求不存在(404)';
                break;
            case 408:
                error.message = '请求超时(408)';
                break;
            case 500:
                error.message = '服务器错误(500)';
                break;
            case 501:
                error.message = '服务未实现(501)';
                break;
            case 502:
                error.message = '网络错误(502)';
                break;
            case 503:
                error.message = '服务不可用(503)';
                break;
            case 504:
                error.message = '网络超时(504)';
                break;
            case 505:
                error.message = 'HTTP版本不受支持(505)';
                break;
            default:
                if (status) {
                    error.message = `连接服务器失败(${status})!`;
                } else if (error.code) {
                    error.message = `连接服务器失败(${error.code})!`;
                } else {
                    error.message = `连接服务器失败!`;
                }
        }
    }
    tooltip.error(error.message);
    return Promise.reject(error);
};

export default errorHandler;
