import { useRequest } from '@/helpers/request';
import type { LoginFormModel } from '@/views/login/types/login-form';
import type { Ref } from 'vue';

export function useLoginApi(form: Ref<LoginFormModel>) {
  return useRequest('/auth/login', {
    immediate: false,
  }).post(form);
}

export function useLogoutApi() {
  return useRequest('/auth/logout').get();
}
