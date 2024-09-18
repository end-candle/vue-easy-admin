import { useRequest } from '@helpers/request';
import type { LoginFormModel } from '@/types/login/login-form';
import type { Ref } from 'vue';
import type { User } from '@/types/auth';
import type { StandardResponse } from '@/types/common';

/**
 * 登录API
 * @param form 登录信息
 * @returns 用户信息
 */
export function useLoginApi(form: Ref<LoginFormModel>) {
  return useRequest('/auth/login', {
    immediate: false,
  })
    .post(form)
    .json<StandardResponse<User>>();
}

/**
 * 退出登录API
 * @returns 退出登录
 */
export function useLogoutApi() {
  return useRequest('/auth/logout').get().json<StandardResponse<void>>();
}

/**
 * 刷新token API
 * @returns void
 */
export function useRefreshTokenApi() {
  return useRequest('/auth/refresh-token').get().json<StandardResponse<void>>();
}
