import { ref } from 'vue';
import { defineStore } from 'pinia';
import Cookies from 'js-cookie';
import { TOKEN } from '@/constants/common';

export const useAuthStore = defineStore('auth', () => {
  const token = ref(Cookies.get(TOKEN) || '');
  const roles = ref<string[]>([]);

  /**
   * 设置认证令牌
   * 该函数将给定的认证令牌字符串赋值给一个内部维护的token变量。
   * @param authToken 认证令牌字符串
   */
  function setAuthToken(authToken: string) {
    token.value = authToken;
  }

  /**
   * 设置授权角色
   * @param authRoles 授权角色数组，类型为string[]
   */
  function setAuthRole(authRoles: string[]) {
    roles.value = authRoles;
  }

  /**
   * 清除授权信息
   * 该函数没有参数。
   */
  function clearAuth() {
    // 清除token值
    token.value = '';
    // 清除角色列表
    roles.value = [];
  }

  return { token, roles, setAuthToken, setAuthRole, clearAuth };
});
