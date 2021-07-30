import axios from 'axios';
import { buildKey } from '@helpers/http/utils';

/**
 * 请求队列
 * @type {Map<string, any>}
 */
const taskMap = new Map();
const CancelToken = axios.CancelToken;

/**
 * 创建请求拦截器，用于自动添加请求
 * @param http axios对象
 */
export function createRepeatRequestInterceptor(http) {
    http.interceptors.request.use(
        (config) => {
            const key = buildKey(config);
            if (taskMap.has(key)) {
                // 取消之前的请求
                taskMap.get(key).cancel(`取消重复请求(${config.url})`);
            }
            const source = CancelToken.source();
            config.cancelToken = source.token;
            taskMap.set(key, source);
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
}

/**
 * 创建响应拦截器，用于自动移除请求
 * @param http axios对象
 */
export function createRepeatResponseInterceptor(http) {
    http.interceptors.response.use(
        (response) => {
            // 请求成功移除pending队列
            const key = buildKey(response.config);
            taskMap.delete(key);
            return response;
        },
        (error) => {
            // 网络请求失败移除pending队列
            if (axios.isAxiosError(error)) {
                const key = buildKey(error.config);
                taskMap.delete(key);
            }
            return Promise.reject(error);
        }
    );
}
