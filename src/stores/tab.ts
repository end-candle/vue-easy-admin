import { useStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { TAB_KEY } from '@/constants/common';
import { useRouter, type RouteLocationNormalized } from 'vue-router';
import { computed, ref } from 'vue';
import { ROUTE_NAME } from '@/constants/router';

export const useTabStore = defineStore('tab', () => {
  const tabList = useStorage(TAB_KEY, [] as RouteLocationNormalized[]);
  const currentTab = ref('');
  const router = useRouter();
  const tabBlackList = [ROUTE_NAME.LOGIN, ROUTE_NAME.REGISTER, ROUTE_NAME.NOT_FOUND, ROUTE_NAME.REDIRECT];
  const onlyOneOrEmpty = computed(() => tabList.value.length <= 1);
  const currentTabIndex = computed(() => {
    return tabList.value.findIndex((item) => item.fullPath === currentTab.value);
  });
  const isLastRight = computed(() => {
    return currentTabIndex.value === tabList.value.length - 1;
  });
  const isLastLeft = computed(() => {
    return currentTabIndex.value === 0;
  });

  function addTab(route: RouteLocationNormalized) {
    if (tabBlackList.includes(route.name as string)) {
      return;
    }
    currentTab.value = route.fullPath;
    if (!tabList.value.some((item) => item.fullPath === route.fullPath)) {
      tabList.value.push(route);
    }
  }

  function updateTabList(routes: RouteLocationNormalized[]) {
    tabList.value = routes;
  }

  /**
   * 关闭其他tab
   */
  function closeOther(target: RouteLocationNormalized) {
    const path = target?.fullPath ?? currentTab.value;
    updateTabList(tabList.value.filter((tab) => tab.fullPath === path));
    if (path !== currentTab.value) {
      router.push(path);
    }
  }
  /**
   * 关闭左侧tab
   */
  function closeLeft(target: RouteLocationNormalized) {
    // 当前激活页位置
    const currentIndex = currentTabIndex.value;

    const path = target?.fullPath ?? currentTab.value;
    // 鼠标指向页面位置
    const index = tabList.value.findIndex((item) => item.fullPath === path);
    updateTabList(tabList.value.slice(index, tabList.value.length));

    if (currentIndex < index) {
      router.push(path);
    }
  }
  /**
   * 关闭右侧tab
   */
  function closeRight(target: RouteLocationNormalized) {
    // 当前激活页位置
    const currentIndex = currentTabIndex.value;

    const path = target?.fullPath ?? currentTab.value;
    // 鼠标指向页面位置
    const index = tabList.value.findIndex((item) => item.fullPath === path);
    updateTabList(tabList.value.slice(0, index + 1));
    if (currentIndex > index) {
      router.push(path);
    }
  }

  function removeTab(targetName: string) {
    if (currentTab.value === targetName) {
      const index = tabList.value.findIndex((tab) => tab.fullPath === targetName);
      if (index !== -1) {
        const nextTab = tabList.value[index + 1] || tabList.value[index - 1];
        if (nextTab) {
          currentTab.value = nextTab.fullPath;
          router.push(currentTab.value);
        }
      }
    }
    updateTabList(tabList.value.filter((tab) => tab.fullPath !== targetName));
  }
  /**
   * 刷新当前页
   */
  function refreshCurrent(target: RouteLocationNormalized) {
    router.push({
      name: ROUTE_NAME.REDIRECT,
      query: {
        path: target?.fullPath ?? currentTab.value,
      },
    });
  }

  return {
    tabList,
    currentTab,
    addTab,
    updateTabList,
    closeOther,
    closeLeft,
    closeRight,
    removeTab,
    refreshCurrent,
    isLastRight,
    isLastLeft,
    onlyOneOrEmpty,
  };
});
