import { ref } from 'vue';
import { defineStore } from 'pinia';
import Cookies from 'js-cookie';
import { TOKEN } from '@/constants/common';

export const useAuthStore = defineStore('auth', () => {
  const token = ref(Cookies.get(TOKEN) || '');
  const roles = ref<string[]>([]);

  function setAuthToken(authToken: string) {
    token.value = authToken;
  }

  function setAuthRole(authRoles: string[]) {
    roles.value = authRoles;
  }

  function clearAuth() {
    token.value = '';
    roles.value = [];
  }

  return { token, roles, setAuthToken, setAuthRole, clearAuth };
});
