import {
    createTokenRequestInterceptor,
    createTokenResponseInterceptor
} from '@helpers/http/interceptors/token-interceptor';
import { createErrorResponseInterceptor } from '@helpers/http/interceptors/error-interceptor';
import {
    createRepeatRequestInterceptor,
    createRepeatResponseInterceptor
} from '@helpers/http/interceptors/repeat-interceptor';

/**
 * 创建请求拦截器
 * @param http axios对象
 */
export function createRequestInterceptor(http) {
    createTokenRequestInterceptor(http);
    createRepeatRequestInterceptor(http);
}

/**
 * 创建响应蓝拦截器
 * @param http axios对象
 */
export function createResponseInterceptor(http) {
    createTokenResponseInterceptor(http);
    createRepeatResponseInterceptor(http);
    createErrorResponseInterceptor(http);
}
