import errorHandler from '@helpers/http/error-handler';

/**
 * 创建错误响应拦截器，用于提示错误，在最后添加改响应拦截器
 * @param http axios对象
 */
export function createErrorResponseInterceptor(http) {
    http.interceptors.response.use((response) => {
        return response;
    }, errorHandler);
}
