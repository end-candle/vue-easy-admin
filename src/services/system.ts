import { useRequest } from '@/helpers/request';
import type { SystemModel } from '@/types/system';

/**
 * 获取当前用户的系统信息
 * @returns 当前用户的系统信息
 */
export function useGetSystemApi() {
  return useRequest<SystemModel>('/sys/info');
}
