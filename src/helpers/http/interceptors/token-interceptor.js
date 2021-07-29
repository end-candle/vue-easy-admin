import { getAuthToken, setAuthToken } from '@helpers/auth';

// 默认授权请求头
const DEFAULT_AUTHORIZATION = 'Authorization';

/**
 * 创建token请求拦截器，用于自动添加token
 * @param http axios对象
 */
export function createTokenRequestInterceptor(http) {
    http.interceptors.request.use(
        (config) => {
            const token = getAuthToken();
            if (token) {
                const { headers = {} } = config;
                const authorization = process.env.VUE_APP_TOKEN || DEFAULT_AUTHORIZATION;
                headers[authorization] = token;
                config.headers = headers;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
}

/**
 * 创建token响应拦截器，用于自动更新token
 * @param http axios对象
 */
export function createTokenResponseInterceptor(http) {
    http.interceptors.response.use(
        (response) => {
            const authorization = process.env.VUE_APP_TOKEN || DEFAULT_AUTHORIZATION;
            const token = response.headers[authorization];
            if (token) {
                setAuthToken(token);
            }
            return response;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
}
