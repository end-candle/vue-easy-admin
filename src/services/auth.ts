import { useRequest } from '@helpers/request';
import type { LoginFormModel } from '@/types/login/login-form';
import type { Ref } from 'vue';
import type { User } from '@/types/auth';
import type { StandardResponse } from '@/types/common';

export function useLoginApi(form: Ref<LoginFormModel>) {
  return useRequest('/auth/login', {
    immediate: false,
  })
    .post(form)
    .json<StandardResponse<User>>();
}

export function useLogoutApi() {
  return useRequest('/auth/logout').get().json<StandardResponse<void>>();
}
