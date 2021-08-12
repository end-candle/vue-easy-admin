import md5 from 'js-md5';

/**
 * 通过请求参数构建一个唯一key
 * @param url 请求路径
 * @param method 请求方式
 * @param params 请求路径参数
 * @param data 请求参数
 * @returns {string} 唯一key
 */
export function buildKey({ url, method, params, data }) {
    return md5(
        `url:${url};method:${method};params:${JSON.stringify(params)};data:${JSON.stringify(data)}`
    );
}

/**
 * 格式化错误信息
 * @param errMsg 异常消息提醒
 * @param errCode 异常代码
 * @returns {string}
 */
export function formatError({ errMsg, errCode }) {
    if (errCode) {
        return `${errMsg} (错误码：${errCode})`;
    }
    return errMsg;
}

/**
 * 格式化状态码消息
 * @param code 状态码
 * @param errorCode 错误状态码
 * @returns {string} 状态码消息
 */
export function formatStatusCodeMessage(code, errorCode) {
    let message = '';
    switch (code) {
        case 400:
            message = '请求错误(400)';
            break;
        case 401:
            message = '未授权，请重新登录(401)';
            break;
        case 403:
            message = '拒绝访问(403)';
            break;
        case 404:
            message = '请求不存在(404)';
            break;
        case 408:
            message = '请求超时(408)';
            break;
        case 500:
            message = '服务器错误(500)';
            break;
        case 501:
            message = '服务未实现(501)';
            break;
        case 502:
            message = '网络错误(502)';
            break;
        case 503:
            message = '服务不可用(503)';
            break;
        case 504:
            message = '网络超时(504)';
            break;
        case 505:
            message = 'HTTP版本不受支持(505)';
            break;
        default:
            if (errorCode) {
                message = `连接服务器失败(${errorCode})!`;
            } else {
                message = `连接服务器失败!`;
            }
    }
    return message;
}
