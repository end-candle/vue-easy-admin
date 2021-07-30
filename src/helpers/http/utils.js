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
