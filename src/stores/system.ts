import { computed, nextTick, shallowRef } from 'vue';
import { defineStore } from 'pinia';
import { useGetSystemApi } from '@/services/system';
import type { Role } from '@/types/system/role';
import { useI18n } from 'vue-i18n';
import { LOCALE, MAX_DEPTH } from '@/constants/common';
import { useStorage } from '@vueuse/core';
import { getAllDynamicRoutes } from '@/router/modules';
import { type RouteRecordRaw } from 'vue-router';
import { flat, toMap, toTree } from '@/helpers/common';
import type { Menu } from '@/types/system/Menu';

export const useSystemStore = defineStore('system', () => {
  const { execute, data, onFetchResponse } = useGetSystemApi();
  const locale = useStorage(LOCALE, document.documentElement.lang);
  const dynamicRoutes = shallowRef<readonly RouteRecordRaw[]>([]);

  onFetchResponse(async () => {
    dynamicRoutes.value = await getAllDynamicRoutes();
  });

  /**
   * 授权的路由集合
   */
  const authorizedRoutes = computed<readonly RouteRecordRaw[]>(() => {
    const map = toMap(data.value?.data?.menus ?? [], 'code');
    const filterIllegalRoutes = (routes: RouteRecordRaw[], depth = MAX_DEPTH) => {
      const result: RouteRecordRaw[] = [];
      routes.forEach((item) => {
        let children = [] as RouteRecordRaw[];
        if (depth > 0 && item.children?.length) {
          children = filterIllegalRoutes(item.children, depth - 1);
        }
        const key: string = (item.meta?.code ?? item.name ?? '') as string;
        if (!map.has(key) && !children.length) {
          return;
        }
        item.children = children;
        result.push(item);
      });
      return result;
    };
    return filterIllegalRoutes(dynamicRoutes.value as RouteRecordRaw[]);
  });

  /**
   * 显示的菜单
   */
  const displayMenus = computed<Menu[]>(() => {
    return toTree(
      flat(data.value?.data?.menus ?? []).filter((item) => !item.hideInMenu),
      'code',
      'parentCode',
    );
  });

  /**
   * 角色列表
   */
  const roleList = computed<Role[]>(() => data.value?.data?.roleList ?? []);

  function changeLanguage(language: string) {
    const i18n = useI18n();
    i18n.locale.value = language;
    locale.value = language;
    document.documentElement.lang = language;
  }

  return { displayMenus, authorizedRoutes, roleList, initSystem: execute, locale, changeLanguage };
});
