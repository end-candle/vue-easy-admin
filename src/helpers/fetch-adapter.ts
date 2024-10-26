import { NETWORK, STATUS_CODE } from '@/constants/common';
import { useRefreshTokenApi } from '@/services/auth';
import { until } from '@vueuse/core';
import { ref } from 'vue';

/**
 * 刷新token
 */
const refreshingToken = ref(false);
/**
 * 处理token过期
 * @returns void
 */
async function handleTokenExpired() {
  if (refreshingToken.value) {
    return await until(refreshingToken).toBe(false);
  }
  try {
    refreshingToken.value = true;
    await useRefreshTokenApi();
  } finally {
    refreshingToken.value = false;
  }
}

export async function fetchAdapter(...args: Parameters<typeof fetch>): ReturnType<typeof fetch> {
  const res = await fetch(...args);
  let json: Record<string, unknown> = {};
  try {
    json = await res.clone().json();
  } catch {
    json = {};
  }
  if (res.status === NETWORK.UNAUTHORIZED && json.code === STATUS_CODE.TOKEN_IS_EXPIRED) {
    // 处理token过期
    await handleTokenExpired();
    return fetch(...args);
  }
  return res;
}
