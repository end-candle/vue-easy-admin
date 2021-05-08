import axios from 'axios';
import { Message } from 'element-ui';

const _axios = axios.create({
    baseURL: process.env.VUE_APP_API_URL
});

_axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        const msg = error.message || error || '网络异常';
        Message.error(msg);
        return Promise.reject(new Error(error));
    }
);

_axios.interceptors.response.use(
    (res) => {
        return Promise.resolve(res);
    },
    async (error) => {
        const msg = error.message || error || '网络异常';
        Message.error(msg);
        return Promise.reject(new Error(error));
    }
);

export default _axios;
