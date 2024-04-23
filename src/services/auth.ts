import { useRequest } from '@helpers/request';
import type { LoginFormModel } from '@/types/login/login-form';
import type { Ref } from 'vue';
import type { User } from '@/types/auth';

export function useLoginApi(form: Ref<LoginFormModel>) {
  return useRequest<User>('/auth/login', {
    immediate: false,
  }).post(form);
}

export function useLogoutApi() {
  return useRequest<void>('/auth/logout').get();
}
