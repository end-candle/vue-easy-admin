import { useRequest } from '@/helpers/request';
import type { StandardResponse } from '@/types/common';
import type { SystemModel } from '@/types/system';

/**
 * 获取当前用户的系统信息
 * @returns 当前用户的系统信息
 */
export function useGetSystemApi() {
  return useRequest<StandardResponse<SystemModel>>('/sys/info');
}
