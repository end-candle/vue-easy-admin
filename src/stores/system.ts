import { LOCALE, MAX_DEPTH } from '@/constants/common';
import { ROUTE_NAME } from '@/constants/router';
import { flat, toMap, toTree } from '@/helpers/common';
import { getAllDynamicRoutes } from '@/router/tools';
import { useGetSystemApi } from '@/services/system';
import type { Menu } from '@/types/system/Menu';
import type { Role } from '@/types/system/role';
import { useStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { computed, shallowRef } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter, type RouteLocationRaw, type RouteRecordRaw } from 'vue-router';

export const useSystemStore = defineStore('system', () => {
  const { execute, data, onFetchResponse } = useGetSystemApi({ immediate: false });
  const locale = useStorage(LOCALE, document.documentElement.lang);
  const dynamicRoutes = shallowRef<readonly RouteRecordRaw[]>([]);
  const router = useRouter();
  const route = useRoute();

  onFetchResponse(initRoutes);

  /**
   * 授权的路由集合
   */
  const authorizedRoutes = computed<readonly RouteRecordRaw[]>(() => {
    const map = toMap(flat(data.value?.data?.menus ?? []), 'code');
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
        item.redirect = children[0];
        if (!item.meta) {
          item.meta = {};
        }
        item.meta.needAuthorization = true;
        item.meta.title = map.get(key)?.title ?? item.meta.title;
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
    ).filter((item) => !item.parentCode);
  });

  /**
   * 角色列表
   */
  const roleList = computed<Role[]>(() => data.value?.data?.roleList ?? []);

  /**
   * 异步初始化路由
   * 该函数主要负责加载动态路由，并将其添加到Vue Router中
   * 在所有路由配置完成后，会自动跳转到默认路径对应的页面
   */
  async function initRoutes() {
    // 获取并设置所有的动态路由
    dynamicRoutes.value = await getAllDynamicRoutes();
    // 遍历已授权的路由，并将它们添加到路由列表中
    authorizedRoutes.value.forEach((item) => {
      router.addRoute(item);
    });
    // 跳转到默认路径，可能是重定向页面或首页
    await router.push(getDefaultPath());
  }

  /**
   * 获取默认路径
   * 此函数用于根据当前路由信息和授权路由列表返回一个默认的路由路径
   * 它首先检查是否有重定向URL，如果有，则返回该URL
   * 如果没有重定向URL且没有授权的路由，它将返回首页的路由
   * 如果有授权的路由，则返回第一个可用的叶子路由
   *
   * @returns {RouteLocationRaw} 默认的路由路径
   */
  function getDefaultPath(): RouteLocationRaw {
    // 检查是否有重定向URL，如果有则直接返回
    if (route.query.redirectUrl) {
      return route.query.redirectUrl as string;
    }
    // 如果没有授权的路由，返回首页的路由
    if (!authorizedRoutes.value.length) {
      return { name: ROUTE_NAME.HOME };
    }

    // 递归函数，用于找到第一个没有子路由的路由（叶子路由）
    const findFirstLeafRoute = (routes: RouteRecordRaw[], depth = MAX_DEPTH): RouteRecordRaw => {
      const route = routes[0];
      if (depth <= 0) {
        return route;
      }
      // 如果当前路由有子路由，则递归查找子路由中的第一个叶子路由
      if (route.children?.length) {
        return findFirstLeafRoute(route.children, depth - 1);
      }
      // 返回当前路由作为叶子路由
      return route;
    };

    // 返回授权路由列表中的第一个叶子路由
    return findFirstLeafRoute(authorizedRoutes.value as RouteRecordRaw[]);
  }

  function changeLanguage(language: string) {
    const i18n = useI18n();
    i18n.locale.value = language;
    locale.value = language;
    document.documentElement.lang = language;
  }

  return { displayMenus, authorizedRoutes, roleList, initSystem: execute, locale, changeLanguage };
});
