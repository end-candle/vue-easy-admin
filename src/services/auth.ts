import { useRequest } from '@helpers/request';
import type { LoginFormModel } from '@/types/login/login-form';
import type { Ref } from 'vue';
import type { User } from '@/types/auth';
import type { StandardResponse } from '@/types/common';

export function useLoginApi(form: Ref<LoginFormModel>) {
  return useRequest<StandardResponse<User>>('/auth/login', {
    immediate: false,
  })
    .post(form)
    .json();
}

export function useLogoutApi() {
  return useRequest<void>('/auth/logout').get();
}
