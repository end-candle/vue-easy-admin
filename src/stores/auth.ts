import { defineStore } from 'pinia';
import { TOKEN } from '@/constants/common';
import { useStorage } from '@vueuse/core';
import { useLogoutApi } from '@/services/auth';
import { useRoute, useRouter } from 'vue-router';

export const useAuthStore = defineStore('auth', () => {
  const token = useStorage(TOKEN, '');

  /**
   * 设置认证令牌
   * 该函数将给定的认证令牌字符串赋值给一个内部维护的token变量。
   * @param authToken 认证令牌字符串
   */
  function setAuthToken(authToken: string) {
    token.value = authToken;
  }

  /**
   * 退出登录，并清除授权信息
   * 该函数没有参数。
   */
  async function logout() {
    await useLogoutApi();
    // 清除token值
    token.value = '';
    // 重定向登录页
    await toLogin();
  }

  /**
   * 跳转登录页
   */
  function toLogin() {
    const router = useRouter();
    const route = useRoute();
    return router.push({
      name: 'login',
      query: {
        redirectUrl: route.fullPath,
      },
    });
  }

  return { token, setAuthToken, logout };
});
