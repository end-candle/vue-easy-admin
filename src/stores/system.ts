import { computed } from 'vue';
import { defineStore } from 'pinia';
import type { Menu } from '@/types/system/Menu';
import { useGetSystemApi } from '@/services/system';
import type { Role } from '@/types/system/role';
import { useI18n } from 'vue-i18n';
import { LOCALE } from '@/constants/common';
import { useStorage } from '@vueuse/core';

export const useSystemStore = defineStore('system', () => {
  const { execute, data } = useGetSystemApi();
  const locale = useStorage(LOCALE, document.documentElement.lang);
  const i18n = useI18n();

  const menus = computed<Menu[]>(() => data.value?.data?.menus ?? []);
  const roleList = computed<Role[]>(() => data.value?.data?.roleList ?? []);

  function changeLanguage(language: string) {
    i18n.locale.value = language;
    locale.value = language;
    document.documentElement.lang = language;
  }

  return { menus, roleList, initSystem: execute, locale, changeLanguage };
});
