import axios from 'axios';
import { createRequestInterceptor, createResponseInterceptor } from '@helpers/http/interceptors';

/**
 * 创建http
 * @param config
 */
function createHttp(config) {
    const http = axios.create(config);
    createRequestInterceptor(http);
    createResponseInterceptor(http);
    return http;
}

export default createHttp({
    baseURL: process.env.VUE_APP_API_URL
});
