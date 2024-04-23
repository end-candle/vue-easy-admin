import { computed } from 'vue';
import { defineStore } from 'pinia';
import type { Menu } from '@/types/system/Menu';
import { useGetSystemApi } from '@/services/system';
import type { Role } from '@/types/system/role';

export const useSystemStore = defineStore('system', () => {
  const { execute, data } = useGetSystemApi();

  const menus = computed<Menu[]>(() => data.value?.menus ?? []);
  const roleList = computed<Role[]>(() => data.value?.roleList ?? []);

  return { menus, roleList, initSystem: execute };
});
