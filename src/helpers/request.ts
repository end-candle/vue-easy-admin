import { TOKEN } from '@/constants/common';
import setI18n from '@/locales/i18n';
import { useLogoutApi } from '@/services/auth';
import { useAuthStore } from '@/stores/auth';
import { createFetch, type AfterFetchContext, type BeforeFetchContext } from '@vueuse/core';
import ElNotification from 'element-plus/es/components/notification/index.mjs';
import 'element-plus/theme-chalk/el-notification.css';

export const useRequest = createFetch({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  fetchOptions: {
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  },
  options: {
    async beforeFetch(ctx) {
      setRequestToken(ctx);
    },
    async afterFetch(ctx) {
      storeToken(ctx);
      return ctx;
    },
    async onFetchError(ctx) {
      await handleError(ctx);
      return ctx;
    },
  },
});

/**
 * 处理请求异常
 * @param ctx 异常上下文
 */
async function handleError(ctx: { data: any; response: Response | null; error: any }) {
  if (ctx.response?.status === 401) {
    await useLogoutApi();
    useAuthStore().clearAuth();
    return;
  }
  const i18n = await setI18n();
  if (!ctx.response && ctx.error) {
    ElNotification.error({
      title: i18n.global.t('common.error'),
      message: ctx.error.message,
    });
    return;
  }
}

/**
 * 存储token
 * @param ctx fetch上下文
 */
function storeToken(ctx: AfterFetchContext) {
  const token = ctx.response.headers.get(TOKEN);
  if (token) {
    useAuthStore().setAuthToken(token);
  }
}

/**
 * 设置请求token
 * @param ctx fetch上下文
 */
function setRequestToken(ctx: BeforeFetchContext) {
  const token = useAuthStore().token;
  if (token) {
    ctx.options.headers = {
      ...(ctx.options.headers ?? {}),
      Authorization: `Bearer ${token}`,
    };
  }
}
