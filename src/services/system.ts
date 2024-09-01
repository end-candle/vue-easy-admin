import { useRequest } from '@/helpers/request';
import type { StandardResponse } from '@/types/common';
import type { SystemModel } from '@/types/system';
import type { UseFetchOptions } from '@vueuse/core';

/**
 * 获取当前用户的系统信息
 * @returns 当前用户的系统信息
 */
export function useGetSystemApi(useFetchOptions: UseFetchOptions = {}) {
  return useRequest('/sys/info', useFetchOptions).json<StandardResponse<SystemModel>>();
}
