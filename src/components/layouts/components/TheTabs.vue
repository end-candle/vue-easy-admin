<template>
  <div class="tabs relative -m-x-5">
    <ElTabs
      v-model="currentTab"
      type="card"
      :closable="tabList.length > 1"
      @edit="handleTabsEdit"
      @tab-click="handleTabClick"
    >
      <ElTabPane
        v-for="(item, index) in tabList"
        :key="item.fullPath"
        :name="item.fullPath"
      >
        <template #label>
          <ContextMenu @command="handleMenuClick($event as string, item)">
            <div class="-m-x-5 lh-10 px-3">{{ item.meta.title }}</div>
            <template #menu>
              <ContextmenuItem
                :disabled="onlyOneOrEmpty"
                v-show="!onlyOneOrEmpty"
                command="closeOther"
                >{{ $t('tools.closeOther') }}</ContextmenuItem
              >
              <ContextmenuItem
                command="closeLeft"
                :disabled="index === 0"
                v-show="index !== 0"
                >{{ $t('tools.closeLeft') }}</ContextmenuItem
              >
              <ContextmenuItem
                command="closeRight"
                v-show="index !== tabList.length - 1"
                :disabled="index === tabList.length - 1"
                >{{ $t('tools.closeRight') }}</ContextmenuItem
              >
              <ContextmenuItem
                command="refreshCurrent"
                :divided="false"
                >{{ $t('tools.refreshCurrent') }}</ContextmenuItem
              >
            </template>
          </ContextMenu>
        </template>
      </ElTabPane>
    </ElTabs>
    <div class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer rotate-90">
      <ElDropdown
        trigger="click"
        @command="handleMenuClick"
      >
        <ElLink
          :underline="false"
          class="tabs-extra-btn"
        >
          <i-ep-more></i-ep-more>
        </ElLink>
        <template #dropdown>
          <ElDropdownMenu class="tabs-extra__dropdown">
            <ElDropdownItem
              v-if="!onlyOneOrEmpty"
              command="closeOther"
              >{{ $t('tools.closeOther') }}</ElDropdownItem
            >
            <ElDropdownItem
              v-if="!isLastLeft"
              command="closeLeft"
              >{{ $t('tools.closeLeft') }}</ElDropdownItem
            >
            <ElDropdownItem
              v-if="!isLastRight"
              command="closeRight"
              >{{ $t('tools.closeRight') }}</ElDropdownItem
            >
            <ElDropdownItem command="refreshCurrent">{{ $t('tools.refreshCurrent') }}</ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTabStore } from '@/stores/tab';
import { type TabPaneName, type TabsPaneContext } from 'element-plus';
import { storeToRefs } from 'pinia';
import type { RouteLocationNormalized } from 'vue-router';
import { useRoute, useRouter } from 'vue-router';

const tabStore = useTabStore();
const { tabList, currentTab, isLastLeft, isLastRight, onlyOneOrEmpty } = storeToRefs(tabStore);
const route = useRoute();
const router = useRouter();

/**
 * 标签页点击
 * @param tab 选中的标签对象
 */
function handleTabClick(tab: TabsPaneContext) {
  if (tab.paneName !== route.fullPath) {
    router.push(String(tab.paneName));
  }
}

function handleTabsEdit(targetName: TabPaneName | undefined, action: 'add' | 'remove') {
  if (action === 'remove' && typeof targetName === 'string') {
    tabStore.removeTab(targetName);
  }
}
/**
 * 点击tab右键菜单
 */
function handleMenuClick(command: string, tab: RouteLocationNormalized) {
  switch (command) {
    case 'closeOther':
      tabStore.closeOther(tab);
      break;
    case 'closeLeft':
      tabStore.closeLeft(tab);
      break;
    case 'closeRight':
      tabStore.closeRight(tab);
      break;
    case 'refreshCurrent':
      tabStore.refreshCurrent(tab);
      break;
  }
}
</script>

<style scoped>
:deep(.el-tabs__header) {
  margin-bottom: 0;
  padding: 0 40px 0 20px;
}
</style>
